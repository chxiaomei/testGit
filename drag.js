console.log('Hello Git');



function drag(id){
  var id = document.getElementById(id);
  var disX = 0;
  var disY = 0;
  obj.onmousedown=function(ev){
      console.log(id);
      disX = ev.pageX - obj.offsetLeft;
      disY = ev.pageY - obj.offsetTop;
  }

}

