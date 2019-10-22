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
  // $('#brands_panel').hide()
  $('#dropdownMenuButton').hide()
  // $('#back-button').hide()
  $('.sneaker-table').hide()
  $('.form-cards').hide()

  // $('.nike-button').on('click', events.onBrandClick)
  // $('.adidas-button').on('click', events.onBrandClick)
  // $('.nb-button').on('click', events.onBrandClick)
  // $('.puma-button').on('click', events.onBrandClick)

  // $('.nike-button').click(function () {
  //   $('.form-cards').show()
  // })
  //
  // $('.adidas-button').click(function () {
  //   $('#brands_panel').hide()
  //   $('#back-button').show()
  //   $('.form-cards').show()
  // })
  //
  // $('.nb-button').click(function () {
  //   $('#brands_panel').hide()
  //   $('#back-button').show()
  //   $('.form-cards').show()
  // })
  //
  // $('.puma-button').click(function () {
  //   $('#brands_panel').hide()
  //   $('#back-button').show()
  //   $('.form-cards').show()
  // })
  //
  // $('#back-button').click(function () {
  //   $('#brands_panel').show()
  //   $('.sneaker-table').hide()
  // })

  $('.create-form').on('submit', events.onCreateSneaker)
  $('.update-form').on('submit', events.onUpdateSneaker)
  $('#show-button').on('click', events.onShowSneaker)
  $('#delete-button').on('click', events.onDeleteSneaker)
})
