
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

//--------------- POPUP MENU----------------

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


//----------------- AMOUNT ----------------

const some = document.querySelectorAll('.line_point')
const amount = document.querySelector('#donate_amount')
amount.value = 100

amount.oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
    some.forEach(elem => {
        elem.classList.remove('point_active')
        if (elem.querySelector('.amount_input').value === this.value) {
            elem.classList.add('point_active')
        }
    })
}

some.forEach(elem => elem.addEventListener('click', () => {
    some.forEach(elem => elem.classList.remove('point_active'))
    elem.classList.add('point_active')
    amount.value = elem.querySelector('.amount_input').value
}))


