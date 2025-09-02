console.log("JS workign")

const storyLeft = document.getElementById("carousel-left")
const storyRight = document.getElementById("carousel-right")

const storyCarousel = document.querySelector(".story__carousel")
let storyListingWidth = document.querySelector(".story__listing").offsetWidth

let storyPosition = 1
storyLeft.classList.add('inactive')

console.log(storyListingWidth)

window.addEventListener('resize', ()=> {
    storyListingWidth = document.querySelector(".story__listing").offsetWidth
    console.log(storyListingWidth)
})

storyRight.addEventListener('click', ()=> {
    if(storyRight.classList.contains('inactive')) {
        return
    } else {
        storyCarousel.scrollLeft += storyListingWidth + 30
        storyPosition += 1
        storyRight.classList.add('inactive')
        storyLeft.classList.add('inactive')
        setTimeout(()=> {
            if(storyPosition === 4) {
                storyLeft.classList.remove('inactive')
            } else {
                storyRight.classList.remove('inactive')
                storyLeft.classList.remove('inactive')
            }
        }, 1000)

    }
})

storyLeft.addEventListener('click', ()=> {
    if(storyLeft.classList.contains('inactive')) {
        return
    } else {
        storyCarousel.scrollLeft -= storyListingWidth + 30
        storyPosition -= 1
        storyRight.classList.add('inactive')
        storyLeft.classList.add('inactive')
        setTimeout(()=> {
            if(storyPosition === 1) {
                storyRight.classList.remove('inactive')
            } else {
                storyRight.classList.remove('inactive')
                storyLeft.classList.remove('inactive')
            }
        }, 1000)

    }
})

// scrollers

const scrollers = document.querySelectorAll('.scroller')

document.addEventListener("DOMContentLoaded", ()=> {
    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation()
    }
})

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true)

        const scrollerInner = scroller.querySelector('.scroller__inner')
        const scrollerContent = Array.from(scrollerInner.children)

        for (let i = 0; i < 2; i++) {
            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true)
                duplicatedItem.setAttribute("aria-hidden", true)
                scrollerInner.appendChild(duplicatedItem)
            })
        }
    })
}

const products = document.querySelector(".products--full")
const productsScrollRight = document.getElementById("products-scrollright")
const productsScrollLeft = document.getElementById("products-scrollleft")

productsScrollRight.addEventListener('click', ()=> {
    products.scrollLeft += 310;
})
productsScrollLeft.addEventListener('click', ()=> {
    products.scrollLeft -= 310;
})

document.getElementById("hamburger__button").addEventListener("click", toggleNav)

function toggleNav() {
    let hamburgerIcon = document.getElementById("hamburger__button")
    let navLinks = document.getElementById("navigation__links")
    let isExpanded = hamburgerIcon.getAttribute("aria-expanded") === "true"
    
    function open() {
        hamburgerIcon.setAttribute('aria-expanded', 'true')
        navLinks.setAttribute('data-expanded', 'true')
        navLinks.style.maxHeight = navLinks.scrollHeight + "px"
    }

    function close() {
        hamburgerIcon.setAttribute('aria-expanded', 'false')
        navLinks.setAttribute('data-expanded', 'false')
        navLinks.style.maxHeight = 0
    }

    isExpanded ? close() : open()
}

const navLinks = document.querySelectorAll("nav ul li")
navLinks.forEach((link)=> {
    link.addEventListener('click', ()=> {
        toggleNav()
    })
})

// function closeNav() {
//     let hamburgerIcon = document.getElementById("hamburger__button")
//     let navLinks = document.getElementById("navigation__links")
//     hamburgerIcon.setAttribute('aria-expanded', 'false')
//     navLinks.setAttribute('data-expanded', 'false')
// }