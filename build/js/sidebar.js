/*
 * OLD CODE
 *
 * function addSidebarLink(name, text, section, depth) {
    let link = document.createElement("a");
    link.setAttribute("class", "sidebar-link");
    link.style.paddingLeft = (depth * 12) + "px";
    link.href = "/" + name;
    link.textContent = text;
    section.appendChild(link);
}

function addSidebarSection(link, text, pages, par, depth) {
    let section = document.createElement("details");
    let summary = document.createElement("summary");
    summary.textContent = text;
    summary.style.paddingLeft = (depth * 12 - 16) + "px";
    if (!link.startsWith("__")) {
	let link = document.createElement("a");
	link.setAttribute("class", "sidebar-link");
	link.href = "/" + link;
	summary.appendChild(link);
    } else {
    }
    section.appendChild(summary);
    section.setAttribute("class", "sidebar-section sidebar-root-details");
    par.appendChild(section);
    for (let key in pages) {
	if (typeof pages[key] === "string") {
	    addSidebarLink(key, pages[key], section, depth + 1);
	} else {
	    let name = pages[key]._name || key;
	    addSidebarSection(link + "/" + key, name, pages[key], section, depth + 1);
	}
    }
}

function loadSidebar() {
    addSidebarSection("__", "Find a note", pageIndex, document.getElementsByClassName("sidebar")[0], 1);
}*/

function addSidebarSection(link, subpages, parSection, depth) {
    let section = document.createElement("details");
    let summary = document.createElement("summary");
    let name = subpages._name || link;
    summary.textContent = name;
    if (!link.startsWith("/__")) {
	summary.innerHTML = `<a class="sidebar-link inline" href="${link}">${name}</a>`;
    }
    section.appendChild(summary);
    section.style.paddingLeft = (depth * 12 - 16) + "px";
    section.setAttribute("class", "sidebar-section");
    parSection.appendChild(section);
    for (let key in subpages) {
	if (key === "_name" || key === "/_name") {
	    continue;
	}
	if (typeof subpages[key] === "string") {
	    let linkEl = document.createElement("a");
	    linkEl.setAttribute("class", "sidebar-link");
	    linkEl.style.paddingLeft = (depth * 12) + "px";
	    linkEl.href = key;
	    linkEl.textContent = subpages[key];
	    section.appendChild(linkEl);
	} else {
	    addSidebarSection(key, subpages[key], section, depth + 1);
	}
    }
}

function loadSidebar() {
    pageIndex._name = "Find a note";
    addSidebarSection("/__", pageIndex, document.getElementsByClassName("sidebar")[0], 1);
}

function expandCurrentPage() {
    let currentPage = window.location.pathname.split("/")[1];
    for (let link of document.getElementsByClassName("sidebar-link")) {
	if (link.getAttribute("href").split("/").pop() === currentPage) {
	    let par = link.parentElement;
	    while (par) {
		if (par.tagName === "DETAILS") {
		    par.open = true;
		}
		par = par.parentElement;
	    }
	    break;
	}
    }
}

function adjustSidebarExpansion() {
    let sidebarRootDetails = document.getElementsByClassName("sidebar-section")[0];
    if (window.innerWidth < 950) {
	sidebarRootDetails.open = false;
    } else {
	sidebarRootDetails.open = true;
    }
}

loadSidebar();
expandCurrentPage();

addEventListener("resize", (event) => adjustSidebarExpansion());
addEventListener("DOMContentLoaded", (event) => adjustSidebarExpansion());

