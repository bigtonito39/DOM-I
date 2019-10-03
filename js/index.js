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
const nav = document.querySelector('nav');
let navArray = ["Services", "Product", "Vision", "Features", "About", "Contact"];
navArray.forEach(anchord => {
    let aTag = document.querySelector('a');
    aTag.textContent = anchord;
    nav.append(aTag);

});

nav.style.justifyContent = 'space-between';

//images: 

const MiddleImage = document.querySelector('.main-content .middle-img');
MiddleImage.src = 'img/mid-page-accent.jpg';
MiddleImage.alt = "Image of code snippets across the screen";

const ctaImage = document.querySelector('#cta-img');
ctaImage.src = 'img/header-img.png';
ctaImage.alt = "Image of a code snippet.";

//h1:

const upperSectionH1 = document.querySelector('.cta h1');
upperSectionH1.textContent = 'DOM is Awesome';

//button
const upperSectionbutton = document.querySelector('.cta button');
upperSectionbutton.textContent = 'Get Started';

//top-middle content
const topContent = document.querySelector('.top-content');
const h4Content = ["Features", "About", ];
const pTopContent = ['Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

]
h4Content.forEach(h4 => {
    let htag = document.querySelector('.top-content h4');
    htag.textContent = h4;
    topContent.append(htag);
})
pTopContent.forEach(p => {
    let ptag = document.querySelector('p');
    ptag.textContent = p;
    topContent.appendChild(ptag);
});
topContent.style.justifyContent = 'space-around';

//lower middle content
const lowerSection = document.querySelector('.bottom-content');
const bottomContent = ["Services", "Product", "Vision"];
const pBottomContent = ['Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
]
bottomContent.forEach(h4 => {
    let hdtag = document.querySelector(".bottom-content h4");
    hdtag.textContent = h4;
    lowerSection.append(hdtag);
});
pBottomContent.forEach(p4 => {
    let hdtag = document.querySelector(".bottom-content p");
    hdtag.textContent = p4;
    lowerSection.append(hdtag);
});