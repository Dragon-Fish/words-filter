const Filter = require('./index')

var words = process.argv

console.log('=== wordsFilter START ===')

if (!words[2]) {
  console.log('┌ × No worlds given!')
  console.log('├ ? Try this: yarn test This is bad words')
  console.log('└ ? Or this: yarn test 这句话包含不好的词语')
} else {
  delete words[0]
  delete words[1]
  words = words.join(' ').trim()

  var filter = new Filter({
    list: ['bad\\s*words?', '不好'],
    cleanWith: '*',
  })

  console.log('┌ input:', words)
  console.log('├ isBad:', filter.isBad(words))
  console.log('└ clean:', filter.clean(words))
}

console.log('=== wordsFilter END  ===')
