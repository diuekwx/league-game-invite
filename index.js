function hideButton() {
    var btn = document.getElementsByClassName('btn');
      document.getElementsByClassName("btn")
      for (var i = 0; i < btn.length; i++)
      {
        btn[i].style.display = 'none';
      }
    }

function yesButton()
      {
        window.alert("muahahahaha yay");
        document.getElementById("image").src="cat-finger-heart.png"
        document.getElementById("text").innerHTML="yay come fast :3"
      }
function noButton()
      {
        window.alert("im going to killmyself");
        document.getElementById("image").src="cat-middle-finger.png"
        document.getElementById("text").innerHTML="FUCK YOU!"
      }