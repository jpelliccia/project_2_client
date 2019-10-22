'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('test')
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

const onBrandClick = function (event) {
  event.preventDefault()
  if ($(event.target).attr('data-brand') === 'nike') {
    const nike = store.sneakers.filter(function (sneaker) {
      return sneaker.brand.id === 1
    })
    ui.showSneakerView(nike)
  } else if ($(event.target).attr('data-brand') === 'adidas') {
    const adidas = store.sneakers.filter(function (sneaker) {
      return sneaker.brand.id === 2
    })
    ui.showSneakerView(adidas)
  } else if ($(event.target).attr('data-brand') === 'nb') {
    const nb = store.sneakers.filter(function (sneaker) {
      return sneaker.brand.id === 3
    })
    ui.showSneakerView(nb)
  } else if ($(event.target).attr('data-brand') === 'puma') {
    const puma = store.sneakers.filter(function (sneaker) {
      return sneaker.brand.id === 4
    })
    ui.showSneakerView(puma)
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onBrandClick
}
