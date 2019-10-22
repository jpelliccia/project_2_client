'use strict'

// require store object, so we can save the user
// and their token
const store = require('./store')
const api = require('./api')
const sneakerIndexTemplate = require('./templates/sneakers-index.handlebars')
// const authEvents = require('./events.js')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
  $('#loginBox').hide()
  $('#title_image').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#brands_panel').show()
  $('#dropdownMenuButton').show()
  $('#back-button').show()
}

const onSignUpFailure = function (response) {
  failureMessage('Sign up failed')
  $('#sign-up').trigger('reset')
  console.log(response)
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  console.log('responseData is', responseData)
  // save the `user` we got from the API inside of `store`
  // so we can use it later, from any file
  store.user = responseData.user
  console.log('store is', store)
  // $('#change-password').show()
  // $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#loginBox').hide()
  $('#title_image').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#brands_panel').show()
  $('#dropdownMenuButton').show()
  $('#back-button').hide()
  api.sneakerIndex()
    .then(onSneakerIndexSuccess)
    .catch(onSneakerIndexFailure)
}

const onSignInFailure = function (response) {
  failureMessage('Sign in failed')
  $('#sign-in').trigger('reset')
  console.log(response)
  // location.reload() // ???????????
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
}

const onChangePasswordFailure = function (response) {
  failureMessage('Change password failed')
  console.log(response)
}

const onSignOutSuccess = function (response) {
  successMessage('Signed out successfully!')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#back-button').hide()
  location.reload()
}

const onSignOutFailure = function (response) {
  failureMessage('Sign out failed')
  console.log(response)
}

const onSneakerIndexSuccess = function (response) {
  console.log(response)
  store.sneakers = response.sneakers
}

const onSneakerIndexFailure = function (response, brand) {
  console.log(response)
  console.log('failure')
}

const showSneakerView = function (brandSneakers) {
  $('#back-button').show()
  $('#brands_panel').hide()
  $('.sneaker-table').show()
  const sneakerHTML = sneakerIndexTemplate({sneakers: brandSneakers})
  $('.sneaker-table tbody').html('')
  $('.sneaker-table tbody').append(sneakerHTML)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onSneakerIndexSuccess,
  onSneakerIndexFailure,
  showSneakerView
}
