//Show menu toggle
const navMenu = document.getElementById("nav-menu");
console.log(navMenu);
const navToggle = document.getElementById("nav-toggle");
console.log(navToggle);
const navClose = document.getElementById("nav-close");
console.log(navClose);

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//Change bg header when scroll
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 80
    ? header.classList.add("change-bg-header")
    : header.classList.remove("change-bg-header");
};
window.addEventListener("scroll", scrollHeader);


//back to top
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
  scrollUp.addEventListener('click', ()=>{
    document.documentElement.scrollTop=0;
  })
};
window.onscroll = scrollUp;
// window.onload = scrollUp;


const activeNavbar = () => {
    //lấy tất cả các section có id
    const sections =  document.querySelectorAll('section[id]');
    //lấy vị trí thanh cuộn hiện tại
    let scrollY = window.pageYOffset;
    console.log(scrollY);

    //lặp qua các phần tử để lấy giá trị chiều cao, id
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop= section.offsetTop-50;
        //lấy id
        sectionId = section.getAttribute('id');
        console.log('sectionId', sectionId);
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
          ){
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active");
          } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active");
          }
    })

}
//thêm sự kiện khi scroll
window.addEventListener('scroll', activeNavbar)


//Change background dark - light

//Lấy icon mặc định
const themeButton = document.getElementById('change-theme')
const darkTheme = 'dark-theme' 
const iconTheme = 'fa-sun'

// lấy chủ đề mà người dùng đã chọn (mặc định)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
  //Lưu vào local
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 400,
  reset: true,
})
scrollReveal.reveal(`.home-img, .newsletter, .footer`)
scrollReveal.reveal(`.home-item`, {origin:'bottom'})
scrollReveal.reveal(`.about-item,  .recently-img`, {origin:'right'})
scrollReveal.reveal(`.about-img, .recently-item`, {origin:'left'})
scrollReveal.reveal(`.popular-card`, {interval:'100'})
