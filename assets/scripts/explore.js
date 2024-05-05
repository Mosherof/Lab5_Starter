// explore.js

window.addEventListener('DOMContentLoaded', init);

function GetVoices(){
  const voices = speechSynthesis.getVoices();
  const select = document.getElementsByTagName("select")[0];
  for (let i = 0; i < voices.length; i++) {
    let newVoice = document.createElement("option");
    newVoice.value = voices[i].name;
    newVoice.innerHTML = voices[i].name;
    select.append(newVoice);
  }
}

function closeMouth() {
  document.getElementsByTagName("img")[0].src = "assets/images/smiling.png";
}

function speak() {
  const message = document.getElementById("text-to-speak").value;
  const utterance = new SpeechSynthesisUtterance(message);
  const currentVoice = document.getElementsByTagName("select")[0].selected
  const allVoices = speechSynthesis.getVoices();
  for (let i = 0; i < allVoices.length; i++) {
    if (allVoices[i].name == currentVoice) {
      utterance.voice = allVoices[i];
      break;
    }
  }
  document.getElementsByTagName("img")[0].src = "assets/images/smiling-open.png";
  speechSynthesis.speak(utterance);
  utterance.onend = closeMouth;
}

function changeVoice(){
  document.getElementsByTagName("select")[0].selected =  document.getElementsByTagName("select")[0].value;
}


function init() {
  speechSynthesis.addEventListener("voiceschanged",GetVoices);
  document.getElementsByTagName("button")[0].addEventListener("click", speak);
  speechSynthesis.addEventListener("end", closeMouth);
  document.getElementsByTagName("select")[0].addEventListener("change", changeVoice);
}