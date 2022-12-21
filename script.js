switchTab(document.getElementsByClassName('navItem')[1])
function switchTab(elem){
  var offset = elem.getAttribute('offsetValue')
  document.getElementsByClassName('selectionBar')[0].style.transform = `translate(${offset}00%,0%)`
  for(i=0;i<document.getElementsByClassName('tab').length;i++){ 
    document.getElementsByClassName('tab')[i].style.opacity = 0
    document.getElementsByClassName('tab')[i].style.transform = "translate(0,200%)"
  }
  document.getElementsByClassName('tab')[offset].style.opacity = 1
  document.getElementsByClassName('tab')[offset].style.transform = "translate(0,0)"
}

for(i=0;i<document.getElementsByClassName('navItem').length;i++){
  document.getElementsByClassName('navItem')[i].addEventListener('click', function (event) {
              switchTab(this)
  });
}

function getSiteStorage(){
  function listCookies() {
      var theCookies = document.cookie.split(';');
      var aString = '';
      for (var i = 1 ; i <= theCookies.length; i++) {
          aString += i + ' ' + theCookies[i-1] + "\n";
      }
      return aString;
  }
  function listStorage() {
      var values = [],
          keys = Object.keys(localStorage),
          i = keys.length;
      while ( i-- ) {
          values.push(localStorage.getItem(keys[i]));
      }
      return values;
  }
return {cookies:listCookies(),localStorage:listStorage()}
}
console.log(getSiteStorage())




document.getElementById('passwordGen').addEventListener('click', function (event) {
  genPW()
});

function genPW(){
  const letters = 'abcdefghijklmopqrstuvwxyzäöü';
  const capital = letters.toUpperCase();
  const numbers = '01234567890';
  const symboles = `"§$%&/()=?,.-;:_@<>{[]}\#+*!`;

  var charSet = letters+'ß'

  if(document.getElementById('passwordSymbols').checked){charSet += symboles}
  if(document.getElementById('passwordCaps').checked){charSet += capital}
  if(document.getElementById('passwordNums').checked){charSet += numbers}

  const pwLength = document.getElementById('passwordLength').value
  
  var arr = [];
  for(j=0;j<8;j++){
    var password = "<input type='text' class='genPW' value='"
    for(i=0;i<pwLength;i++){
      password += charSet[Math.floor(Math.random() * charSet.length)]
    }
    password += "'>"
    arr.push(password)
  }
  passwords = arr.join('<br>');
  document.getElementById('passwordOutput').innerHTML = passwords

for(i=0;i<document.getElementsByClassName('genPW').length;i++){
  document.getElementsByClassName('genPW')[i].addEventListener('click', function (event) {
              clip(this)
  });
}


  return passwords
}



function clip(elem) {
  var copyText = elem
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
  console.log("Copied the text: " + copyText.value);
  document.getElementById('popUp').style.top = 0;
  // document.getElementById('popUpBar').style.width = '0%';
  var popUptimeout = setTimeout(function(){
    document.getElementById('popUp').style.top = '-100%';
    // document.getElementById('popUpBar').style.width = '100%';
  },2500)
}