(() => {
  // Self-referencing canonical URL so it is correct on any domain the site is
  // served from. Strips index.html and trailing query/hash for a clean URL.
  const origin = window.location.origin;
  let path = window.location.pathname.replace(/index\.html$/, "");
  if (!path.startsWith("/")) path = "/" + path;
  const canonical = origin + path;

  function ensure(tag, attrs) {
    let el = document.head.querySelector(
      tag + "[" + attrs.key + '="' + attrs.val + '"]'
    );
    if (!el) {
      el = document.createElement(tag);
      el.setAttribute(attrs.key, attrs.val);
      document.head.appendChild(el);
    }
    return el;
  }

  ensure("link", { key: "rel", val: "canonical" }).setAttribute("href", canonical);

  const title = document.title;
  const descEl = document.head.querySelector('meta[name="description"]');
  const desc = descEl ? descEl.getAttribute("content") : "";

  const og = [
    ["og:title", title],
    ["og:description", desc],
    ["og:url", canonical],
    ["og:type", "website"],
    ["og:site_name", "SpeedType"],
    ["twitter:card", "summary"],
    ["twitter:title", title],
    ["twitter:description", desc],
  ];
  og.forEach(([prop, content]) => {
    if (!content) return;
    const keyAttr = prop.startsWith("twitter:") ? "name" : "property";
    let el = document.head.querySelector(
      'meta[' + keyAttr + '="' + prop + '"]'
    );
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(keyAttr, prop);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  });
})();
