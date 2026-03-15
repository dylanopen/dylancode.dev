function addSidebarSection(link, subpages, parSection, depth) {
    let section = document.createElement("details");
    let summary = document.createElement("summary");
    let name = subpages._name || link;
    summary.textContent = name;
    if (!link.startsWith("/__")) {
	summary.innerHTML = `<a class="sidebar-link inline" href="${link}/">${name}</a>`;
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
	    linkEl.href = key + "/";
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
    console.log("Current page:", currentPage);
    for (let link of document.getElementsByClassName("sidebar-link")) {
	if (link.getAttribute("href").includes("/" + currentPage + "/")) {
	    link.setAttribute("class", link.getAttribute("class") + " sidebar-section-active");
	    let par = link.parentElement;
	    while (par) {
		if (par.tagName === "DETAILS") {
		    par.open = true;
		}
		par = par.parentElement;
	    }
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

