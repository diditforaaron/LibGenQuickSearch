
function update() {
  showNumHistory();
  showHistory();
}

function showHistory() {
  var jsonObj = getHistory();
  var str = "";

  if (jsonObj != null) {
    for(var key in jsonObj) {
      str += key + "\n";
    }
  }
  $("#historyTextarea").val(str);
}

function showNumHistory() {
  var str = "(" + countHistory() + ")";
  $("#numHistory").html(str);
}

function getDisplayedHistory() {
  var str = $("#historyTextarea").val();
  var jsonObj = JSON.parse(str);
  return jsonObj;
}

// -- events

// http://www.w3schools.com/jsref/event_onclick.asp
function addClearEvent() {
  $("#clearButton").click(function(){
    clearHistory();
    update();
  });
}


$(document).ready(function(){
  update();
  addClearEvent();
  addClickLinkEvent();
});
