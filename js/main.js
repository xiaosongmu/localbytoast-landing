document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion')
  accordions.length > 0 && loadAccordions(accordions)

  function loadAccordions(accordions) {
    accordions.forEach(accordion => {
      let accordionItems = accordion.querySelectorAll('.accordion-item')
      accordionItems.forEach(item => {
        let title = item.querySelector('.accordion-item__title')
        let toggle = item.querySelector('.accordion-item__toggle')
        let content = item.querySelector('.accordion-item__content')
        title.addEventListener('click', () => {
          toggle.classList.toggle('is-active')
          content.classList.toggle('hidden')
        })
      })
    })
  }
})