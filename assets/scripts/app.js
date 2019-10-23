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
  $('#dropdownMenuButton').hide()
  $('.sneaker-table').hide()
  $('.form-cards').hide()

  $('.create-form').on('submit', events.onCreateSneaker)
  $('.update-form').on('submit', events.onUpdateSneaker)
  $('#show-button').on('click', events.onShowSneaker)
  $('#delete-button').on('click', events.onDeleteSneaker)
})
