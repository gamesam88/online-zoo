import { pets, banana, meet } from "./modules/pet-cards.js";
import { reviews } from "./modules/reviews.js";

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const emailInput = document.getElementById('email_input')

emailInput.addEventListener('focus', () => {
    emailInput.setAttribute("required", true);
})

const email_submit = document.querySelector('.footer_submit_btn')

email_submit.addEventListener('click', () => {
    if (validateEmail(emailInput.value)) {
        emailInput.value = ''
        emailInput.required = false;
    }
})

// ------------ SLIDER -------------



let petAmount = 6
const carusel = document.querySelector('.carusel')
const slides = document.querySelectorAll('.section_3_wrapper')

function getRandomNum(num = 6) {
    return Math.ceil(Math.random() * num);
}

function setSlidePull() {
    const pull = new Set()
    while (pull.size < petAmount) {
        pull.add(pets[getRandomNum(petAmount)])
    }
    return pull
}

function setSlide(slides) {
    const pull = setSlidePull()
    pull.forEach(elem => {
        slides.insertAdjacentHTML("beforeend",
            `<div class="slider_card">
        <div class="img_wrapper">
            <img src=${elem.image} alt="animal">
        </div>
        <div class="card_content">
            <div class="card_content_text">
                <p class="animal_name">${elem.name}</p>
                <p>${elem.about}</p>
            </div>
            <div class="card_content_img">
                <img src=${elem.food} alt="food">
            </div>
        </div>
    </div>`);
    })
}

slides.forEach(elem => {
    setSlide(elem)
})


const btn_rigth = document.querySelector('.slider_rigth')
const btn_left = document.querySelector('.slider_left')


let reMove = 1160

const changeReMove = () => {
    if (window.innerWidth <= 960) {
        reMove = 600
    } else if (window.innerWidth <= 1300) {
        reMove = 940
    } else {
        reMove = 1160
    }
    const mySlides = document.querySelectorAll('.section_3_wrapper')
    mySlides.forEach(el => {
        el.style.width = `${reMove}px`
    })
}

btn_rigth.addEventListener('click', () => {
    const mySlides = document.querySelectorAll('.section_3_wrapper')
    changeReMove()
    carusel.classList.remove('slide_left')
    btn_left.disabled = true;
    btn_rigth.disabled = true;
    carusel.classList.add('slide_rigth')
    const first = mySlides[0]
    first.style.width = '0px'

    setTimeout(() => {
        const remCh = carusel.removeChild(first)
        carusel.append(remCh)
        remCh.style.width = `${reMove}px`
        btn_rigth.disabled = false;
        btn_left.disabled = false;
    }, 1100);
})

btn_left.addEventListener('click', () => {
    const mySlides = document.querySelectorAll('.section_3_wrapper')
    changeReMove()
    carusel.classList.remove('slide_rigth')
    btn_left.disabled = true;
    btn_rigth.disabled = true;
    carusel.classList.add('slide_left')
    const last = mySlides[mySlides.length - 1]
    last.style.width = '0px'

    setTimeout(() => {
        const remCh = carusel.removeChild(last)
        carusel.prepend(remCh)
        remCh.style.width = `${reMove}px`
        btn_rigth.disabled = false;
        btn_left.disabled = false;
    }, 1100);
})



//----------- POPUP MENU ------------

const popup_menu = document.querySelector('.popup_menu')
const burger = document.querySelector('.burger')
const burgerCloseButton = document.querySelector('.close_popup')

burger.addEventListener('click', () => {
    popup_menu.classList.add('burger_active')
})

popup_menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup_menu')) {
        popup_menu.classList.remove('burger_active')
    }
})

burgerCloseButton.addEventListener('click', () => {
    popup_menu.classList.remove('burger_active')
})


// --------------REVIEW CARUSEL---------

const reviewCards = document.querySelector('.slider_5_cards')
const range = document.querySelector('input[type="range"]');




reviews.forEach(elem => {
    reviewCards.insertAdjacentHTML("beforeend",
        `<div class="slider_5_card">
    <div class="sl5_card_wrapper">
        <div class="card_top_content">
            <div class="top_ava">
                <img src=${elem.image} alt="ava"></img>
            </div>
            <div class="top_head">
                <p class="top_head_name">${elem.name}</p>
                <div class="top_head_local"><span>${elem.local}</span><span> &nbsp • &nbsp</span><span>${elem.day}</span>
                </div>
            </div>
        </div>
        <p class="card_bottom_content">The best online zoo I’ve met. My son delighted very much
            ljves to watch gouillas. Online zoo is one jf the ways to instill a love for
            animals.The best online zoo I’ve met. My son delighted very much ljves to watch
            gouillas. Online zoo is one jf the ways to instill a love for animals.<br>
            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
            Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve
            met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the
            ways to instill a love for animals.
        </p>
    </div>
</div>`)
})

const cardArr = document.querySelectorAll('.slider_5_card')
cardArr.forEach((elem, id) => {
    elem.index = id
})

let boost = 9.16

const changeBoost = () => {
    if (window.innerWidth <= 960) {
        boost = 9.14
    } else if (window.innerWidth <= 1000) {
        boost = 9.16
    } else if (window.innerWidth <= 1200) {
        boost = 9.17
    } else {
        boost = 9.16
    }
}

changeBoost()
const wrapper = document.querySelector('.testimonials_popup')

function createPopTesti(e) {
    const testi_close_btn = document.querySelector('.close_popup_testimonials')
    const name = document.querySelector('.testi_name')
    const ava = document.querySelector('.testi_ava')
    const local = document.querySelector('.testi_local')
    const day = document.querySelector('.testi_day')
    const id = e.currentTarget.index
    const elem = reviews[id]

    wrapper.classList.add('testimonials_popup_active')

    name.innerHTML = ''
    ava.src = ''
    local.innerHTML = ''
    day.innerHTML = ''

    name.innerHTML = elem.name
    ava.src = elem.image
    local.innerHTML = elem.local
    day.innerHTML = elem.day

    testi_close_btn.addEventListener('click', () => {
        testi_popup.classList.remove('testimonials_popup_active')
    })
}

if (window.innerWidth <= 808) {
    reviewCards.style.transform = `translateX(0%)`
    cardArr.forEach(elem => {
        elem.onclick = createPopTesti
    })
}

window.addEventListener('resize', () => {
    changeReMove()
    changeBoost()
    if (window.innerWidth <= 808) {
        reviewCards.style.transform = `translateX(0%)`
        cardArr.forEach(elem => {
            elem.onclick = createPopTesti
        })
    } else {
        cardArr.forEach(elem => {
            elem.onclick = 'none'
        })
    }
})

range.addEventListener("input", () => {
    let value = range.value * boost
    reviewCards.style.transform = `translateX(-${value}%)`
})

// testi popup close

const testi_popup = document.querySelector('.testimonials_popup')

testi_popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('testimonials_popup')) {
        testi_popup.classList.remove('testimonials_popup_active')
    }
})








