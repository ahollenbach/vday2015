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
          + ".hearts { position: absolute; top:0;left:0;}"
          + ".heart {background: none !important;position: absolute;height: 200px;width: 200px;z-index:3000;}";
  var style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet){style.styleSheet.cssText = css;}
  else {style.appendChild(document.createTextNode(css));}
  document.head.appendChild(style);

  var heartDiv = document.createElement('div');
  heartDiv.className = 'hearts';
  document.body.appendChild(heartDiv);

  var Heart = function(x, y) {
    this.element = document.createElement("img");
    this.element.className = "heart";
    this.element.style.top = y + "px";
    this.element.style.left = x + "px";
    this.element.src = 'https://terry1954.files.wordpress.com/2013/06/beating-heart.gif';
  };
  function randInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  function makeHeart(x,y) {
    x = typeof x !== 'undefined' ? x : randInt(10,window.innerWidth-10);
    y = typeof y !== 'undefined' ? y : randInt(10,window.innerHeight-10);
    var heart = new Heart(x, y);
    if(heartDiv.children.length >= 40) {
        heartDiv.removeChild(heartDiv.children[0]);
    }
    heartDiv.appendChild(heart.element);
  }

  // register on click to create a new heart
  document.onclick = function(event) {
    makeHeart(event.pageX-150, event.pageY-150);
  };
  for(var i=0;i<14;i++) {
    makeHeart();
  }
}());
