var C_DAYS = 365;
var C_HIST = "tomabroad_gdict";

// http://www.w3schools.com/js/js_cookies.asp
function setCookie(c_name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie = c_name + "=" + c_value;
}

// http://www.w3schools.com/js/js_cookies.asp
function getCookie(c_name) {
  var c_value = document.cookie;
  var c_start = c_value.indexOf(" " + c_name + "=");
  if (c_start == -1) {
    c_start = c_value.indexOf(c_name + "=");
  }
  
  if (c_start == -1) {
    c_value = null;
  } else {
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    
    if (c_end == -1) {
      c_end = c_value.length;
    }
    c_value = unescape(c_value.substring(c_start,c_end));
  }
  return c_value;
}

// history

function getHistory() {
  var str = getCookie(C_HIST);
  var jsonObj = null;

  if (str) {
    jsonObj = JSON.parse(str);
  } else {
    jsonObj = {};
  }
  return jsonObj;
}

function countHistory() {
  var obj = getHistory();
  return Object.keys(obj).length;
}

function addHistory(term) {
  var hist = getHistory();
  term = term.toLowerCase();

  if (hist[term]) {
    hist[term]++;
  } else {
    hist[term] = 1;
  }
  setHistory(hist);
}

function setHistory(jsonObj) {
  var str = JSON.stringify(jsonObj);
  setCookie(C_HIST, str, C_DAYS);
}

function clearHistory() {
  setHistory({});
}
