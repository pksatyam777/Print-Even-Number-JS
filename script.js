function even() {
  var bodyref=document.getElementsByTagName('body')
  var divref=document.createElement('div')
  var data="<ul>"


  for (let i = 100; i >= 1; i--) {
    if (i % 2 == 0) {

      data=data+`        <li style="list-style-type:none;display:inline;background-color:#ea2c62;margin:8px 2px;padding:4px 6px;color:white; line-height: 1.8;border-radius:20px; ">${i}</li>`



    }
  }
  data=data+"</ul>"
  divref.innerHTML=data


  bodyref[0].appendChild(divref)




}
