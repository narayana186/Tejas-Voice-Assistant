let childName = "";

function startAssistant() {
  const input = document.getElementById("childNameInput").value.trim();
  if (!input) return alert("పేరు నమోదు చేయండి");
  childName = input;
  document.getElementById("menu").classList.remove("hidden");
  speak(`హాయ్ ${childName}, ఏమి చేయాలి చెప్పు`);
}

function startStoryMode() {
  speak(`${childName}, కథలు ప్రారంభిద్దామా!`);
}

function startShlokaMode() {
  const shloka = shlokas[Math.floor(Math.random() * shlokas.length)];
  speak(`${childName}, విను: ${shloka}`);
}

function playRandom() {
  const options = ["startStoryMode", "startShlokaMode"];
  const fn = options[Math.floor(Math.random() * options.length)];
  window[fn]();
}

function speak(text) {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = "te-IN";
  window.speechSynthesis.speak(msg);
}