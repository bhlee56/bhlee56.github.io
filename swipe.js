function swipedetect(el, callback){

  var touchsurface = el,
  swipedir,
  startX,
  startY,
  distX,
  threshold = screen.width, //required min distance traveled to be considered swipe
  restraint = screen.height, // maximum distance allowed at the same time in perpendicular direction
  handleswipe = callback || function(swipedir){}

  touchsurface.addEventListener('touchstart', function(e){
    var touchobj = e.changedTouches[0]
    swipedir = 'none'
    dist = 0
    startX = touchobj.pageX
    startY = touchobj.pageY
  }, false)

  touchsurface.addEventListener('touchmove', function(e){
    var touchobj = e.changedTouches[0]
    distX = touchobj.pageX - startX

    var element = document.getElementById('swipe')
    element.style.transform = 'translate3d(' + distX + 'px,0,0)'
  }, false)

  touchsurface.addEventListener('touchend', function(e){
    var touchobj = e.changedTouches[0]
    distX = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
    if (Math.abs(distX) >= threshold / 4 && Math.abs(touchobj.pageY - startY) <= restraint / 12){
      swipedir = (distX < 0)? 'right' : 'left'
    }

    document.getElementById('swipe').setAttribute("style", "transform: translate3d(0,0,0); transition-duration: 0.3s;")

    handleswipe(swipedir)
  }, false)
}
