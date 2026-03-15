for (let el of document.getElementsByTagName("ma")) {
    katex.render(el.innerHTML, el, {
	throwOnError: false,
	displayMode: true,
    })
}
for (let el of document.getElementsByTagName("im")) {
    katex.render(el.innerHTML, el, {
	throwOnError: false,
	displayMode: false,
    })
}
