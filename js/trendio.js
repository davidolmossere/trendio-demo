function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return;
}

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function eraseCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function escAction() {
  let backPage = document.querySelector('body').getAttribute('id');
  switch (backPage) {
    case "catalog-page":
      window.location.href = "home.html";
      break;
    case "home-page":
      window.location.href = "index.html";
      break;
    default:
      window.location.href = "catalog.html";
      return;
  }  
}

function resetLogin() {
  var element = document.getElementById("home-page");
  if(typeof(element) != 'undefined' && element != null) {
    setCookie('loggedin',"0");
  }
}

(function () {
    resetLogin();
})();