const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=null;t.addEventListener("click",(function(t){t.target.setAttribute("disabled",""),n=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.0c676754.js.map