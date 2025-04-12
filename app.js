
let childName = "";
let useFemaleVoice = true;

function startAssistant() {
  const input = document.getElementById("childNameInput").value.trim();
  if (!input) {
    alert("దయచేసి పేరు నమోదు చేయండి");
    return;
  }
  childName = input;
  document.getElementById("menu").classList.remove("hidden");
  playGreeting();
}

function toggleVoiceMode() {
  useFemaleVoice = !useFemaleVoice;
  document.getElementById("voiceMode").innerText = useFemaleVoice ? "Female" : "Male";
}

function playGreeting() {
  const message = `నమస్తే ${childName}, నేనొక్కడివే నీ సహాయకుడు`;
  if (useFemaleVoice) {
    const utter = new SpeechSynthesisUtterance(message);
    utter.lang = "te-IN";
    utter.pitch = 1.2;
    speechSynthesis.speak(utter);
  } else {
    const audio = new Audio("audio/greeting_male.mp3");
    audio.play();
  }
}

function playAudio(name) {
  const audio = new Audio('audio/' + name + '.mp3');
  audio.play();
}

function playAll() {
  const list = ["Gita_2_47", "Ganesha_Prayer"];
  let i = 0;
  function next() {
    if (i < list.length) {
      playAudio(list[i]);
      setTimeout(next, 7000);
      i++;
    }
  }
  next();
}
