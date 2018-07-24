export default class StorageService {

  static setItem (key, value) {
    return localStorage.setItem(key, value)
  }

  static getItem (key) {
    return localStorage.getItem(key)
  }

  static getUserToken () {
    return StorageService.getItem('user_token').replace('"', '')
  }

  static setUserToken (token) {
    return StorageService.setItem('user_token', token)
  }
}
