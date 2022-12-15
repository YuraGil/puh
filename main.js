var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'puh.jpg') {
      myImage.setAttribute ('src','puh1.jpg');
    } else {
      myImage.setAttribute ('src','puh.jpg');
      
    }
}
