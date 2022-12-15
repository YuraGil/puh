var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/puh.jpg') {
      myImage.setAttribute ('src','images/puh1.jpg');
    } else {
      myImage.setAttribute ('src','images/puh.jpg');
      
    }
}
