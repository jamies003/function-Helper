// Parse Query Arguments

let query = window.location.search.substring(1).split('&');

queryArgs = {};
for (let i = 0; i < query.length; ++i) {
  let val = query[i].split('=');
  if (val[0] == '') {
    continue;
  }
  queryArgs[decodeURIComponent(val[0])] = decodeURIComponent(val[1]);
}

document.title = queryArgs['title'];

// Enable RTL.
if (queryArgs['rtl'] == '1') {
  document.documentElement.dir = 'rtl';
}

// Enable custom links.
if (queryArgs['enableCustomLinks'] == '1') {
  customLinksFeatureEnabled = true;
}

currGrid = new Grid();
// Set up layout updates on window resize. Throttled according to
// |RESIZE_TIMEOUT_DELAY|.
let resizeTimeout;
window.onresize = () => {
  if (resizeTimeout) {
    window.clearTimeout(resizeTimeout);
  }
  resizeTimeout = window.setTimeout(() => {
    resizeTimeout = null;
    currGrid.onResize();
  }, RESIZE_TIMEOUT_DELAY);
};

// window.addEventListener('message', handlePostMessage);
// }
