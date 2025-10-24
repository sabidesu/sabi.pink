const headsOrTails = () => {
  // q: why is this coin weighted?
  // a: the longer the pronunciation the better
  return Math.random() < 0.9 ? true : false;
};

const pronounce = (pronunciation) => {
  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(pronunciation);
  utterance.lang = "en-US";
  utterance.rate = 0.8;
  speechSynthesis.speak(utterance);
};

const generatePronunciation = () => {
  let result;
  const pronunciationType = Math.random();

  if (pronunciationType < 0.01) result = "zimbabwe 🌍";
  else if (pronunciationType >= 0.01 && pronunciationType < 0.02)
    result = "saboba 🧋";
  else {
    const syllables = [
      "bi",
      "ba",
      "bba",
      "bbi",
      "sb",
      "sba",
      "sbi",
      "sbbi",
      "sbba",
    ];
    result = "s";
    result += headsOrTails() ? "a" : "";

    while (headsOrTails())
      result += syllables[Math.floor(Math.random() * syllables.length)];
    result += "bi";

    if (result === "sabi") result += " 🎊";
  }

  return result;
};

const updatePronunciation = (pronunciation) => {
  const p = document.getElementById("pronunciation");
  p.textContent = pronunciation;
};

const makeAndPronounce = () => {
  const pronunciation = generatePronunciation();
  pronounce(pronunciation);
  updatePronunciation(pronunciation);
};
