
  function toggleText() {
    var text = document.getElementById("text-hide");
       let videoShow = document.getElementById("gone");
      let textGone = document.getElementById("text-gone");
    if (text.style.display === "none") {
      text.style.display = "block";
      videoShow.style.display = "none";
       textGone.style.display = "none";
    }  else {
      text.style.display = "none"
      videoShow.style.display = "none";
       textGone.style.display = "none";
      
    }
    var textTwo = document.getElementById("text-hide-two");
    if (textTwo.style.display === "none") {
  textTwo.style.display = "block";
      videoShow.style.display = "none";
       textGone.style.display = "none";
     
    } else {
      textTwo.style.display = "none"
       videoShow.style.display = "none";
       textGone.style.display = "none";
    }
    
    var textThree = document.getElementById("image-hide");
    if (textThree.style.display === "none") {
  textThree.style.display = "block";
      videoShow.style.display = "none";
       textGone.style.display = "none";
      
    
  }else {
      textThree.style.display = "none"
     videoShow.style.display = "none";
       textGone.style.display = "none";
    }
  }
    
    function toggleTextTwo() {
     let videoShow = document.getElementById("gone");
      let textGone = document.getElementById("text-gone");
      var text = document.getElementById("text-hide");
       var textTwo = document.getElementById("text-hide-two");
        var textThree = document.getElementById("image-hide");
      
      if (videoShow.style.display === "none") {
        videoShow.style.display = "block";
        text.style.display = "none";
        textTwo.style.display = "none";
        textThree.style.display = "none";
      } else {
        videoShow.style.display = "none";
        text.style.display = "none";
        textTwo.style.display = "none";
        textThree.style.display = "none";
      }
      
      if (textGone.style.display === "none") {
        textGone.style.display = "block";
        text.style.display = "none";
        textTwo.style.display = "none";
        textThree.style.display = "none";
      } else {
        textGone.style.display = "none";
        text.style.display = "none";
        textTwo.style.display = "none";
        textThree.style.display = "none";
      }
    }