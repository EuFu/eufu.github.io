const main = document.getElementById("main-content")
const site = document.getElementById("site-name")
const circleTop = document.getElementById("circle-top");
const circleLeft = document.getElementById("circle-left");
const circleRight = document.getElementById("circle-right");
const circleBottom = document.getElementById("circle-bottom");
const barTop = document.getElementById("bar-top");
const barLeft = document.getElementById("bar-left");
const barRight = document.getElementById("bar-right");
const barBottom = document.getElementById("bar-bottom");
const helloBanner = document.getElementById("hello-banner");
const welcomeMessage = document.getElementById("welcome-message")
const welcome = document.getElementById("welcome")
const hello = document.getElementById("hello");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const aboutMe = document.getElementById("about-me");
const projectsAll = document.getElementById("projects-all");
const contactInfo = document.getElementById("contact-info");
const sniffOutTitle = document.getElementById("sniff-out-title");
const recipeAppTitle = document.getElementById("recipe-app-title");
const sniffOut = document.getElementById("sniff-out");
const recipeApp = document.getElementById("recipe-app");
const banner = document.getElementById("banner");
const projectTitles = document.getElementById("project-titles-div");
const nav = document.getElementById("nav");
const summary = document.getElementById("summary");
const bannerDiv = document.getElementById("banner-div");
let desc = document.querySelectorAll(".description");

const body = document.getElementsByTagName("body")[0];
const itsMe = document.getElementById("its-me");
const next = document.getElementById("next");

let state = "welcome";
let highlight = welcome

const titleMap = new Map([
  ["welcome", "Welcome"],
  ["about", "About"],
  ["projects", "Projects"],
  ["contact", "Contact"],
]);
const corresponding = new Map([
  ["welcome", welcomeMessage],
  ["about", aboutMe],
  ["projects", projectsAll],
  ["contact", contactInfo],
  ["sniff-out-title", sniffOut],
  ["recipe-app-title", recipeApp]
]);
const styleMap = [
  { 
    "title": "welcome", 
    "circle": circleTop,
    "bar": barTop,
    "entrance": "bounce-in-top",
    "exit": "slide-out-top",
    "gradient": "gradient-top"
    },
  {
    "title": "about", 
    "circle": circleRight,
    "bar": barRight,
    "entrance": "bounce-in-right",
    "exit": "slide-out-right",
    "gradient": "gradient-right"
  },
  {
   "title": "projects", 
   "circle": circleLeft,
   "bar": barLeft,
   "entrance": "bounce-in-left",
   "exit": "slide-out-left",
   "gradient": "gradient-left"
  },
  {
    "title": "contact",
    "circle": contactInfo,
    "bar": barBottom,
    "entrance": "bounce-in-contact",
    "exit": "slide-out-contact",
    "gradient": "dark"
  }
]

// Listen for click on section titles
document.querySelectorAll(".list").forEach((item) => {
  item.addEventListener("click", () => {
    if (state !== item.id) {
      changeStyle(state, item.id)
      changeBanner(item.id);
      changeSection(state, item.id);
      changeHighlighted(highlight, item)
    }
  });
});

document.querySelector("#contact").addEventListener("click", () => {
  if (state !== "contact") {
    changeStyleContact(state, "contact")
    changeBanner("contact");
    changeSection(state, "contact");
    changeHighlighted(highlight, contact)
  }
})

// Listen for click on project title
document.querySelectorAll(".project-title").forEach((item) => {
  item.addEventListener("click", () => {
    if (state !== item.id) {
      console.log(item.id)
      changeSection(state, item.id);
    }
  });
});

// Effects and transitions when next circle button is clicked
next.addEventListener("click", () => {
  new Promise(function (resolve, reject) {
    next.classList.remove("heartbeat");
    next.classList.add("slide-out-top");
    body.classList.add("name-transition");
    setTimeout(
      () =>
        resolve(next.classList.add("remove-el")),
      750
    );
  }).then(() => {
    body.classList.remove("name-transition")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 0)}).then(() => {
          displayElement(barTop)
          main.classList.add("gradient-top")
    circleTop.classList.remove("hide-el");
    circleTop.classList.add("bounce-in-top");
    circleTop.classList.add("show-el");
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, 500)
	}).then(() => {
    site.classList.remove("remove-el")
		displayElement(bannerDiv)
		displayElement(nav)
		displayElement(projectTitles)
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(displayElement(welcomeMessage))
      }, 500)
    })
	})
        })
    })
  });

// Trigger transition for style changes
function changeStyle(prev, target) {
  let prevEl;
  if (!styleMap.find(item => item.title === prev)) {
    console.log("can't find")
    prevEl = styleMap.find(item => item.title === "projects")
  } else {
    prevEl = styleMap.find(item => item.title === prev)
  }
  let targetEl = styleMap.find(item => item.title === target)
  let prevCircle = prevEl.circle
  let prevBar = prevEl.bar
  let targetCircle = targetEl.circle
  let targetBar = targetEl.bar
  let prevGradient = prevEl.gradient
  let targetGradient = targetEl.gradient
  prevBar.classList.remove("display-el")
  prevBar.classList.add("scale-out-center")
  prevCircle.classList.remove(prevEl.entrance)
  prevCircle.classList.remove(prevGradient)
  prevCircle.classList.add(prevEl.exit)
  main.classList.add("fade-out-forward")
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(prevCircle.classList.remove("show-el"))
    },350)
  }).then(() => {
    prevBar.classList.remove("scale-out-center")
    prevBar.classList.add("remove-el")
    main.classList.remove(prevGradient)
    main.classList.add(targetGradient)
    // banner.style.color = "#0A6EBD"
    nav.style.borderLeft = "2px solid white"
    contactInfo.style.display = "none"
    prevCircle.classList.add("hide-el")
    targetBar.classList.remove("remove-el")
    targetBar.classList.add("display-el")
    targetCircle.classList.remove("hide-el")
    targetCircle.classList.add(targetEl.entrance)
    targetCircle.classList.add(targetGradient)
    targetCircle.classList.add("show-el")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      },100)
    }).then(() => {

    })
  })
  // prevCircle.circle.classList.add("hide-el")
}

function changeStyleContact(prev, target) {
  let prevEl;
  if (!styleMap.find(item => item.title === prev)) {
    console.log("can't find")
    prevEl = styleMap.find(item => item.title === "projects")
  } else {
    prevEl = styleMap.find(item => item.title === prev)
  }
  let targetEl = styleMap.find(item => item.title === target)
  let prevCircle = prevEl.circle
  let prevBar = prevEl.bar
  let targetCircle = targetEl.circle
  let targetBar = targetEl.bar
  let prevGradient = prevEl.gradient
  let targetGradient = targetEl.gradient
  prevBar.classList.remove("display-el")
  prevBar.classList.add("scale-out-center")
  prevCircle.classList.remove(prevEl.entrance)
  prevCircle.classList.add(prevEl.exit)
  main.classList.add("fade-out-forward")
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(prevCircle.classList.remove("show-el"))
    },400)
  }).then(() => {
    contactInfo.style.display = "flex"
    prevBar.classList.remove("scale-out-center")
    prevBar.classList.add("remove-el")
    main.classList.remove(prevGradient)
    main.classList.add(targetGradient)
    nav.style.borderLeft = "none"
    prevCircle.classList.add("hide-el")
    targetBar.classList.remove("remove-el")
    targetBar.classList.add("display-el")
    targetCircle.classList.remove("hide-el")
    targetCircle.classList.add(targetEl.entrance)
    targetCircle.classList.add("show-el")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      },100)
    }).then(() => {

    })
  })
  // prevCircle.circle.classList.add("hide-el")
}

// Display element function
function displayElement(el) {
	el.classList.remove("remove-el");
	el.classList.add("display-el");
}  

function displayElements() {
  const elements = [barTop, nav, bannerDiv, projectTitles];
  elements.forEach((el) => {
    el.classList.remove("remove-el");
    el.classList.add("display-el");
  });
}

// Delay function to display project titles 
function showTitles() {
  setTimeout(() => {
    projectTitles.style.visibility = "visible";
  }, 400)
}

// Change section banner 
function changeBanner(key) {
  banner.innerHTML = titleMap.get(key);
  key === "projects"
    ? showTitles()
    : (projectTitles.style.visibility = "hidden");
}

// Change summary/description
function changeSection(prev, target) {
  let oldSection = corresponding.get(prev);
  let newSection = corresponding.get(target);
  let current = document.getElementById(prev);
  oldSection.classList.remove("display-el");
  oldSection.classList.add("transition");
  
  new Promise(function (resolve, reject) {
    setTimeout(() => resolve(oldSection.classList.add("remove-el")), 350);
  }).then(() => {
    oldSection.classList.remove("transition");
    newSection.classList.remove("remove-el");
    newSection.classList.add("display-el");
    state = target;
  })

}


function changeDesc(prev, target) {
  let oldDesc = corresponding.get(prev);
  let newDesc = corresponding.get(target);
  let current = document.getElementById(prev);
  oldDesc.classList.remove("display-el");
  oldDesc.classList.add("transition");
  new Promise(function (resolve, reject) {
    setTimeout(() => resolve(oldDesc.classList.add("remove-el")), 350);
  }).then(() => {
    oldDesc.classList.remove("transition");
    newDesc.classList.remove("remove-el");
    newDesc.classList.add("display-el");
    state = target;
  });
}

function changeHighlighted(prev, target) {
  prev.classList.remove("grey-out")
  target.classList.add("grey-out")
  highlight = target
}