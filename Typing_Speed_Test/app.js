const typingTextEl = document.querySelector(".typing-text p");

const inputDataEl = document.querySelector("main .inputData");

let timeEl = document.querySelector(".time span b");

let mistakesEL = document.querySelector(".mistakes span");
let wpmEl = document.querySelector(".wpm span");
let cpmEl = document.querySelector(".cpm span");

const tryAgainBtn = document.querySelector(".tryAgain");

let timer;
let maxTime = 60;
let timeLeft = maxTime;

let charIndex = (mistakes = isTyping = 0);

// find random paragraphs;
function randomParagraph() {
  let randomPera = Math.floor(Math.random() * paragraphs.length);
  typingTextEl.innerHTML = "";
  // random pera hm apne array se le rahe he or us pera ke sare corector ko split kr typingTextEl "p" tag me store kr rahe he.
  paragraphs[randomPera].split("").forEach((span) => {
    let spanTag = `<span>${span}</span>`;
    typingTextEl.innerHTML += spanTag;
  });

  typingTextEl.querySelectorAll("span")[0].classList.add("active");
  // work on the input field
  document.addEventListener("keydown", () => {
    inputDataEl.focus();
  });

  typingTextEl.addEventListener("click", () => {
    inputDataEl.focus();
  });
}

function typing() {
  const charaters = typingTextEl.querySelectorAll("span");
  // teken all input text value;
  let typeChar = inputDataEl.value.split("")[charIndex];

  if (charIndex < charaters.length - 1 && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }

    if (typeChar == null) {
      charIndex--;
      if (charaters[charIndex].classList.contains("incorrect")) {
        mistakes--;
      }
      charaters[charIndex].classList.remove("correct", "incorrect");
    } else {
      if (charaters[charIndex].innerText === typeChar) {
        charaters[charIndex].classList.add("correct");
        // console.log("correct");
      } else {
        mistakes++;
        charaters[charIndex].classList.add("incorrect");
        // console.log("in correct");
      }
      charIndex++;
    }

    charaters.forEach((span) => span.classList.remove("active"));
    charaters[charIndex].classList.add("active");
    // console.log(typeChar);

    let wpm = Math.round(
      ((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60
    );

    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    mistakesEL.innerText = mistakes;
    wpmEl.innerText = wpm;
    cpmEl.innerText = charIndex - mistakes;
  } else {
    inputDataEl.value = "";
    clearInterval(timer);
  }
}

function initTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timeEl.innerText = timeLeft;
  } else {
    clearInterval(timer);
  }
}

function reset() {
  randomParagraph();
  inputDataEl.value = "";
  clearInterval(timer);
  timeLeft = maxTime;
  charIndex = mistakes = isTyping = 0;
  timeEl.innerText = timeLeft;
  mistakesEL.innerText = 0;
  cpmEl.innerText = 0;
}

randomParagraph();

inputDataEl.addEventListener("input", typing);
tryAgainBtn.addEventListener("click", reset);

// **********************************************

function darkLightMode() {
  const body = document.body;
  const setMode = document.querySelector(".setMode");
  const light = document.querySelector(".light");
  const dark = document.querySelector(".dark");

  let initvalue = true;

  setMode.addEventListener(
    "click",
    () => {
      if (initvalue == true) {
        initvalue = false;
        body.style.backgroundColor = "#e8eaed";
        light.style.display = "block";
        dark.style.display = "none";
        console.log("dark");
      } else {
        initvalue = true;
        body.style.backgroundColor = "#202124";
        light.style.display = "none";
        dark.style.display = "block";
        console.log("light");
      }
    },
    false
  );
}

darkLightMode();
