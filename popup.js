let regex = document.getElementById('regex');

chrome.storage.sync.get('color', function(data) {
  regex.style.backgroundColor = data.color;
  regex.setAttribute('value', "salam");
});




document.addEventListener('DOMContentLoaded', function () {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.onclick = function (element) {
    console.log(element.target.value);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          
          code: `

          console.log('new');
          findString('new');
          function findString(str) {
            if (parseInt(navigator.appVersion) < 4) return;
            var strFound;
            if (window.find) {
          
              // CODE FOR BROWSERS THAT SUPPORT window.find
          
              strFound = self.find(str);
              if (!strFound) {
                strFound = self.find(str, 0, 1);
                while (self.find(str, 0, 1)) continue;
              }
            }
            else if (navigator.appName.indexOf("Microsoft") != -1) {
          
              // EXPLORER-SPECIFIC CODE
          
              if (TRange != null) {
                TRange.collapse(false);
                strFound = TRange.findText(str);
                if (strFound) TRange.select();
              }
              if (TRange == null || strFound == 0) {
                TRange = self.document.body.createTextRange();
                strFound = TRange.findText(str);
                if (strFound) TRange.select();
              }
            }
            else if (navigator.appName == "Opera") {
              alert("Opera browsers not supported, sorry...")
              return;
            }
            if (!strFound) alert("String '" + str + "' not found!")
            return;
          }
                
                `
        });
    });
  };

}, false);


function findString (str) {
  if (parseInt(navigator.appVersion)<4) return;
  var strFound;
  if (window.find) {
 
   // CODE FOR BROWSERS THAT SUPPORT window.find
 
   strFound=self.find(str);
   if (!strFound) {
    strFound=self.find(str,0,1);
    while (self.find(str,0,1)) continue;
   }
  }
  else if (navigator.appName.indexOf("Microsoft")!=-1) {
 
   // EXPLORER-SPECIFIC CODE
 
   if (TRange!=null) {
    TRange.collapse(false);
    strFound=TRange.findText(str);
    if (strFound) TRange.select();
   }
   if (TRange==null || strFound==0) {
    TRange=self.document.body.createTextRange();
    strFound=TRange.findText(str);
    if (strFound) TRange.select();
   }
  }
  else if (navigator.appName=="Opera") {
   alert ("Opera browsers not supported, sorry...")
   return;
  }
  if (!strFound) alert ("String '"+str+"' not found!")
  return;
 }





