const sites = [
    "console_one.html",
    "console_two.html",
    "index.html"
];

const text = [
    "cloud",
    "brain",
    "worm",
    "swarm",
    "bug",
    "water",
    "virus",
    "spider",
    "tree",
    "ecosystem"
]

const tier1_images = [
    "./images/Webpage Background 1.jpg",
    "./images/Webpage Background 1 (5).jpg",
    "./images/Webpage Background 1 (6).jpg"
]

const tier2_images = [
    "./images/additional drawing that could be used.png",
    "./images/element5.jpg",
    "./images/Webpage Background 1 (1).jpg",
    "./images/Webpage Background 1 (2).jpg",
    "./images/Webpage Background 1 (4) (1).jpg"
]

const tier3_images = [
    "./images/element.png",
    "./images/element2.png",
    "./images/element3.png",
    "./images/element4.png",
    "./images/element6.png",
    "./images/element7.png",
    "./images/Webpage Background 1 (3).jpg"
]

function checkFor404(ind) {
  let val = getRandomInt(0, 10);
  if (val < 2) { // may need to lower the probability
    window.location.href = "404.html";
  } else {
    window.location.href = sites[ind];
  }
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max + 1);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function playSound(ind) {
    var sound = new Audio(clips[ind]); 
    sound.currentTime = 0;
    sound.play();
}

function update() {
    if (sessionStorage.getItem("tier1") == null) {
        sessionStorage.setItem("tier1", true)
        sessionStorage.setItem("tier2", false)
        sessionStorage.setItem("tier3", false)
        sessionStorage.setItem("el1_change", false)
        sessionStorage.setItem("el2_change", false)
        sessionStorage.setItem("el3_change", false)
        sessionStorage.setItem("el1_develop", false)
        sessionStorage.setItem("el2_develop", false)
        sessionStorage.setItem("el3_develop", false)
        sessionStorage.setItem("el1_curr_tier", "1");
        sessionStorage.setItem("el2_curr_tier", "1");
        sessionStorage.setItem("el3_curr_tier", "1");
        sessionStorage.setItem("el1_curr_img", "./images/Webpage Background 1.jpg");
        sessionStorage.setItem("el2_curr_img", "./images/Webpage Background 1 (5).jpg");
        sessionStorage.setItem("el3_curr_img", "./images/Webpage Background 1 (6).jpg");
    } 
    document.getElementById("GIF1").hidden = !(sessionStorage.getItem("tier1") === 'true');
    document.getElementById("GIF2").hidden = !(sessionStorage.getItem("tier2") === 'true');
    document.getElementById("GIF3").hidden = !(sessionStorage.getItem("tier3") === 'true');

    changeElements();
    updateTier();
}

function updateTier() {
    if (sessionStorage.getItem("el1_curr_tier") === '2' && sessionStorage.getItem("el2_curr_tier") === '2' && sessionStorage.getItem("el3_curr_tier") === '2') {
        sessionStorage.setItem("tier1", "false");
        sessionStorage.setItem("tier2", "true");
    }

    if (sessionStorage.getItem("el1_curr_tier") === '3' && sessionStorage.getItem("el2_curr_tier") === '3' && sessionStorage.getItem("el3_curr_tier") === '3') {
        sessionStorage.setItem("tier2", "false");
        sessionStorage.setItem("tier3", "true");
    }
}

function changeElements() {
    if (sessionStorage.getItem("tier1") === 'true') {
        if (sessionStorage.getItem("el1_change") === 'true') {
            if (sessionStorage.getItem("el1_develop") === 'true' && sessionStorage.getItem("el1_curr_tier") === '1') {
                sessionStorage.setItem("el1_curr_tier", "2");
                sessionStorage.setItem("el1_curr_img", tier2_images[getRandomInt(0, 4)]);
            } else if (sessionStorage.getItem("el1_curr_tier") === '1') {
                sessionStorage.setItem("el1_curr_img", tier1_images[getRandomInt(0, 2)]);
            }
            sessionStorage.setItem("el1_change", "false");
            sessionStorage.setItem("el1_develop", "false");
        }

        if (sessionStorage.getItem("el2_change") === 'true') {
            if (sessionStorage.getItem("el2_develop") === 'true' && sessionStorage.getItem("el2_curr_tier") === '1') {
                sessionStorage.setItem("el2_curr_tier", "2");
                sessionStorage.setItem("el2_curr_img", tier2_images[getRandomInt(0, 4)]);
            } else if (sessionStorage.getItem("el2_curr_tier") === '1') {
                sessionStorage.setItem("el2_curr_img", tier1_images[getRandomInt(0, 2)]);
            }
            sessionStorage.setItem("el2_change", "false");
            sessionStorage.setItem("el2_develop", "false");
        }       
        
        if (sessionStorage.getItem("el3_change") === 'true') {
            if (sessionStorage.getItem("el3_develop") === 'true' && sessionStorage.getItem("el3_curr_tier") === '1') {
                sessionStorage.setItem("el3_curr_tier", "2");
                sessionStorage.setItem("el3_curr_img", tier2_images[getRandomInt(0, 4)]);
            } else if (sessionStorage.getItem("el3_curr_tier") === '1') {
                sessionStorage.setItem("el3_curr_img", tier1_images[getRandomInt(0, 2)]);
            }
            sessionStorage.setItem("el3_change", "false");
            sessionStorage.setItem("el3_develop", "false");
        }
    }

    if (sessionStorage.getItem("tier2") === 'true') {
        if (sessionStorage.getItem("el1_change") === 'true') {
            if (sessionStorage.getItem("el1_develop") === 'true' && sessionStorage.getItem("el1_curr_tier") === '2') {
                sessionStorage.setItem("el1_curr_tier", "3");
                sessionStorage.setItem("el1_curr_img", tier3_images[getRandomInt(0, 6)]);
            } else if (sessionStorage.getItem("el1_curr_tier") === '2') {
                sessionStorage.setItem("el1_curr_img", tier2_images[getRandomInt(0, 4)]);
            }
            sessionStorage.setItem("el1_change", "false");
            sessionStorage.setItem("el1_develop", "false");
        }

        if (sessionStorage.getItem("el2_change") === 'true') {
            if (sessionStorage.getItem("el2_develop") === 'true' && sessionStorage.getItem("el2_curr_tier") === '2') {
                sessionStorage.setItem("el2_curr_tier", "3");
                sessionStorage.setItem("el2_curr_img", tier3_images[getRandomInt(0, 6)]);
            } else if (sessionStorage.getItem("el2_curr_tier") === '2') {
                sessionStorage.setItem("el2_curr_img", tier2_images[getRandomInt(0, 4)]);
            }
            sessionStorage.setItem("el2_change", "false");
            sessionStorage.setItem("el2_develop", "false");
        }       
        
        if (sessionStorage.getItem("el3_change") === 'true') {
            if (sessionStorage.getItem("el3_develop") === 'true' && sessionStorage.getItem("el3_curr_tier") === '2') {
                sessionStorage.setItem("el3_curr_tier", "3");
                sessionStorage.setItem("el3_curr_img", tier3_images[getRandomInt(0, 6)]);
            } else if (sessionStorage.getItem("el3_curr_tier") === '2') {
                sessionStorage.setItem("el3_curr_img", tier2_images[getRandomInt(0, 4)]);
            }
            sessionStorage.setItem("el3_change", "false");
            sessionStorage.setItem("el3_develop", "false");
        }
    }

    document.getElementById("element1").src = sessionStorage.getItem("el1_curr_img");
    document.getElementById("element2").src = sessionStorage.getItem("el2_curr_img");
    document.getElementById("element3").src = sessionStorage.getItem("el3_curr_img");
}

function chooseText() {
    document.getElementById("changer1").textContent = text[getRandomInt(0,10)]
    document.getElementById("changer2").textContent = text[getRandomInt(0,10)]
    document.getElementById("changer3").textContent = text[getRandomInt(0,10)]
}

function changeImg(ind) {
    switch (ind) {
        case 1:
            sessionStorage.setItem("el1_change", "true");
            if (getRandomInt(0, 10) < 3) {
                sessionStorage.setItem("el1_develop", "true");
            }
            break;
        case 2:
            sessionStorage.setItem("el2_change", "true");
            if (getRandomInt(0, 10) < 3) {
                sessionStorage.setItem("el2_develop", "true");
            }
            break;
        case 3:
            sessionStorage.setItem("el3_change", "true");
            if (getRandomInt(0, 10) < 3) {
                sessionStorage.setItem("el3_develop", "true");
            }
            break;
    }
}
