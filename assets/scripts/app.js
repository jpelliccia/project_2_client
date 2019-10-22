'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#brands_panel').hide()
  $('#dropdownMenuButton').hide()
  $('#back-button').hide()
  $('.sneaker-table').hide()

  $('.nike-button').on('click', events.onBrandClick)
  $('.adidas-button').on('click', events.onBrandClick)
  $('.nb-button').on('click', events.onBrandClick)
  $('.puma-button').on('click', events.onBrandClick)

  $('.adidas-button').click(function () {
    $('#brands_panel').hide()
    $('#back-button').show()
  })

  $('.nb-button').click(function () {
    $('#brands_panel').hide()
    $('#back-button').show()
  })

  $('.puma-button').click(function () {
    $('#brands_panel').hide()
    $('#back-button').show()
  })

  $('#back-button').click(function () {
    $('#brands_panel').show()
  })
})
