/**
 * Simple YouTube Responsive
 * Lazy Load, Since version 2.0.0
 *
 **/
window.addEventListener("load",function(){for(var e=document.querySelectorAll(".erd-ytplay"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){var e=document.createElement("iframe");e.setAttribute("id","erdyti-"+[t]+"-"+this.dataset.vid),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",""),e.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),e.setAttribute("src",this.dataset.src);var r=this.parentNode;r.innerHTML="",r.appendChild(e)})},false);