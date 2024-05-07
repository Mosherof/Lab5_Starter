
window.addEventListener('DOMContentLoaded', init);

function changeHorn(){
  let horn = document.getElementById("horn-select").value;
  console.log(horn);
  if (horn == "air-horn") {
    document.getElementById("hornpic").src = "assets/images/air-horn.svg";
    document.getElementsByTagName("audio")[0].src = "assets/audio/air-horn.mp3";
  }
  else if (horn == "car-horn") {
    document.getElementById("hornpic").src = "assets/images/car-horn.svg";
    document.getElementsByTagName("audio")[0].src = "assets/audio/car-horn.mp3";
  }
  else if (horn == "party-horn") {
    document.getElementById("hornpic").src = "assets/images/party-horn.svg";
    document.getElementsByTagName("audio")[0].src = "assets/audio/party-horn.mp3";
  }
}

function playSound() {
  document.getElementsByTagName("audio")[0].play();
  if (document.getElementById("horn-select").value == "party-horn") {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}

function changeVolume() {
  const volume = document.getElementById("volume").value;
  document.getElementById("volume").value = volume;
  document.getElementsByTagName("audio")[0].volume = volume / 100;

  if (volume == 0) {
    document.getElementById("volume-image").src = "assets/icons/volume-level-0.svg";
  }
  else if (volume < 33) {
    document.getElementById("volume-image").src = "assets/icons/volume-level-1.svg";
  }
  else if (volume < 67) {
    document.getElementById("volume-image").src = "assets/icons/volume-level-2.svg";
  }
  else {
    document.getElementById("volume-image").src = "assets/icons/volume-level-3.svg";
  }
 
}

function init() {

  const button = document.querySelector("option");
  // TODO
  document.getElementById("horn-select").addEventListener("change", changeHorn);
  document.getElementById("sound").addEventListener("click", playSound);
  document.getElementById("volume-controls").addEventListener("input", changeVolume);
}