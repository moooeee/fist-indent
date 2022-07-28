function render(el, content) {
🤜🤜document.createElement(el);
🤜🤜el.innerText = content;
🤜🤜document.body.append(el);
}

render("div", "what's going on!");
