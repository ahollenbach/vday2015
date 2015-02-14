function setFont(elem) {
  // import hideous font
  elem.style.fontFamily = "'Lovers Quarrel', cursive";
  // it's effectively half-size, so we have to boost it to make it ...readable...
  elem.style.fontSize = "200%";
}


WebFontConfig = {
  google: { families: [ 'Lovers+Quarrel::latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

[].forEach.call(document.getElementsByTagName('p'), setFont);





alert('finished')
