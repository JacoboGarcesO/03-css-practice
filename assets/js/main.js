const sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2500,
  delay: 100,
  reset: true
})

sr.reveal('.banner__title')
sr.reveal('.banner__image', { delay: 200 })
sr.reveal('.banner__description', { delay: 300 })
sr.reveal('.button', { delay: 400 })