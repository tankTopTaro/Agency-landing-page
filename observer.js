const backToTop = document.getElementById('backToTop')
const header = document.querySelector('.header')

const scrollToTop = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) {
            backToTop.style.display = 'block'
        } else {
            backToTop.style.display ='none'
        }
    })
}, { threshold: [0, 0.1] })

scrollToTop.observe(header)

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            entry.target.classList.remove('not-in-view')
        } else {
            entry.target.classList.remove('in-view')
            entry.target.classList.add('not-in-view')
        }
    })
}, {
    rootMargin: "0px",
    threshold: [0, 0.1, 1]
})

const tags = document.querySelectorAll("section")

tags.forEach((tag) => {
    observer.observe(tag)
})
