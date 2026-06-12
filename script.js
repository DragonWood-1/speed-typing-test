(() => {
  "use strict";

  const PASSAGES = [
    "The quick brown fox jumps over the lazy dog while the bright morning sun rises slowly above the quiet hills and the small town below begins to wake with the gentle sounds of daily life as people open their windows to greet another beautiful day full of promise and simple joys",
    "Learning to type quickly takes patience and steady practice because your fingers must build muscle memory over time so keep your eyes on the screen instead of the keyboard and focus on accuracy first since speed will naturally follow once your hands know exactly where every letter lives",
    "A gentle rain fell over the city as people hurried along the busy streets carrying umbrellas of every color while cafes filled with warm light and the smell of fresh coffee drifted through open doors inviting travelers to pause for a moment and watch the world slow down",
    "Science begins with curiosity about the world around us and grows through careful observation and honest questions because every great discovery started with someone who wondered why things work the way they do and refused to stop asking until the answer finally revealed itself",
    "The old lighthouse stood firm against the crashing waves guiding ships safely through the dark and stormy night while its keeper climbed the winding stairs to tend the great lamp knowing that countless sailors depended on that single steady beam to find their way home",
    "Good habits are built one small step at a time so choose something simple you can do every single day and stick with it because tiny actions repeated with patience will compound into remarkable results that once seemed completely out of reach when you first began",
    "Autumn arrived quietly in the small village painting the maple leaves in shades of gold and crimson while children gathered chestnuts along the lane and farmers stacked the last bales of hay knowing the long winter would soon settle over the fields like a heavy blanket",
    "The young chef worked through the night perfecting her recipe tasting and adjusting each ingredient with care because she believed a great meal could bring strangers together around one table and turn an ordinary evening into a memory that people would carry with them for years",
    "Deep beneath the ocean surface strange creatures drift through total darkness producing their own light to hunt and to hide while scientists in small submarines descend slowly into the cold silent water hoping to glimpse animals that no human eye has ever seen before",
    "Every morning the old gardener walked the same gravel path checking each rose bush and tomato vine with the patience of a man who understood that nothing worth growing ever hurries and that the soil rewards those who tend it faithfully through every season",
    "The train rolled across the wide open plains as passengers watched distant mountains slide past their windows and a young writer filled page after page of her notebook trying to capture the feeling of moving toward a future she could not yet imagine",
    "Music has a strange power to unlock memories we thought were lost because a single melody drifting from a passing car can suddenly return us to a summer evening from childhood when the days felt endless and every small adventure seemed enormous",
    "The marathon runner kept a steady rhythm through the final miles ignoring the burning in her legs and focusing only on the next streetlight ahead because she had learned long ago that great distances are conquered one small stretch at a time",
    "High in the mountain village the baker lit his ovens before dawn filling the cold air with the smell of fresh bread while the first customers stamped snow from their boots and warmed their hands around cups of strong black coffee",
    "A library is a quiet kind of miracle where thousands of voices from every century wait patiently on the shelves ready to speak to anyone who pulls a book free and settles into a chair with a little time and an open mind",
    "The astronaut floated by the small round window watching the blue planet turn slowly below and realized that every person she had ever known lived somewhere on that bright fragile sphere suspended in the endless darkness of space",
    "Grandfather kept his old wooden toolbox in the corner of the garage and every dented hammer and worn handle inside told a story of fences mended and tree houses built and long afternoons spent teaching patient lessons to curious grandchildren",
    "The desert seems empty at first glance but wait until evening when the heat fades and the sand comes alive with foxes and beetles and owls while the sky overhead fills with more stars than a city dweller has ever seen",
    "Learning a new language opens a door into another way of seeing the world because every tongue carries its own jokes and songs and proverbs and the struggle to speak even a few clumsy sentences is rewarded with smiles and friendship",
    "The fishing boats left the harbor before sunrise their lanterns swinging gently as the crews drank hot tea and watched the dark water knowing that patience and weather would decide whether the nets came up heavy or empty by afternoon",
    "A good teacher does far more than explain facts because the best ones notice the quiet student in the back row and ask the question that sparks a lifelong interest changing the entire direction of a young life with a single conversation",
    "The carpenter measured the oak plank twice before making her cut because wood remembers every mistake and a craftsman earns trust slowly over years of honest work where each joint fits cleanly and every promise made is a promise kept",
    "Rain drummed softly on the tin roof of the cabin while the hikers dried their socks by the stove and traded stories about the trail agreeing that the storm had made the journey harder but somehow better worth telling",
    "The city wakes in layers as bakers and bus drivers begin before dawn then office workers flood the sidewalks at eight and finally the night crews appear when the lights come on each group keeping the great machine turning",
    "Honey bees dance in precise patterns to tell their sisters exactly where the best flowers bloom and scientists who decoded this language discovered that even the smallest creatures carry knowledge worth a lifetime of careful study",
    "The violin had belonged to her great grandmother and though its varnish was cracked and faded the instrument still sang with a warm deep voice as if all the music played on it over a century had soaked into the wood",
    "Walking is the most underrated form of thinking because the steady rhythm of footsteps seems to loosen stuck ideas and many famous writers solved their hardest problems not at a desk but on long rambling walks through park and field",
    "The lighthouse keeper retired after forty years but still woke at dusk out of habit and would stand at his cottage window watching the automated beam sweep the bay feeling proud and a little sad that the light no longer needed him",
    "Every chess master was once a beginner who lost game after game and the difference between those who quit and those who improved was never talent but the simple willingness to study each defeat and try again the next day",
    "The farmers market filled the square every Saturday with crates of ripe peaches and bundles of fresh basil while neighbors who never met during the week stopped to talk and children weaved between the stalls with sticky hands and bright eyes",
    "Glaciers move slower than anything alive yet they carve entire valleys out of solid granite which proves that steady patient pressure applied over enough time can reshape even the hardest things in this world",
    "The night shift nurse moved quietly from room to room checking monitors and adjusting blankets with practiced hands carrying the calm steady kindness that patients remember long after they have forgotten the names of their medicines",
    "An old map of the world drawn five hundred years ago shows sea monsters at the edges where knowledge ran out reminding us that every generation believes it has mapped everything while wonders still wait beyond the borders",
    "The potter centered the spinning clay with wet steady hands and within minutes a shapeless lump rose into a graceful bowl proving once again that skill looks like magic to anyone who has not seen the ten thousand hours behind it",
    "Wolves returned to the national park after seventy years and changed everything because the elk moved differently and the willows grew back and the rivers themselves shifted course showing how one species can hold an entire landscape together",
    "The young pilot ran through her checklist twice before takeoff touching each switch and gauge in order because aviation has one unbreakable rule which says that careful boring preparation on the ground is what makes flying safe in the air",
    "Sourdough bread needs only flour water and salt yet bakers spend whole lifetimes chasing the perfect loaf because the wild yeast in every kitchen behaves differently and the dough rewards attention the way a garden rewards a faithful gardener",
    "The tide pools held tiny universes of anemones and hermit crabs and darting fish and the children crouched at the edges for hours discovering that you do not need to travel far to find another world only to look closely",
    "Her grandmother wrote letters by hand every Sunday afternoon in looping blue ink and decades later the family still keeps the bundles tied with string because a letter holds something a message on a screen never quite captures",
    "The mechanics of a bicycle have barely changed in a hundred years because the design reached a kind of perfection where two wheels a chain and a frame convert human effort into motion more efficiently than any other machine",
    "Fog rolled through the redwood forest each morning and the giant trees drank the mist through their needles surviving dry summers on moisture gathered silently from the air a trick they have practiced for a thousand years",
    "The orchestra tuned to a single note from the oboe and in that moment eighty musicians with different instruments and different lives agreed on one shared pitch which is perhaps the most hopeful sound in the world",
    "A blacksmith judges the temperature of iron by its color watching the metal turn from red to orange to yellow and striking at exactly the right moment because the window between too soft and too brittle is narrow and unforgiving",
    "The migrating geese flew in a long wavering line against the gray autumn sky trading places at the front where the wind was hardest because even birds seem to understand that burdens shared in turn become lighter for everyone",
    "The bookshop cat slept in the window among the poetry section and customers who came in for a bestseller often left with an old hardback they never planned to buy plus a photograph of the cat for good measure",
    "Coral reefs cover less than one percent of the ocean floor yet shelter a quarter of all marine life which makes them the crowded joyful cities of the sea and worth every effort it takes to protect them",
    "The apprentice watched the glassblower turn a glowing orange bubble into a swan with three twists of his wrist and understood suddenly that she was not learning a job she was being handed a craft a thousand years old",
    "Thunderstorms in summer arrive like impatient guests announcing themselves with distant rumbling then flinging the doors open with wind and rain before leaving an hour later having washed every leaf and cooled the whole exhausted town",
    "The chess players in the park meet every afternoon rain or shine setting their worn boards on stone tables and though they argue constantly about openings and endgames they would each defend the others like family",
    "A single teaspoon of garden soil contains more living organisms than there are people on earth which means every gardener tending a quiet vegetable patch is actually managing a vast invisible city beneath their feet",
    "The ferry crossed the strait twice a day carrying mail and groceries and islanders who knew every deckhand by name and though the mainland was only an hour away the island kept its own slower kinder sense of time",
    "Morning fog lifted off the river as the rowing team sliced through the still water their eight oars striking in perfect unison after months of practice during which they had slowly stopped being eight people and become one boat",
    "The watchmaker worked under a bright lamp with tweezers and a loupe assembling gears smaller than rice grains and when asked why he loved such tedious work he said that holding time itself in your hands never gets old",
    "Wild blackberries grew thick along the old fence line every August and the children returned home with purple fingers and scratched arms and buckets only half full because the sweetest berries never survived the walk back",
    "The translator spent a week on a single poem weighing each word like a jeweler because her job was not to swap one language for another but to carry a fragile living thing across a border without letting it die",
    "Lightning strikes the earth about eight million times every day and each bolt briefly heats the air hotter than the surface of the sun which makes every distant flicker on the horizon a small reminder of enormous forces",
    "The community garden began as one empty lot and a few borrowed shovels but within three summers it fed forty families and taught a hundred children where tomatoes come from which everyone agreed was worth far more than the land",
    "An octopus can change both its color and its texture in less than a second to vanish against a rock and scientists still do not fully understand how an animal can become invisible against a background it cannot even see",
    "The old typewriter in the attic still worked perfectly and the boy spent his whole rainy vacation pounding out detective stories discovering that the loud mechanical clack of each letter made every sentence feel important",
    "Beekeepers move slowly and never swat because bees read panic like a language and the calm steady keeper who respects the hive is rewarded with honey while the hurried visitor learns an unforgettable lesson",
    "The midnight train carried sleeping passengers across three states while the engineer watched the rails shine ahead in the headlight and drank his coffee black feeling the quiet pride of someone trusted with a thousand dreams",
    "Maple syrup takes forty gallons of sap to make one gallon of syrup which is why the farmers who tap the trees in late winter call it liquid patience and guard their family recipes like treasure",
    "The surfer waited beyond the breakers reading the swells the way other people read headlines and when the right wave finally rose behind her she paddled twice stood up and flew toward shore on a moving hill of water",
    "Every cathedral in Europe was built by workers who knew they would never see it finished yet they carved each stone with care anyway leaving a lesson in patience standing five hundred years later",
    "The radio operator on the night desk spoke calmly to ships scattered across the dark ocean relaying weather and positions and the occasional joke because a steady voice in the headphones can matter as much as a lighthouse",
    "Sunflowers turn their faces to follow the sun across the sky each day while they are young and once they mature they settle facing east which gardeners say is the flower deciding which morning it loved best",
    "The detective in the old novels always notices the small wrong detail like a clock stopped at the wrong hour and readers love these stories because they promise that the world makes sense if you only pay close enough attention",
    "Snow fell silently all night and the children woke to a transformed world where fences had become soft white walls and the ordinary walk to the bus stop turned into an expedition across an untouched arctic plain",
    "The jazz musicians never played the song the same way twice because the melody was only a starting point and the real music happened in the spaces between the notes where each player listened and answered",
    "A tortoise can live more than one hundred and fifty years which means the oldest ones alive today hatched when ships still crossed the oceans under sail and have simply kept walking slowly forward ever since",
    "The volunteer firefighters left their dinners and their beds when the siren called racing to the station from every corner of town because small communities are held together by people willing to show up at the worst possible moment",
    "Origami begins with a perfect square and no scissors and no glue yet a patient pair of hands can fold that single sheet into a crane so delicate it looks ready to fly away",
    "The night sky in the desert is so dark and clear that the milky way casts a faint shadow and first time visitors often stand silent for several minutes before anyone finds words",
    "The seed catalog arrived in the coldest week of January and the gardener spent the whole evening circling tomatoes and dahlias because planning a summer garden is the most reliable cure for a winter heart",
    "The old ferry captain could read the river like a book knowing where sandbars hid beneath calm water and where the current ran fast and his replacement would need twenty years to learn what he carried in his hands",
    "A hummingbird beats its wings about fifty times each second and must eat almost constantly to survive yet every autumn some of them cross the entire gulf of mexico in a single nonstop flight",
    "The repair shop smelled of oil and solder and the owner could fix nearly anything brought through the door believing that every toaster saved from the landfill was a small victory worth the trouble",
    "The choir rehearsed in the cold church hall every Thursday and though the singers were bakers and teachers and bus drivers by day when the harmonies locked together they sounded like something far greater than their numbers",
    "Antarctica holds ninety percent of the ice on earth and scientists who winter there describe a silence so complete they can hear their own heartbeat which changes how a person listens for the rest of their life",
    "The young reporter learned that the best interviews happen after the notebook closes when people relax and tell the story they actually wanted to tell which is why patience is the most valuable tool in journalism",
    "Bamboo can grow nearly three feet in a single day making it the fastest growing plant on earth and entire forests of it creak and whisper in the wind like ships under sail",
    "The model railroad in the basement had grown for thirty years until tiny towns and tunnels and painted mountains filled the whole room and the grandchildren agreed it was the best museum they had ever visited",
    "The diver descended along the anchor line into deepening blue and at thirty feet the ocean went quiet in a way the surface world never does leaving only the sound of her own breathing and the ticking of fish",
    "The bell maker tuned each great bronze bell by shaving curls of metal from inside its rim testing the tone again and again because a cathedral bell once hung will ring for centuries exactly as it was made",
    "Monarch butterflies navigate thousands of miles to a forest in mexico they have never seen guided by instincts written somewhere in their tiny bodies and no scientist has fully explained how they find the way",
    "The harbor seals hauled out on the warm rocks every afternoon and the fishermen mending nets nearby had long ago stopped seeing them as competition and started seeing them as neighbors",
    "The clockmaker said that people bring him broken watches but what they really want repaired is the birthday or the wedding or the grandfather the watch reminds them of and he treats every repair accordingly",
    "A single oak tree can drop ten thousand acorns in a good year and feed squirrels and jays and deer all winter which is why the old foresters called the oak a kingdom rather than a tree",
    "The street musician played her cello by the fountain every Friday evening and regulars timed their walks home to pass by slowly because the music made the whole crowded city feel briefly like a small town",
    "The expedition moved up the mountain in slow stages letting their bodies adjust to the thin air because the summit rewards preparation and punishes pride a lesson every climber learns one way or the other",
    "The neighborhood gathered every summer solstice for a long table dinner down the middle of the street and by dessert the new families and the old timers were trading phone numbers and tomato growing secrets",
    "The lobster boats stacked their traps on the wharf in towers taller than a man and painted their buoys in family colors passed down for generations so every fisherman could read the crowded bay at a glance",
    "The animation studio drew twenty four pictures for every single second of film and visitors who learned this number finally understood why a ninety minute movie could take four years and a thousand artists to finish",
    "The naturalist kept a journal for sixty years recording the first frog song and the last swallow of every season and her notebooks became one of the most valuable climate records in the entire region",
    "The tugboat looked tiny beside the container ship it guided into harbor but the captain knew that in tight water raw size matters less than skill and a well timed push in exactly the right place",
    "The quilting circle met in the church basement and worked on each quilt together so every finished blanket held the stitches of nine different women which the recipients said made them warmer somehow",
    "The observatory opened its dome as the sun set and the great telescope turned toward a galaxy whose light had traveled sixty million years to end its journey that night in the eye of a curious student",
    "The riverbank willows bent all the way to the water in the spring floods and stood back up when the water fell which the old farmer pointed out to his grandchildren as the smartest way to survive hard times",
    "The toy maker tested every wooden duck and pull along dog on the workshop floor before packing them because he said a toy is a promise to a child and he had never once broken a promise",
    "The hot air balloon rose silently over the valley at dawn and the passengers fell quiet as the patchwork of fields and rivers spread beneath them realizing that the world looks gentler and more connected from above",
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
    // Enough words that even a 150 WPM typist never runs out.
    const minWords = Math.max(200, Math.ceil((state.duration / 60) * 150));
    let text = PASSAGES[Math.floor(Math.random() * PASSAGES.length)];
    while (text.split(" ").length < minWords) {
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
    state.duration = parseInt(els.duration.value, 10);
    state.words = pickPassage();
    state.wordIndex = 0;
    state.correctWords = 0;
    state.correctChars = 0;
    state.typedChars = 0;
    state.misspelled = [];
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
