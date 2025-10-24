const pastPronunciationsDiv = document.getElementById("past-pronunciations");
const pastPronunciations = [];

const makeAndPronounce = (_event) => {
  const pronunciation = generatePronunciation();
  pastPronunciations.push(pronunciation);

  pronounce(pronunciation);
  updatePronunciation(pronunciation);
  if (pastPronunciations.length > 1)
    createPastPronunciation(pastPronunciations[pastPronunciations.length - 2]);
};

const makePronunciationsButton = document.getElementById("make-pronunciation");
makePronunciationsButton.addEventListener("click", makeAndPronounce);

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

const createPastPronunciation = (pronunciation) => {
  const newPronunciation = document
    .getElementById("temp-pronunciation")
    .cloneNode(true);
  newPronunciation.removeAttribute("id");
  newPronunciation.style.display = "flex";

  p = newPronunciation.querySelector("p");
  p.textContent = pronunciation;

  button = newPronunciation.querySelector("button");
  button.setAttribute("title", `pronounce ${pronunciation}`);
  button.addEventListener("click", sayPastPronunciation);

  pastPronunciationsDiv.prepend(newPronunciation);
};

const sayPastPronunciation = (event) => {
  pronounce(event.target.parentNode.querySelector("p").textContent);
};
