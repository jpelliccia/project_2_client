'use strict'

const config = require('./config')
// require store so we have access to our `token`
// so the API knows who we are
const store = require('./store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  console.log('signIn')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const sneakerIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/sneakers',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createSneaker = function (name, color, releaseDate) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sneakers',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      sneaker: {
        name: name,
        color: color,
        release_date: releaseDate,
        brand_id: 1,
        user_id: store.user.id
      }
    }
  })
}

const updateSneaker = function (id, name, color, releaseDate) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/sneakers/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      sneaker: {
        name: name,
        color: color,
        releaseDate: releaseDate,
        brand_id: 1,
        user_id: store.user.id
      }
    }
  })
}

const deleteSneaker = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/sneakers/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const sneakerShow = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/sneakers/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  sneakerIndex,
  createSneaker,
  updateSneaker,
  deleteSneaker,
  sneakerShow
}
