/*==================== SCROLL ACTIVE SECTION ====================*/ 
const sections = document.querySelectorAll('section[id]')
// console.log(sections);

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.nav__list a[href*=${sectionId}]`).classList.add('active__link')
        }else{
            document.querySelector(`.nav__list a[href*=${sectionId}]`).classList.remove('active__link')
        }
    })
}
window.addEventListener('scroll', scrollActive);



/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show__scroll'); else scrollUp.classList.remove('show__scroll')
}
window.addEventListener('scroll', scrollUp);



/*==================== Scroll Reveal ====================*/ 
const sr = ScrollReveal({
    distance:'60px',
    duration:2800,
  })
  
  sr.reveal(`.home-data, .home-image, .slide, .skill-image, .contect-data`,{
    origin: 'top'
  })
  
  sr.reveal(`.about-data`,{
    origin: 'left'
  })
  
  sr.reveal(`.about-image`,{
    origin: 'right'
  })
  
  sr.reveal(`.works, .skill-data, .contact-image`,{
    origin: 'bottom'
  })
  