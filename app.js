let scrollPos = true
window.addEventListener('scroll', (e) => {
   if (this.scrollY > 750) {
      scrollPos = true
      document.querySelector('.back-to-top').classList.add('visible')
      document.querySelector('.back-to-top').style.cursor = 'pointer'
   } else {
      scrollPos = false
      document.querySelector('.back-to-top').classList.remove('visible')
      document.querySelector('.back-to-top').style.cursor = 'default'
   }
})

function scrollToAbout() {
   let about = document.querySelector('.about')
   window.scrollTo(0, about.offsetTop - 35)
}

function scrollToProjects() {
   let projects = document.querySelector('.projects')
   window.scrollTo(0, projects.offsetTop - 35)
}

function scrollToTop() {
   if (scrollPos) {
      window.scrollTo(0, 0)
   }
}
