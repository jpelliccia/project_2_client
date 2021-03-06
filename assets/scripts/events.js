'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./store.js')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('test')
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateSneaker = function (event) {
  event.preventDefault()
  const name = $('#create-sneaker-name').val()
  const color = $('#create-sneaker-color').val()
  const releaseDate = $('#create-sneaker-date').val()

  api.createSneaker(name, color, releaseDate)
    .then(ui.onCreateSneakerSuccess)
    .catch(ui.onCreateSneakerFailure)
}

const onSneakerIndex = function (event) {
  event.preventDefault()

  api.sneakerIndex()
    .then(ui.onSneakerIndexSuccess)
    .catch(ui.onSneakerIndexFailure)
}

const onUpdateSneaker = function (event) {
  event.preventDefault()
  const id = $('#update-sneaker-id').val()
  const name = $('#update-sneaker-name').val()
  const color = $('#update-sneaker-color').val()
  const releaseDate = $('#update-sneaker-date').val()

  api.updateSneaker(id, name, color, releaseDate)
    .then(ui.onUpdateSneakerSuccess)
    .catch(ui.onUpdateSneakerFailure)
}

const onDeleteSneaker = function (event) {
  event.preventDefault()
  const id = $('#delete-show-input').val()

  api.deleteSneaker(id)
    .then(ui.onDeleteSneakerSuccess)
    .catch(ui.onDeleteSneakerFailure)
}

const onShowSneaker = function (event) {
  event.preventDefault()
  const id = $('#delete-show-input').val()

  api.sneakerShow(id)
    .then(ui.onShowSneakerSuccess)
    .catch(ui.onShowSneakerFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateSneaker,
  onSneakerIndex,
  onUpdateSneaker,
  onDeleteSneaker,
  onShowSneaker
}
