const Filter = require('./index')

var words = process.argv

console.log('=== wordsFilter START ===')

if (!words[2]) {
  console.log('× No worlds given!')
  console.log('? Try some sentences like: `yarn test This is bad words`')
} else {
  delete words[0]
  delete words[1]
  words = words.join(' ').trim()

  var filter = new Filter({
    list: ['bad\\s*words?', 'not good'],
    cleanWith: '*',
  })

  console.log('→ input:', words)
  console.log('→ isBad:', filter.isBad(words))
  console.log('→ clean:', filter.clean(words))
}

console.log('===  wordsFilter END  ===')
