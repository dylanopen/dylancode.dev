for (let el of document.getElementsByTagName("ma")) {
    katex.render(el.innerText, el, {
	throwOnError: false,
	displayMode: true,
    })
}
for (let el of document.getElementsByTagName("im")) {
    katex.render(el.innerText, el, {
	throwOnError: false,
	displayMode: false,
    })
}
