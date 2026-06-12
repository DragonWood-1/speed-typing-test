(() => {
  "use strict";

  const PASSAGES = [
    "The quick brown fox jumps over the lazy dog while the bright morning sun rises slowly above the quiet hills and the small town below begins to wake with the gentle sounds of daily life as people open their windows to greet another beautiful day full of promise and simple joys",
    "Learning to type quickly takes patience and steady practice because your fingers must build muscle memory over time so keep your eyes on the screen instead of the keyboard and focus on accuracy first since speed will naturally follow once your hands know exactly where every letter lives",
    "A gentle rain fell over the city as people hurried along the busy streets carrying umbrellas of every color while cafes filled with warm light and the smell of fresh coffee drifted through open doors inviting travelers to pause for a moment and watch the world slow down",
    "Science begins with curiosity about the world around us and grows through careful observation and honest questions because every great discovery started with someone who wondered why things work the way they do and refused to stop asking until the answer finally revealed itself",
    "The old lighthouse stood firm against the crashing waves guiding ships safely through the dark and stormy night while its keeper climbed the winding stairs to tend the great lamp knowing that countless sailors depended on that single steady beam to find their way home",
    "Good habits are built one small step at a time so choose something simple you can do every single day and stick with it because tiny actions repeated with patience will compound into remarkable results that once seemed completely out of reach when you first began",
  ];

  const els = {
    duration: document.getElementById("duration"),
    restartBtn: document.getElementById("restart-btn"),
    tryAgainBtn: document.getElementById("try-again-btn"),
    timer: document.getElementById("timer"),
    wpm: document.getElementById("wpm"),
    accuracy: document.getElementById("accuracy"),
    errors: document.getElementById("errors"),
    passage: document.getElementById("passage"),
    input: document.getElementById("word-input"),
    results: document.getElementById("results"),
    finalWpm: document.getElementById("final-wpm"),
    finalGrossWpm: document.getElementById("final-gross-wpm"),
    finalAccuracy: document.getElementById("final-accuracy"),
    finalScore: document.getElementById("final-score"),
    finalCorrect: document.getElementById("final-correct"),
    finalIncorrect: document.getElementById("final-incorrect"),
    misspelledSection: document.getElementById("misspelled-section"),
    misspelledList: document.getElementById("misspelled-list"),
  };

  const state = {
    words: [],
    wordIndex: 0,
    correctWords: 0,
    correctChars: 0,
    typedChars: 0,
    misspelled: [], // { expected, typed }
    duration: 60,
    timeLeft: 60,
    timerId: null,
    started: false,
    finished: false,
  };

  function pickPassage() {
    let text = PASSAGES[Math.floor(Math.random() * PASSAGES.length)];
    // Chain extra passages so fast typists never run out of words.
    while (text.split(" ").length < 200) {
      text += " " + PASSAGES[Math.floor(Math.random() * PASSAGES.length)];
    }
    return text.split(" ");
  }

  function renderPassage() {
    els.passage.innerHTML = "";
    state.words.forEach((word, i) => {
      const span = document.createElement("span");
      span.className = "word" + (i === 0 ? " current" : "");
      span.textContent = word;
      els.passage.appendChild(span);
    });
  }

  function scrollCurrentWordIntoView() {
    const current = els.passage.children[state.wordIndex];
    if (!current) return;
    const offset = current.offsetTop - els.passage.offsetTop;
    els.passage.scrollTop = Math.max(0, offset - 40);
  }

  function startTimer() {
    state.started = true;
    state.timerId = setInterval(() => {
      state.timeLeft -= 1;
      els.timer.textContent = state.timeLeft;
      updateLiveStats();
      if (state.timeLeft <= 0) finishTest();
    }, 1000);
  }

  function elapsedMinutes() {
    return (state.duration - state.timeLeft) / 60;
  }

  function grossWpm() {
    const minutes = elapsedMinutes();
    if (minutes <= 0) return 0;
    return Math.round(state.typedChars / 5 / minutes);
  }

  function netWpm() {
    const minutes = elapsedMinutes();
    if (minutes <= 0) return 0;
    return Math.max(0, Math.round(state.correctChars / 5 / minutes));
  }

  function accuracyPct() {
    const attempted = state.correctWords + state.misspelled.length;
    if (attempted === 0) return 100;
    return Math.round((state.correctWords / attempted) * 100);
  }

  function updateLiveStats() {
    els.wpm.textContent = netWpm();
    els.accuracy.textContent = accuracyPct() + "%";
    els.errors.textContent = state.misspelled.length;
  }

  function submitWord(typed) {
    const expected = state.words[state.wordIndex];
    const span = els.passage.children[state.wordIndex];
    state.typedChars += typed.length + 1; // +1 for the space

    if (typed === expected) {
      state.correctWords += 1;
      state.correctChars += expected.length + 1;
      span.classList.add("correct");
    } else {
      state.misspelled.push({ expected, typed });
      span.classList.add("incorrect");
    }

    span.classList.remove("current", "typo");
    state.wordIndex += 1;

    const next = els.passage.children[state.wordIndex];
    if (next) {
      next.classList.add("current");
      scrollCurrentWordIntoView();
    } else {
      finishTest();
    }
    updateLiveStats();
  }

  function markLivePrefix(typed) {
    const span = els.passage.children[state.wordIndex];
    if (!span) return;
    const expected = state.words[state.wordIndex];
    span.classList.toggle("typo", typed.length > 0 && !expected.startsWith(typed));
  }

  function finishTest() {
    if (state.finished) return;
    state.finished = true;
    clearInterval(state.timerId);
    els.input.disabled = true;

    const attempted = state.correctWords + state.misspelled.length;
    const net = netWpm();
    const acc = accuracyPct();
    const score = Math.round(net * (acc / 100));

    els.finalWpm.textContent = net;
    els.finalGrossWpm.textContent = grossWpm();
    els.finalAccuracy.textContent = acc + "%";
    els.finalScore.textContent = score;
    els.finalCorrect.textContent = `${state.correctWords} correct`;
    els.finalIncorrect.textContent = `${state.misspelled.length} misspelled (of ${attempted} attempted)`;

    els.misspelledList.innerHTML = "";
    if (state.misspelled.length > 0) {
      state.misspelled.forEach(({ expected, typed }) => {
        const li = document.createElement("li");
        const typedSpan = document.createElement("span");
        typedSpan.className = "typed";
        typedSpan.textContent = typed || "(skipped)";
        const expectedSpan = document.createElement("span");
        expectedSpan.className = "expected";
        expectedSpan.textContent = expected;
        li.append(typedSpan, " → ", expectedSpan);
        els.misspelledList.appendChild(li);
      });
      els.misspelledSection.classList.remove("hidden");
    } else {
      els.misspelledSection.classList.add("hidden");
    }

    els.results.classList.remove("hidden");
    els.results.scrollIntoView({ behavior: "smooth" });
  }

  function resetTest() {
    clearInterval(state.timerId);
    state.words = pickPassage();
    state.wordIndex = 0;
    state.correctWords = 0;
    state.correctChars = 0;
    state.typedChars = 0;
    state.misspelled = [];
    state.duration = parseInt(els.duration.value, 10);
    state.timeLeft = state.duration;
    state.timerId = null;
    state.started = false;
    state.finished = false;

    els.timer.textContent = state.timeLeft;
    els.wpm.textContent = "0";
    els.accuracy.textContent = "100%";
    els.errors.textContent = "0";
    els.results.classList.add("hidden");
    els.input.disabled = false;
    els.input.value = "";
    renderPassage();
    els.passage.scrollTop = 0;
    els.input.focus();
  }

  els.input.addEventListener("input", () => {
    if (state.finished) return;
    if (!state.started && els.input.value.length > 0) startTimer();

    const value = els.input.value;
    if (value.includes(" ")) {
      const typed = value.trim();
      els.input.value = "";
      if (typed.length > 0) submitWord(typed);
    } else {
      markLivePrefix(value);
    }
  });

  // Allow submitting the final word with Enter (no trailing space needed).
  els.input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !state.finished) {
      const typed = els.input.value.trim();
      els.input.value = "";
      if (typed.length > 0) submitWord(typed);
    }
  });

  els.duration.addEventListener("change", resetTest);
  els.restartBtn.addEventListener("click", resetTest);
  els.tryAgainBtn.addEventListener("click", resetTest);

  resetTest();
})();
