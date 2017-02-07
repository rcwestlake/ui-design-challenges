'use strict'

class SideNav {
  constructor() {
    console.log('sidenav')
    this.toggleButtonEl = document.querySelector('.js-menu')
    this.sideNaveEl = document.querySelector('.js-side-nav')

    this.showSideNav = this.showSideNav.bind(this)

    this.addEventListeners()
  }

  addEventListeners() {
    this.toggleButtonEl.addEventListener('click', this.showSideNav)
  }

  showSideNav() {
    this.sideNaveEl.classList.add('side-nav--visible')
  }
}

new SideNav()
