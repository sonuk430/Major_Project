const typingTextEl = document.querySelector(".typing-text p");

// find random paragraphs;

function randomParagraph() {
  let randomPera = Math.floor(Math.random() * paragraphs.length);

  // random pera hm apne array se le rahe he or us pera ke sare corector ko split kr typingTextEl "p" tag me store kr rahe he.
  paragraphs[randomPera].split("").forEach((span) => {
    let spanTag = `<span>${span}</span>`;
    typingTextEl.innerHTML += spanTag;
  });
}

randomParagraph();
