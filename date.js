var firstInput = document.getElementById('first')
var lastInput = document.getElementById('last')
var emailInput = document.getElementById('email')
var telInput = document.getElementById('tel')
var textInput = document.getElementById('text')
var paragraph = document.getElementById('my-paragraph')
var rawHtml = document.getElementById('generated-html')
function update () {
  var first = firstInput.value
  var last = lastInput.value
  var email = emailInput.value
  var tel = telInput.value
  var text = textInput.value
  var previewText = '<h1>Hi, my name is ' + first + ' ' + last + '!</h1>' +
  '<p>' + text + '</p>' +
  '<p>' + 'If you\re interested in a date, you can email me at' +
  '<a href="mailto:' + email + ' " target="_blank">' + ' ' + email + ' ' + '</a>' +
  'or give me a call at' +
  '<a href="tel:' + tel + '" target="_blank">' + ' ' + tel + ' ' + '</a>.' + '</p>'
  rawHtml.textContent = previewText
  paragraph.innerHTML = previewText
}
firstInput.addEventListener('input', update)
lastInput.addEventListener('input', update)
emailInput.addEventListener('input', update)
telInput.addEventListener('input', update)
textInput.addEventListener('input', update)
