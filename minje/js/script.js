function changeMainFrameCal() {
  var mainFrame = document.getElementById("mainFrame");
  var newUrl = "table.html";
  mainFrame.src = newUrl;
  mainFrame.onload = function() {
    console.log("iframe table.html 로드 완료");
  };
}

function changeMainFrameMain(){
  var mainFrame = document.getElementById("mainFrame");
  var newUrl = "";
  mainFrame.src = newUrl;
  mainFrame.onload = function() {
    console.log("iframe 로드 완료");
  };
}

function changeMainFrameSnow() {
  var mainFrame = document.getElementById("mainFrame");
  var newUrl = "snow.html";
  mainFrame.src = newUrl;
  mainFrame.onload = function() {
    console.log("iframe snow.html 로드 완료");
  };
}

function changeMainFrameLogin() {
  var mainFrame = document.getElementById("mainFrame");
  var newUrl = "login.html";
  mainFrame.src = newUrl;
  mainFrame.onload = function() {
    console.log("iframe login.html 로드 완료");
  };
}

function changeMainFrameJoin() {
  var mainFrame = document.getElementById("mainFrame");
  var newUrl = "join.html";
  mainFrame.src = newUrl;
  mainFrame.onload = function() {
    console.log("iframe join.html 로드 완료");
  };
}
