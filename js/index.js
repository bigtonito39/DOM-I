const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
//header nav:
/*
let navArray = ["Services", "Product", "Vision", "Features", "About", "Contact"];
navArray.forEach(anchord => {
    let aTag = document.querySelector('a');
    aTag.textContent = anchord;
    nav.append(aTag);

});*/
const nav = document.querySelector('nav');
delete siteContent["nav"]["img-src"];

function navigator() {
    for (let [key, value] of Object.entries(siteContent["nav"])) {

        let Atag = document.querySelector('header nav a');
        Atag.textContent = value;
        nav.append(Atag);
        Atag.style.color = "green";

    };
}
navigator();
const newnav = document.createElement("a");
newnav.textContent = "Home Page";
const newernav = document.createElement("a");
newernav.textContent = "Go to last page";
nav.appendChild(newernav);
nav.style.justifyContent = 'space-between';
newnav.style.color = "green";
newernav.style.color = "green";
newnav.setAttribute('href', "index.html");
nav.prepend(newnav);
newernav.setAttribute("href", "#");

//images: 

const MiddleImage = document.querySelector('.main-content .middle-img');
MiddleImage.src = 'img/mid-page-accent.jpg';
MiddleImage.alt = "Image of code snippets across the screen";

const ctaImage = document.querySelector('#cta-img');
ctaImage.src = 'img/header-img.png';
ctaImage.alt = "Image of a code snippet.";

//h1:

const upperSectionH1 = document.querySelector('.cta h1');
upperSectionH1.textContent = siteContent["cta"]["h1"];
const linebreakH1 = document.querySelector('.cta h1');
linebreakH1.innerHTML = "DOM <br/> Is <br/> Awesome";

//button
const upperSectionbutton = document.querySelector('.cta button');
upperSectionbutton.textContent = 'Get Started';
//strech added:
upperSectionbutton.addEventListener("click", (e) => {
    ctaImage.style.display = "none";
    alert("Thanks for clicking the button and making this ugly circle image disapear!")

})


//top-middle content
const topcontentP = document.querySelectorAll('.top-content p');



topcontentP[0].textContent = siteContent["main-content"]["features-content"];
topcontentP[1].textContent = siteContent["main-content"]["about-content"];

const topcontentH4 = document.querySelectorAll('.top-content h4');


topcontentH4[0].textContent = siteContent["main-content"]["features-h4"];
topcontentH4[1].textContent = siteContent["main-content"]["about-h4"];

//lower middle content

const middleLowerSec = document.querySelectorAll('.bottom-content h4');

middleLowerSec[0].textContent = siteContent["main-content"]["services-h4"];
middleLowerSec[1].textContent = siteContent["main-content"]["product-h4"];
middleLowerSec[2].textContent = siteContent["main-content"]["vision-h4"];

const middleLowerSecp = document.querySelectorAll('.bottom-content P');

middleLowerSecp[0].textContent = siteContent["main-content"]["services-content"];
middleLowerSecp[1].textContent = siteContent["main-content"]["product-content"];
middleLowerSecp[2].textContent = siteContent["main-content"]["vision-content"];



//Contact:
const contact = document.querySelector('.contact');
const contactArray = ['123 Way 456 Street', 'Somewhere  USA', '1 (888) 888-8888', 'sales@greatidea.io']


const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = "Contact";
const newP = document.createElement('p');
contact.appendChild(newP);

contactArray.forEach((p => {
    let ptag = document.querySelector('.contact p');
    ptag.textContent = p;
    contact.append(ptag);
}))

//footer: 

const footerP = document.querySelector("footer p");
footerP.textContent = "Copyright Great Idea! 2018";