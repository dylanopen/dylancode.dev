

window.onload = (event) => {
    loadKatex();
    loadShiki();
    loadFooter();
    loadBanners();
    renderLinks(document.getElementById("inlinks"));
    renderLinks(document.getElementById("outlinks"));
}

async function highlight(codeToHtml) {
    let codeElements = document.getElementsByTagName("code");
    for (let i = 0; i < codeElements.length; i++) {
        let el = codeElements[i];
        let lang = el.className.replace("language-", "");
        if (lang === "") continue;
        const html = await codeToHtml(el.innerText, {
            lang: lang,
            theme: "one-dark-pro",
        });
        el.innerHTML = html;
        el.innerHTML = el.getElementsByTagName("pre")[0].getElementsByTagName("code")[0].innerHTML;
    }
}

async function loadShiki() {
    if (document.getElementsByTagName("pre").length == 0) { return; }
    import("https://esm.sh/shiki@3.0.0").then((shiki) => {
        highlight(shiki.codeToHtml);
    });
}

const katexMacros = {
    "\\pmatrix": "\\left(\\begin{matrix}#1\\end{matrix}\\right)"
};

function renderKatexElement(element) {
    let code = element.textContent;
    let displayMode = element.tagName == "bm";
    let rendered = katex.renderToString(code, element, {
        macros: katexMacros,
        throwOnError: false,
        displayMode,
    });
    element.innerHTML = rendered;
}

async function loadKatex() {
    if (document.getElementsByTagName("im").length == 0 && document.getElementsByTagName("bm").length == 0) { return; } 
    await import("/katex.js");
    let mathElements = document.querySelectorAll("im, bm");
    for (let i = 0; i < mathElements.length; i++) {
        renderKatexElement(mathElements[i]);
    }
}

function loadFooter() {
    let footer = document.getElementById("footer");
    let quote = quotes[Math.floor(Math.random()*quotes.length)];
    let title = document.getElementsByTagName("h1")[0].innerText;
    let fullQuote = quote.replace("{{title}}", title.toLowerCase());
    footer.innerHTML = "<p>I'm Dylan: I write resources for maths & programming, completely free, forever, on this website.<br/>Talk to me on <a href='/discord'>Discord</a>!<br/><br/>"
        + "<div class='autogrid'><a href='/'><img class='autogrid-item' src='/favicon.ico'/></a><span class='quote autogrid-item'>\"" + fullQuote + "\"</span></div>";
}

const banners = [
    {
        "text": "Need any help understanding this topic? <a href='/discord'>Join our Discord</a>: we'd be happy to help!",
        "background": "#226699",
        "foreground": "#ffffff",
    },
]

function loadBanners() {
    let bannerElements = document.getElementsByClassName("banner");
    console.log(bannerElements);
    for (let i = 0; i < bannerElements.length; i++) {
        let element = bannerElements[i];
        let banner = banners[i];
        element.innerHTML = banner.text;
        element.style.backgroundColor = banner.background;
        element.style.color = banner.foreground;
    }
}

function renderLinks(linkElement) {
    inlinks = linkElement.innerHTML.split("\n");
    let listElement = document.createElement("ul");
    listElement.className = "linkList";
    for (let i = 0; i < inlinks.length; i++) {
        let inlink = inlinks[i];
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = "/" + inlink.replace(" ", "-") + "/";
        a.innerText = inlink;
        li.appendChild(a);
        listElement.appendChild(li);
    }
    linkElement.innerHTML = "";
    linkElement.appendChild(listElement);
}

const quotes = [
    "See, I told you parrots could teach {{title}}!",
    "Parrot will continue to squawk until you talk to me on discord :)",
    "My appearance may be pixelated but my teaching is clear :D",
    "If you find a typo in the {{title}} section, blame the cat. I don't have fingers to type, and anyway, the cat distracted me.",
    "Let us know on Discord if you have a better way to explain {{title}}.",
    "I was told to 'temporarily replace' the teacher behind this website, but he never came back :(",
    "You've been on this page a while. Trying to look like you're studying {{title}}?",
    "Yes, I am a low-res bird. No, it's not to save bandwidth - definitely not!",
    "If you're stuck on {{title}}, the Discord community probably has the answer.",
    "I get paid in walnuts for hosting this site. My favourite food!",
    "Are you actually learning {{title}} or just scrolling down to look at me? Don't worry, I understand, I won an award for cutest parrot in my class!",
    "Listening to me won't make {{title}} make sense faster, but it keeps me entertained.",
    "If you understand {{title}} now, go brag about it in the Discord channel.",
    "My code is held together by zip ties and prayers, but this {{title}} info is solid.",
    "My owner told me I'm just code on a computer screen, but I'm real! Please convince him that I'm a real bird :/",
    "I'm just a few dozen coloured pixels and I still understand {{title}}. What's your excuse?",
    "Don't quit {{title}} yet. Go yell about it on our Discord instead.",
    "If this page on {{title}} breaks, tag @dylancode on Discord and blame me, the parrot: he always blames me :-(",
    "Help! I've been stuck reading this page since 2025!"
    "Imagine trying to learn {{title}} without a pixel parrot at the bottom of the screen. Unthinkable.",
    "I'd help you more with {{title}}, but I need to do my own parrot schoolwork.",
    "They told me I could be anything, so I became a {{title}} tutor.",
    "I'm mimicking a smart person right now. It seems to be working for {{title}}.",
    "Do you think the person who wrote the {{title}} guide gives me enough credit? Me neither.",
    "I've read this page 4,081 times today. It's actually pretty good light reading.",
    "I wants you to actually finish the {{title}} section today. *I'm watching you...*",
    "I’m not parroting the textbook; this is genuine {{title}} wisdom.",
    "If I had a dollar for every time someone got stuck on {{title}}... I'd buy more pixels.",
    "I remember squawking so loud when I finally learned this page that my sister parrot came to check on me..."
    "I might be a bird, but even I know the most important parts of {{title}}.",
    "My beak is perfectly shaped for eating seeds and judging your abilities in {{title}}.",
    "You think {{title}} is hard? Try flying into a closed glass window.",
    "I'm the Precise Analyst for Revision Resources Online Trustworthiness inspector. Some call me Inspector P.A.R.R.O.T."
    "Preening my feathers takes 5 minutes. Understanding {{title}} takes a bit longer.",
    "If you can't explain {{title}} to a parrot, do you really know it?",
    "Just a bird-brain doing bird-brain things... like mastering {{title}}.",
    "Don't look at me like that, I didn't write the difficult parts of {{title}}. Well, I helped... not exactly by choice.",
    "I've been staring at this website design all day and honestly, it's the most beautiful thing I've ever seen.",
    "I don't just repeat things. I selectively repeat the best parts of {{title}}.",
    "If you close this tab on {{title}}, I cease to exist. Just saying.",
    "You’re doing great. Well, I think. I’m a sprite, I can’t actually see what you’re working on.",
    "Is {{title}} making sense yet, or should I just look cute a bit longer?",
    "Wow, you actually made it to the bottom of the {{title}} page. Achievement unlocked.",
    "I’ve seen a lot of people try to learn {{title}}. You’re definitely one of them.",
    "Don't look at me, the answers for {{title}} are further up the page.",
    "I'm legally obligated to tell you that learning {{title}} is good for you.",
    "You're still here? Go test yourself on {{title}} already.",
    "I’m just here to look pretty while you do all the work with {{title}}.",
    "Staring at me won't automatically download {{title}} into your brain. Sadly.",
    "They paid me in crackers to stand here and watch you study {{title}}.",
    "Great job reading the bottom of the page. Now go back up and read the actual {{title}} stuff.",
    "I don't actually know what {{title}} means, I just live here.",
    "If I could read, I'm sure this section on {{title}} would be incredibly interesting.",
    "Honestly, {{title}} gets way easier once you get past the first page of this one-page document.",
    "Nothing to see here, just a pixel bird judging you on {{title}}.",
    "If you get a headache from {{title}}... go drink some water ;)",
    "This is your official reminder that you're doing fine with {{title}}.",
    "Quick! Finish {{title}} so you can waste your time doing something else afterwards.",
    "I tried running away from this difficult note one time. It didn't work out - I've been stuck here since 2024.",
    "Did you find a bug? Drop it in the Discord channel before it bites me (I'll peck it if I can spot it first).",
    "If you're reading this, you’ve officially scrolled past all the actual useful information.",
    "My codebase is held together by zip ties, prayers and a few of my spare biscuit crumbs, but we’re making it work.",
    "You've been on this page a while. Trying to look busy?",
    "Side quest completed: You read the whole footer.",
    "Main quest updated: Go teach others about this on our Discord.",
];

