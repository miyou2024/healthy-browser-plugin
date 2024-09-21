import './index.scss'
import Draggabilly from 'draggabilly';

const src = chrome.runtime.getURL('src/content-script/iframe/index.html')

const iframe = document.createElement('iframe')
iframe.src = src
// iframe.srcdoc = '<p style="font-wight:bold;color:red">dynamic iframe content</p>';


const el = document.createElement('div');
el.style.width = '500px'
el.style.width = '300px'
el.style.zIndex = '999999';
el.style.position = 'fixed';
el.style.top = '100px';
el.setAttribute('id', 'el-id');
document.body.append(el)

const elHeader = document.createElement('div');
elHeader.setAttribute('id', 'el-header');
elHeader.style.height='50px';
elHeader.style.background = 'red';
elHeader.style.cursor = 'move';
el.appendChild(elHeader);
el.appendChild(iframe);

if (iframe) {
  iframe.onload = () => {
    const iw = iframe.contentWindow
    console.log('iw', iw)
    if (iw) {
      console.log('iw postmessage')
      iw.postMessage('Hello to iframe from parent!', '*')
    }

    // dragula(iframe, {});
    new Draggabilly(el, {
      handle: '#el-header',
      containment: 'body',
    });
  }
}

self.onerror = function (message, source, lineno, colno, error) {
  console.info(
    `Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\nError object: ${error}`
  )
}
