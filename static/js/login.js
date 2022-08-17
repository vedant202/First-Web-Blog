console.log("In login");

const search_field = document.querySelector('.search-field');
console.log(search_field);
search_field.style.display = "none"; 


const forgotPass = document.querySelector(".forgotPass");

forgotPass.addEventListener("click", function (e) {

    const card = document.querySelector(".card");

    card.classList.toggle('is_flipped');
});
const backToLogin = document.querySelector(".backToLogin");

backToLogin.addEventListener("click", function (e) {

    const card = document.querySelector(".card");

    card.classList.toggle('is_flipped');
});


