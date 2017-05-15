var btt = document.getElementById('back-to-top'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    isFireFox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
    scrollPos, docHeight;

// Calculate the document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docELem.offsetHeight);
if (docHeight != 'undefined') {
  offset = docHeight / 4;
}
