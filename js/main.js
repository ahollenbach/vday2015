var b = document.getElementById('bookmarklet');
b.href = "javascript:(function()%7BWebFontConfig%3D%7Bgoogle%3A%7Bfamilies%3A%5B'Meddon%3A%3Alatin'%5D%7D%7D%3B(function()%7Bvar%20wf%3Ddocument.createElement('script')%3Bwf.src%3D('https%3A'%3D%3Ddocument.location.protocol%3F'https'%3A'http')%2B'%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fwebfont%2F1%2Fwebfont.js'%3Bwf.type%3D'text%2Fjavascript'%3Bwf.async%3D'true'%3Bvar%20s%3Ddocument.getElementsByTagName('script')%5B0%5D%3Bs.parentNode.insertBefore(wf%2Cs)%3B%7D)()%3Bvar%20css%3D%22*%20%7B%20font-family%3A%20'Meddon'%2C%20cursive%20!important%3B%20background-color%3A%20%23E0A3A8%20!important%3B%20%7D%22%2B%22html%2Cbody%20%7Bbackground-color%3A%23280206%20!important%7D%22%2B%22p%2Ca%20%7B%20background-color%3A%20%234C060B%20!important%3Bcolor%3A%20white%20!important%7D%22%2B%22h1%2Ch2%2Ch3%2Ch4%2Ch5%2Ch6%20%7B%20background-color%3A%20%23DD466F%20!important%3Bcolor%3A%20%23280206%20!important%7D%22%2B%22.hearts%20%7B%20position%3A%20absolute%3B%20top%3A0%3Bleft%3A0%3B%7D%22%2B%22.heart%20%7Bbackground%3A%20none%20!important%3Bposition%3A%20absolute%3Bheight%3A%20200px%3Bwidth%3A%20200px%3Bz-index%3A3000%3B%7D%22%3Bvar%20style%3Ddocument.createElement('style')%3Bstyle.type%3D'text%2Fcss'%3Bif(style.styleSheet)%7Bstyle.styleSheet.cssText%3Dcss%3B%7Delse%7Bstyle.appendChild(document.createTextNode(css))%3B%7Ddocument.head.appendChild(style)%3Bvar%20heartDiv%3Ddocument.createElement('div')%3BheartDiv.className%3D'hearts'%3Bdocument.body.appendChild(heartDiv)%3Bvar%20Heart%3Dfunction(x%2Cy)%7Bthis.element%3Ddocument.createElement(%22img%22)%3Bthis.element.className%3D%22heart%22%3Bthis.element.style.top%3Dy%2B%22px%22%3Bthis.element.style.left%3Dx%2B%22px%22%3Bthis.element.src%3D'https%3A%2F%2Fterry1954.files.wordpress.com%2F2013%2F06%2Fbeating-heart.gif'%3B%7D%3Bfunction%20randInt(min%2Cmax)%7Breturn%20Math.floor(Math.random()*(max-min%2B1)%2Bmin)%3B%7Dfunction%20makeHeart(x%2Cy)%7Bx%3Dtypeof%20x!%3D%3D'undefined'%3Fx%3ArandInt(10%2Cwindow.innerWidth-10)%3By%3Dtypeof%20y!%3D%3D'undefined'%3Fy%3ArandInt(10%2Cwindow.innerHeight-10)%3Bvar%20heart%3Dnew%20Heart(x%2Cy)%3Bif(heartDiv.children.length%3E%3D40)%7BheartDiv.removeChild(heartDiv.children%5B0%5D)%3B%7DheartDiv.appendChild(heart.element)%3B%7Ddocument.onclick%3Dfunction(event)%7BmakeHeart(event.pageX-150%2Cevent.pageY-150)%3B%7D%3Bfor(var%20i%3D0%3Bi%3C14%3Bi%2B%2B)%7BmakeHeart()%3B%7Dvar%20audio%3Ddocument.createElement('audio')%3Baudio.src%3D%22http%3A%2F%2Fandrewhollenbach.com%2Fprojects%2Fvday2013%2Fbgmusic.mp3%22%3Baudio.loop%3Dtrue%3Baudio.autoplay%3Dtrue%3Bdocument.body.append(audio)%7D)()";
