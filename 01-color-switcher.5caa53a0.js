!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=null;t.addEventListener("click",(function(t){t.target.setAttribute("disabled",""),e.removeAttribute("disabled"),r=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(e){e.target.setAttribute("disabled",""),t.removeAttribute("disabled"),clearInterval(r)}))}();
//# sourceMappingURL=01-color-switcher.5caa53a0.js.map
