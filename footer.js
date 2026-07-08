(() => {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  const columns = [
    {
      title: "Timed Tests",
      links: [
        { href: "index.html", label: "Speed Typing Test" },
        { href: "1-minute-typing-test.html", label: "1 Minute Test" },
        { href: "2-minute-typing-test.html", label: "2 Minute Test" },
        { href: "3-minute-typing-test.html", label: "3 Minute Test" },
        { href: "5-minute-typing-test.html", label: "5 Minute Test" },
        { href: "10-minute-typing-test.html", label: "10 Minute Test" },
      ],
    },
    {
      title: "For Everyone",
      links: [
        { href: "typing-test-for-kids.html", label: "Typing Test for Kids" },
        { href: "typing-test-for-students.html", label: "For Students" },
        { href: "typing-test-for-teachers.html", label: "For Teachers" },
        { href: "typing-test-for-coders.html", label: "For Coders" },
        { href: "typing-test-by-language.html", label: "By Language" },
        { href: "typing-test-by-profession.html", label: "By Profession" },
      ],
    },
    {
      title: "Tools & Games",
      links: [
        { href: "wpm-calculator.html", label: "WPM Calculator" },
        { href: "accuracy-calculator.html", label: "Accuracy Calculator" },
        { href: "typing-games.html", label: "Typing Games" },
      ],
    },
    {
      title: "About",
      links: [
        { href: "about.html", label: "About Us" },
        { href: "contact.html", label: "Contact" },
        { href: "privacy-policy.html", label: "Privacy Policy" },
        { href: "terms.html", label: "Terms of Use" },
      ],
    },
  ];

  const wrap = document.createElement("div");
  wrap.className = "fc";

  columns.forEach(col => {
    const c = document.createElement("div");
    c.className = "fcol";
    const h = document.createElement("h4");
    h.textContent = col.title;
    c.appendChild(h);
    col.links.forEach(l => {
      const a = document.createElement("a");
      a.href = l.href;
      a.textContent = l.label;
      c.appendChild(a);
    });
    wrap.appendChild(c);
  });

  const bottom = document.createElement("div");
  bottom.className = "fbottom";
  bottom.innerHTML =
    '<p>SpeedType is a free online typing speed test that measures your words per minute (WPM) and typing accuracy. Practice daily to build faster, more accurate typing skills.</p>' +
    '<p class="fcopy">&copy; 2026 SpeedType. All rights reserved.</p>';

  footer.appendChild(wrap);
  footer.appendChild(bottom);
})();
