/**
 * @name wordsFilter
 * @author Dragon-Fish <dragon-fish@qq.com>
 * @license MIT
 */
class wordsFilter {
  /**
   * @module wordsFilter
   * @param {Object} options
   * @param {Array} options.list
   * @param {String} options.cleanWith Replace bad words with (default: "*")
   */
  constructor(options) {
    this.args = options
    this.cleanWith = options.cleanWith || '*'
  }

  _makeReg() {
    var { list } = this.args || []
    var reg = '(' + list.join('|') + ')'
    reg = new RegExp(reg, 'ig')
    return reg
  }

  /**
   * @function isBad
   * @param {Sting} words 
   * @returns {Boolean}
   */
  isBad(words) {
    var wordsReg = this._makeReg()
    if (wordsReg.test(words)) {
      return true
    } else {
      return false
    }
  }

  /**
   * @function clean
   * @param {String} words 
   * @description Replace bad words with placeholder
   * @returns {String}
   */
  clean(words) {
    var wordsReg = this._makeReg()
    var replace = words.replace(wordsReg, match => {
      var after = ''
      for (let i = 0, l = match.length; i < l; i++) {
        after += this.cleanWith
      }
      return after
    })
    return replace
  }
}

module.exports = wordsFilter
