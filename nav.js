(() => {
  const links = [
    {
      label: "Timed Tests",
      children: [
        { href: "index.html", label: "Main Test" },
        { href: "1-minute-typing-test.html", label: "1 Minute" },
        { href: "2-minute-typing-test.html", label: "2 Minutes" },
        { href: "3-minute-typing-test.html", label: "3 Minutes" },
        { href: "5-minute-typing-test.html", label: "5 Minutes" },
        { href: "10-minute-typing-test.html", label: "10 Minutes" },
      ],
    },
    {
      label: "By User",
      children: [
        { href: "typing-test-for-kids.html", label: "For Kids" },
        { href: "typing-test-for-students.html", label: "For Students" },
        { href: "typing-test-for-teachers.html", label: "For Teachers" },
        { href: "typing-test-for-coders.html", label: "For Coders" },
      ],
    },
    {
      label: "Specialty",
      children: [
        { href: "typing-test-by-language.html", label: "By Language" },
        { href: "typing-test-by-profession.html", label: "By Profession" },
      ],
    },
    {
      label: "Tools",
      children: [
        { href: "wpm-calculator.html", label: "WPM Calculator" },
        { href: "accuracy-calculator.html", label: "Accuracy Calculator" },
      ],
    },
  ];

  const current = window.location.pathname.split("/").pop() || "index.html";

  function buildDropdown(item) {
    const activeChild = item.children.find(c => c.href === current);
    const div = document.createElement("div");
    div.className = "nd";
    div.innerHTML = `<button class="nb${activeChild ? " nb-active" : ""}">${item.label} ▾</button>`;
    const menu = document.createElement("div");
    menu.className = "nm";
    item.children.forEach(c => {
      const a = document.createElement("a");
      a.href = c.href;
      a.textContent = c.label;
      if (c.href === current) a.className = "na";
      menu.appendChild(a);
    });
    div.appendChild(menu);
    div.querySelector(".nb").addEventListener("click", (e) => {
      e.stopPropagation();
      const open = div.classList.toggle("open");
      document.querySelectorAll(".nd.open").forEach(d => { if (d !== div) d.classList.remove("open"); });
    });
    return div;
  }

  const nav = document.getElementById("site-nav");
  if (!nav) return;

  const wrap = document.createElement("div");
  wrap.className = "nc";

  const brand = document.createElement("a");
  brand.href = "index.html";
  brand.className = "nbrand";
  brand.textContent = "⌨️ SpeedType";
  wrap.appendChild(brand);

  const toggle = document.createElement("button");
  toggle.className = "ntoggle";
  toggle.setAttribute("aria-label", "Toggle menu");
  toggle.textContent = "☰";
  wrap.appendChild(toggle);

  const linksDiv = document.createElement("div");
  linksDiv.className = "nlinks";
  links.forEach(item => linksDiv.appendChild(buildDropdown(item)));

  const gamesLink = document.createElement("a");
  gamesLink.href = "typing-games.html";
  gamesLink.className = "nlink" + (current === "typing-games.html" ? " na" : "");
  gamesLink.textContent = "Games";
  linksDiv.appendChild(gamesLink);

  wrap.appendChild(linksDiv);
  nav.appendChild(wrap);

  toggle.addEventListener("click", () => linksDiv.classList.toggle("open"));
  document.addEventListener("click", () => {
    document.querySelectorAll(".nd.open").forEach(d => d.classList.remove("open"));
    linksDiv.classList.remove("open");
  });
})();
