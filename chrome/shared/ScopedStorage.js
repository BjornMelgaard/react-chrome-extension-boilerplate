import trace from 'ramda-universal-trace'

export default class ScopedLocalStorage {
  constructor(prefix) {
    this.prefix = prefix

    if (!this.getAllRaw()) {
      this.saveAll({})
    }
  }

  getAllRaw() {
    return localStorage[this.prefix]
  }

  saveAll(data) {
    localStorage[this.prefix] = JSON.stringify(data)
  }

  getAll() {
    return trace('getAll')(JSON.parse(this.getAllRaw()))
    // return JSON.parse(this.getAllRaw())
  }

  removeAll() {
    this.saveAll({})
  }

  save(prop, val) {
    const obj = this.getAll()
    obj[prop] = val
    this.saveAll(obj)
  }

  get(prop) {
    const obj = this.getAll()
    return obj[prop]
  }

  remove(prop) {
    const obj = this.getAll()
    delete obj[prop]
    this.saveAll(obj)
  }
}
