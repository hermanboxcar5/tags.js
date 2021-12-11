let tags = {}
tags.list = []
tags.init = {}
tags.init.dev={}
tags.init.dev.callerarr = ['#((', '))']
tags.init.dev.renderSpeed = 10;
tags.dev = {}
tags.tag = function(str, html, css, js) {
  tags.list.push(str)
  let objs = document.getElementsByTagName(str)
  tags[str] = {}
  Array.from(objs).map(i => {
    tags[str].attr =i.attributes;
    tags[str].tagname = str;
    tags[str].html = html;
    tags[str].css = css;
    tags[str].js = js;
    tags[str].content = i.innerHTML
    tags[str].val = i.value
    i.innerHTML = `<style>${css}</style>${html}<script>${js}</script>`;
    
  })
}
tags.dev.renderSpeed = function(s) {
  tags.init.dev.renderSpeed = s;
}
tags.dev.scriptCaller = function(s, e) {
  tags.init.dev.callerarr = [s, e]
}
tags.init.dev.rawRender = function() {
  let content = document.body.innerHTML;
  let c = content.split(tags.init.dev.callerarr[0])
  let c2= []
  c.map(x => {
    x.split(tags.init.dev.callerarr[1]).map(y => {c2.push(y)})
  })
  for (let i = 1; i < c2.length; i+=2) {
    let thisArr = c2[i].split("")
    let newCond;
    for (let e = 0; e < thisArr.length; e++) {
      if (`${thisArr[e]}${thisArr[e+1]}${thisArr[e+2]}${thisArr[e+3]}${thisArr[e+4]}${thisArr[e+5]}` === "return") {newCond = true}
    }
    if(newCond){
    let func = new Function(c2[i]);
    c2[i] = func()
    } else {
    let func = new Function('return ' + c2[i])
    c2[i] = func()
    }
  }
  document.body.innerHTML = c2.join('');
}

   
window._ = function(q, i) {
  let rvc = document.querySelectorAll(q)
  if (i == null) {
  rvc = rvc[0]
  rvc.txt = e => {       if (e == null || e == undefined || e == "") {
           return rvc.innerText
         } else {
            rvc.innerText = e
         }
   }

  rvc.val = e => {
         if (e == null || e == undefined || e == "") {
           return rvc.value
         } else {
         rvc.value = e;
         }
      }
  rvc.html = e => {if (x == null || x == undefined || x == "") {
           return rvc.outerHTML
         } else {
         rvc.outerHTML = x;
         }
                  }
  } else if (i < rvc.length) {
  rvc = rvc[i]
    rvc.txt = e => {       if (e == null || e == undefined || e == "") {
           return rvc.innerText
         } else {
            rvc.innerText = e
         }
   }

  rvc.val = e => {
         if (e == null || e == undefined || e == "") {
           return rvc.value
         } else {
         rvc.value = e;
         }
      }
  rvc.html = e => {if (x == null || x == undefined || x == "") {
           return rvc.outerHTML
         } else {
         rvc.outerHTML = x;
         }
                  }  }
  return rvc

}

function gettxt(e) {
         if (e == null || e == undefined || e == "") {
           return rvc.innerText
         } else {
            rvc.innerText = e
         }
   }

function getval(e){
         if (e == null || e == undefined || e == "") {
           return rvc.value
         } else {
         rvc.value = e;
         }
      }
function gethtml(x) {
         if (x == null || x == undefined || x == "") {
           return rvc.innerHTML
         } else {
         rvc.innerHTML = x;
         }
      }
tags.newVar = function(name, value) {
  window[name] = value
}
tags.init.dev.rawRender()
window.tags = tags
