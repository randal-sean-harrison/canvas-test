function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {

  // Add CSS files to the head element ==============================================

  function appendTheCSS(cssUrl) {
    // get the HTML head element
    let head = document.getElementsByTagName('HEAD')[0];

    // Create new link Element
    let link = document.createElement('link');

    // set the attributes for link element
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssUrl;

    // Append link element to HTML head
    head.appendChild(link);
  }

  appendTheCSS("https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css")
  appendTheCSS("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")


});
