
let useRealVoice = true;
const audioList = ["Gita_2_47", "Gita_4_7", "Gita_18_66", "Ganesha_Prayer", "Krishna_Prayer", "Vishnu_Prayer"];

function toggleVoiceMode() {
  useRealVoice = !useRealVoice;
  document.getElementById('mode').innerText = useRealVoice ? "Real" : "TTS";
}

function playAudio(name, repeat=false) {
  if (useRealVoice) {
    const audio = new Audio('audio/' + name + '.mp3');
    audio.play();
    if (repeat) {
      setTimeout(() => {
        audio.play();
      }, 6000);
    }
  } else {
    const textMap = {
      Gita_2_47: "కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన",
      Gita_4_7: "యదా యదా హి ధర్మస్య గ్లానిః భవతి భారత",
      Gita_18_66: "సర్వధర్మాన్ పరిత్యజ్య మామేకం శరణం వ్రజ",
      Ganesha_Prayer: "శుక్లాంబరధరం విష్ణుం శశివర్ణం చతుర్భుజం",
      Krishna_Prayer: "వసుదేవ సుతం దేవం కంస చాణూర మర్దనమ్",
      Vishnu_Prayer: "ఓం నమో భగవతే వాసుదేవాయ"
    };
    const utter = new SpeechSynthesisUtterance(textMap[name]);
    utter.lang = "te-IN";
    speechSynthesis.speak(utter);
    if (repeat) {
      setTimeout(() => {
        speechSynthesis.speak(utter);
      }, 6000);
    }
  }
}

function playAll() {
  let i = 0;
  function next() {
    if (i < audioList.length) {
      playAudio(audioList[i]);
      setTimeout(next, 7000);
      i++;
    }
  }
  next();
}
