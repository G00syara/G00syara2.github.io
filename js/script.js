
function add_theme_1(){
  isTheme();
  add_theme_1_1();
}
function add_theme_1_1() {
    let theme = document.getElementById("theme");
    let logo = document.getElementById("logo");
    let buttons = document.getElementById("buttons");


    if (theme.getAttribute("href") == "css/style.css"){
        theme.href = "css/darkstyle.css";
        logo.src = "images/kishdark.png"
        buttons.src = "images/sun.png"
        localStorage.setItem("logo","css/darkstyle.css");
        localStorage.setItem("buttons","css/darkstyle.css");

    }
    else{
        theme.href = "css/style.css";
        logo.src = "images/kish.png"
        buttons.src = "images/moon.png"
        localStorage.setItem("logo","css/style.css");
        localStorage.setItem("buttons","css/style.css");

    }
}
function add_theme_2(){
  isTheme();
  add_theme_2_1();
}

function add_theme_2_1(){

  let theme = document.getElementById("theme");
  let logo = document.getElementById("logo");
  let buttons = document.getElementById("buttons");


  if (theme.getAttribute("href") == "css/style.css"){
      theme.href = "css/darkstyle.css";
      logo.src = "images/kishdark.png"
      buttons.src = "images/sun.png"
      localStorage.setItem("logo","css/darkstyle.css");
      localStorage.setItem("buttons","css/darkstyle.css");

  }
  else{
      theme.href = "css/style.css";
      logo.src = "images/kish.png"
      buttons.src = "images/moon.png"
      localStorage.setItem("logo","css/style.css");
      localStorage.setItem("buttons","css/style.css");

  }
}
//kontacts
function add_theme_3(){
  isTheme();
  add_theme_3_1();
}
function add_theme_3_1(){

  let theme = document.getElementById("theme");
  let logo = document.getElementById("logo");
  let buttons = document.getElementById("buttons");


  if (theme.getAttribute("href") == "css/style.css"){
      theme.href = "css/darkstyle.css";
      logo.src = "images/kishdark.png"
      buttons.src = "images/sun.png"
      localStorage.setItem("logo","css/darkstyle.css");
      localStorage.setItem("buttons","css/darkstyle.css");

  }
  else{
      theme.href = "css/style.css";
      logo.src = "images/kish.png"
      buttons.src = "images/moon.png"
      localStorage.setItem("logo","css/style.css");
      localStorage.setItem("buttons","css/style.css");

  }
}

//portfolio
function add_theme_4(){
  isTheme();
  add_theme_4_1();
}
function add_theme_4_1(){

  let theme = document.getElementById("theme");
  let logo = document.getElementById("logo");
  let buttons = document.getElementById("buttons");


  if (theme.getAttribute("href") == "css/style.css"){
      theme.href = "css/darkstyle.css";
      logo.src = "images/kishdark.png"
      buttons.src = "images/sun.png"
      localStorage.setItem("logo","css/darkstyle.css");
      localStorage.setItem("buttons","css/darkstyle.css");

  }
  else{
      theme.href = "css/style.css";
      logo.src = "images/kish.png"
      buttons.src = "images/moon.png"
      localStorage.setItem("logo","css/style.css");
      localStorage.setItem("buttons","css/style.css");

  }
}

//resume
function add_theme_5(){
  isTheme();
  add_theme_5_1();
}
function add_theme_5_1(){

  let theme = document.getElementById("theme");
  let logo = document.getElementById("logo");
  let buttons = document.getElementById("buttons");


  if (theme.getAttribute("href") == "css/style.css"){
      theme.href = "css/darkstyle.css";
      logo.src = "images/kishdark.png"
      buttons.src = "images/sun.png"
      localStorage.setItem("logo","css/darkstyle.css");
      localStorage.setItem("buttons","css/darkstyle.css");

  }
  else{
      theme.href = "css/style.css";
      logo.src = "images/kish.png"
      buttons.src = "images/moon.png"
      localStorage.setItem("logo","css/style.css");
      localStorage.setItem("buttons","css/style.css");

  }
}
function block1_show(){
  setCookie("block1_style", "show");
  document.getElementById('block1').style.display='block'; 
  document.getElementById('b1_1').style.display='none'; 
  document.getElementById('b2_1').style.display='block';
}
function block1_hide(){
  setCookie("block1_style", "hide");
  document.getElementById('block1').style.display='none'; 
  document.getElementById('b2_1').style.display='none'; 
  document.getElementById('b1_1').style.display='block';
}
function block2_show(){
  setCookie("block2_style", "show");
  document.getElementById('block2').style.display='block'; 
  document.getElementById('b1_2').style.display='none'; 
  document.getElementById('b2_2').style.display='block';
}
function block2_hide(){
  setCookie("block2_style", "hide");
  document.getElementById('block2').style.display='none'; 
  document.getElementById('b2_2').style.display='none'; 
  document.getElementById('b1_2').style.display='block';
}
function block3_show(){
  setCookie("block3_style", "show");
  document.getElementById('block3').style.display='block'; 
  document.getElementById('b1_3').style.display='none'; 
  document.getElementById('b2_3').style.display='block';
}
function block3_hide(){
  setCookie("block3_style", "hide");
  document.getElementById('block3').style.display='none'; 
  document.getElementById('b2_3').style.display='none'; 
  document.getElementById('b1_3').style.display='block';
}
function block4_show(){
  setCookie("block4_style", "show");
  document.getElementById('block4').style.display='block'; 
  document.getElementById('b1_4').style.display='none'; 
  document.getElementById('b2_4').style.display='block';
}
function block4_hide(){
  setCookie("block4_style", "hide");
  document.getElementById('block4').style.display='none'; 
  document.getElementById('b2_4').style.display='none'; 
  document.getElementById('b1_4').style.display='block';
}

/////////////////////////////
function reg(){
  //обработка label (работает)
  name = document.register.name.value;
  email = document.register.email.value;
  phone = document.register.phone.value;
  console.log("Данные из текстовых полей: " + name + " " + email + " " + phone);

  //обработка checkbox (работает)
  var checkbox1_consile = false;
  if(document.register.checkbox1.checked){checkbox1_consile = document.register.checkbox1.value;}
  var checkbox2_consile = false;
  if(document.register.checkbox2.checked){checkbox2_consile = document.register.checkbox2.value;}
  console.log("Данные из переключателей: " + checkbox1_consile + " " + checkbox2_consile );

  //Обработка radio (работает)
  var rad = document.getElementsByName("group1");
  for(i = 0; i < rad.length; i++){
      if(rad[i].checked){
          if(i == 0) {var res = "По пейджеру";}
          if(i == 1) {var res = "Голубиной почтой";}
          if(i == 2) {var res = "Гонцом";}
          var index = i + 1;
      }
      //else {var res = ""; var index = "--";}
  }
  console.log("Данные из кнопок: выбран " + index + " элемент, " + res);

  //обработка select
  var theme_index = document.getElementById("contacts3").value;
  if(theme_index == "sel1"){var theme = "Спорт";}
  if(theme_index == "sel2"){var theme = "Киберспорт";}
  if(theme_index == "sel3"){var theme = "Шахматы";}
  if(theme_index == "sel4"){var theme = "Не спорт";}
  console.log("Данные из выпадающего списка: " + theme + ", " + theme_index + " элемент");

  //обработка сообщения
  var message = document.getElementById("message").value;
  console.log("Собщение от пользователя: " + message);

  

  var text = "";
  text += name + " Салам Аллейкум вот тут форма " + "\n"; 
  text += "Почта: " + email + "\n";
  text += "Телефон: " + phone + "\n";
  text += "Данные из переключателей: " + checkbox1_consile + " " + checkbox2_consile +   "\n";
  text += "Данные из кнопок: выбран " + index + " элемент, " + res + "\n";
  text += "Данные из выпадающего списка: " + theme + ", " + theme_index + " элемент" + "\n";
  text += "\n" + "Ваш вопрос:\n" + message + "\n"

  alert(text);
  document.getElementById("render_register").innerHTML = text;

}

////////////
function right(){
  var current = document.querySelector('.images .image.active');
  var next = current.nextElementSibling;

  if (!next) {
      next = document.querySelector('.images .image:first-child');
  }
  removeClass(current, 'active');
  addClass(next, 'active');
}
function left(){
  var current = document.querySelector('.images .image.active');
  var next = current.previousElementSibling;

  if (!next) {
      next = document.querySelector('.images .image:last-child');
  }
  removeClass(current, 'active');
  addClass(next, 'active');
}
function removeClass(element, className) {
  var classes = element.className.split(' ');
  var key = classes.findIndex(function(name) {
      return name == className
  });
  classes.splice(key, 1);
  element.className = classes.join(' ');
}

function addClass(element, className) {
  var classes = element.className.split(' ');
  classes.push(className);
  element.className = classes.join(' ');
}

/////////////////////////
function getCookie(cookie_name)
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

function setCookie( name, value, exp_y, exp_m, exp_d, path, domain, secure )
{
  var cookie_string = name + "=" + escape ( value );
 
  if ( exp_y )
  {
    var expires = new Date ( exp_y, exp_m, exp_d );
    cookie_string += "; expires=" + expires.toGMTString();
  }
 
  if ( path )
        cookie_string += "; path=" + escape ( path );
 
  if ( domain )
        cookie_string += "; domain=" + escape ( domain );
  
  if ( secure )
        cookie_string += "; secure";
  
  document.cookie = cookie_string;
  console.log(document.cookie);
}

function deleteCookie(cookie_name)
{
  var cookie_date = new Date ( );  // Текущая дата и время
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

function isButtonShow(){
  if(getCookie("block1_style") == "hide") { block1_hide(); }
  if(getCookie("block2_style") == "hide") { block2_hide(); }
  if(getCookie("block3_style") == "hide") { block3_hide(); }
  if(getCookie("block4_style") == "hide") { block4_hide(); }
}


function isTheme(){
  //if(getCookie("theme") == "light") { setCookie("theme", "dark"); }
  if(getCookie("theme") == "dark") 
  { 
    deleteCookie("theme");
    setCookie("theme", "light"); 
  }
  else { setCookie("theme", "dark"); }
}

function isDarkTheme_kompetetions(){
  if(theme.getCookie("theme") == "dark") { add_theme_1_1(); }
}
function isDarkTheme_main(){
  if(theme.getCookie("theme") == "dark") { add_theme_2_1(); }
}
function isDarkTheme_kontacts(){
  if(theme.getCookie("theme") == "dark") { add_theme_3_1(); }
}
function isDarkTheme_portfolio(){
  if(theme.getCookie("theme") == "dark") { add_theme_4_1(); }
}
function isDarkTheme_resume(){
  if(theme.getCookie("theme") == "dark") { add_theme_5_1(); }
}
/*document.addEventListener("DOMContentLoaded", function(event) {
//when loading document
      var background = localStorage.getItem("background");
    // get localStorage var background
      if (background) {
    // if its not null and empty
        document.body.className += background;
    //add class to body
      }
    });
*/

