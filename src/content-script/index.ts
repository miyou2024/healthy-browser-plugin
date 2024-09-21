import './index.scss'
// import dragula from 'dragula';

const src = chrome.runtime.getURL('src/content-script/iframe/index.html')

const iframe = document.createElement('iframe')
iframe.src = src
// iframe.srcdoc = '<p style="font-wight:bold;color:red">dynamic iframe content</p>';
iframe.width = '500px'
iframe.height = '300px'
iframe.draggable = true;
iframe.style.position = 'fixed';

if (iframe) {
  document.body?.append(iframe)
  iframe.onload = () => {
    const iw = iframe.contentWindow
    console.log('iw', iw)
    if (iw) {
      console.log('iw postmessage')
      iw.postMessage('Hello to iframe from parent!', '*')
    }

    iframe.ondragend = (e) => {
      console.log('ondragend', e);
      iframe.style.left = `${e.clientX}px`;
      iframe.style.top = `${e.clientY}px`;
    }

    // dragula(iframe, {});
  }
}

self.onerror = function (message, source, lineno, colno, error) {
  console.info(
    `Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\nError object: ${error}`
  )
}
