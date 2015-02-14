javascript: (function () {
  WebFontConfig = {
    google: {
      families: [ 'Meddon::latin' ]
    }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

  // https://gist.github.com/bsingr/939460 for the hearts
  var css = "* { font-family: 'Meddon', cursive !important; background-color: #E0A3A8 !important; }"
          + "html,body {background-color:#280206 !important}"
          + "p,a { background-color: #4C060B !important;color: white !important}"
          + "h1,h2,h3,h4,h5,h6 { background-color: #DD466F !important;color: #280206 !important}"
          + "@-webkit-keyframes resize { 0% { font-size: 0px; color: black; } 100% { font-size: 100px; color: red; } }"
          + ".heart { background: none !important; }"
          + "span.heart {position: absolute;height: 200px;width: 200px;text-align: center;color: red;-webkit-animation-name: resize;-webkit-animation-duration: 0.6s;-webkit-animation-iteration-count: infinite;-webkit-animation-direction: alternate;-webkit-animation-timing-function: ease-in-out;}";
  var style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet){style.styleSheet.cssText = css;}
  else {style.appendChild(document.createTextNode(css));}
  document.head.appendChild(style);

  var heartDiv = document.createElement('div');
  heartDiv.className = 'hearts';
  document.body.appendChild(heartDiv);

  // Heart class represents a beating heart. It is implemented using a span
  // and a heart character. Coloring and resizing the span to create the
  // effect
  var Heart = function(x, y) {
    this.initalize(x, y);
  };
  Heart.prototype = {
    initalize: function(x, y) {
      // create an element
      this.element = document.createElement("span");
      this.element.className = "heart";
      this.element.style.top = y + "px";
      this.element.style.left = x + "px";

      // randomly different heart style
      this.element.innerText = (Math.random() > 0.5) ? "\u2661" : "\u2665";
    }
  };
  function randInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  function makeHeart(x,y) {
    x = typeof x !== 'undefined' ? x : randInt(10,window.innerWidth-10);
    y = typeof y !== 'undefined' ? x : randInt(10,window.innerHeight-10);
    var heart = new Heart(x, y);
    if(heartDiv.children.length >= 10) {
        heartDiv.removeChild(heartDiv.children[0]);
    }
    heartDiv.appendChild(heart.element);
  }

  // register on click to create a new heart
  // document.onclick = function(event) {
  //   makeHeart(event.clientX, event.clientY)
  // };
  for(var i=0;i<7;i++) {
    makeHeart();
  }
}());
