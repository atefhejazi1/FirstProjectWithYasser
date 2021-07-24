document.querySelector('.copyRightReserved').innerText = new Date().getFullYear()
document.querySelector('.navbar-toggler').onclick = function a() {
    document.querySelector('.navbar').classList.toggle('flex-wrap')
}


let rewardsImagePage = document.querySelector(".rewards-hero-section-images  img")
let rewardsSubtitle = document.querySelector(".rewards-hero-section-intro-subtitle  span")
let ImagesArray = ["01.png", "02.png", "03.png", "04.png", "05.png",];
let subtitleArray = ["FREE CHIPS & GUAC", "FREE DRINKS", "MORE WAYS TO GIVE", "FREE GOODS", "FREE ENTRÉES",];



setInterval(() => {
    let randomNumber = Math.floor(Math.random() * ImagesArray.length)
    rewardsImagePage.src = "images/rewards/" + ImagesArray[randomNumber]
    rewardsSubtitle.innerText = subtitleArray[randomNumber]
}, 2000)




