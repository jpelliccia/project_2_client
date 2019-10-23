'use strict'

// require store object, so we can save the user
// and their token
const store = require('./store')
const api = require('./api')
const sneakerIndexTemplate = require('./templates/sneakers-index.handlebars')
const sneakerShowTemplate = require('./templates/sneaker-show.handlebars')

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
  // $('#brands_panel').show()
  const email = $('#sign-up-email').val()
  const password = $('#sign-up-password').val()
  const formFields = {
    credentials: {
      email: email,
      password: password
    }
  }
  api.signIn(formFields)
    .then(onSignInSuccess)
    .catch(onSignInFailure)
}

const onSignUpFailure = function (response) {
  failureMessage('Sign up failed')
  $('#sign-up').trigger('reset')
  // console.log(response)
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  // console.log('responseData is', responseData)
  // save the `user` we got from the API inside of `store`
  // so we can use it later, from any file
  store.user = responseData.user
  // console.log('store is', store)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#loginBox').hide()
  $('#title_image').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('.form-cards').show()
  $('#dropdownMenuButton').show()

  api.sneakerIndex()
    .then(onSneakerIndexSuccess)
    .catch(onSneakerIndexFailure)
}

const onSignInFailure = function (response) {
  failureMessage('Sign in failed')
  $('#sign-in').trigger('reset')
  // console.log(response)
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
}

const onChangePasswordFailure = function (response) {
  failureMessage('Change password failed')
  // console.log(response)
}

const onSignOutSuccess = function (response) {
  successMessage('Signed out successfully!')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  location.reload()
}

const onSignOutFailure = function (response) {
  failureMessage('Sign out failed')
  // console.log(response)
}

const onCreateSneakerSuccess = function (response) {
  api.sneakerIndex().then(onSneakerIndexSuccess).catch(onSneakerIndexFailure)
  successMessage('Created sneaker successfully!')
}

const onCreateSneakerFailure = function (response) {
  failureMessage('Create sneaker failed')
  // console.log(response)
}

const onUpdateSneakerSuccess = function (repsonse) {
  api.sneakerIndex().then(onSneakerIndexSuccess).catch(onSneakerIndexFailure)
  $('.update-form').trigger('reset')
  successMessage('Updated sneaker successfully!')
}

const onUpdateSneakerFailure = function (response) {
  failureMessage('Update sneaker failed')
  // console.log(response)
}

const onSneakerIndexSuccess = function (response) {
  // console.log(response)
  store.sneakers = response.sneakers
  showSneakerView()
}

const onSneakerIndexFailure = function (response) {
  // console.log(response)
  // console.log('failure')
}

const showSneakerView = function () {
  $('.sneaker-table').show()
  const sneakerHTML = sneakerIndexTemplate({sneakers: store.sneakers})
  $('.sneaker-table tbody').html('')
  $('.sneaker-table tbody').append(sneakerHTML)
}

const onShowSneakerSuccess = function (response) {
  const sneakerHTML = sneakerShowTemplate({sneaker: response.sneaker})
  $('#delete-show-display').html(sneakerHTML)
  successMessage('Showed sneaker successfully!')
}

const onShowSneakerFailure = function (response) {
  failureMessage('Show sneaker failed')
  // console.log(response)
}

const onDeleteSneakerSuccess = function (response) {
  api.sneakerIndex().then(onSneakerIndexSuccess).catch(onSneakerIndexFailure)
  $('#delete-show-input').val('')
  successMessage('Deleted sneaker successfully!')
}

const onDeleteSneakerFailure = function (response) {
  failureMessage('Delete sneaker failed')
  // console.log(response)
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
  showSneakerView,
  onCreateSneakerSuccess,
  onCreateSneakerFailure,
  onUpdateSneakerSuccess,
  onUpdateSneakerFailure,
  onShowSneakerSuccess,
  onShowSneakerFailure,
  onDeleteSneakerSuccess,
  onDeleteSneakerFailure
}
