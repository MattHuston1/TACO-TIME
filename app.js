const baseUrl = 'https://swapi.co/api/'
const characterSection = document.querySelector('.characters')

getLuke()
getCharacters()


function getLuke() {
  fetch(baseUrl + 'people/1')
    .then(response => response.json())
    .then(appendCharacters)
}

function appendCharacters(data) {
  var name = data.name
  var colorHair = data.hair_color
  var howTall = data.height

  var skywalker = document.createElement('h3')
  var hairLi = document.createElement('li')
  var heightLi = document.createElement('li')

  skywalker.innerText = name
  hairLi.textContent = colorHair
  heightLi.textContent = howTall

  var attributes = document.querySelector('.attributes')

  characterSection.insertBefore(skywalker, attributes)
  attributes.appendChild(hairLi)
  attributes.appendChild(heightLi)
}

function getCharacters() {

  fetch(baseUrl + 'people')
    .then(function(response) {
      return response.json()
    })
    .then(function(people) {
      var peopleArray = people.results
      for (var i = 0; i < peopleArray.length; i++) {
        var person = people.results[i]

        var name = person.name
        var hairColor = person.hair_color
        var height = person.height

        var html = `
          <section>
            <h3>${name}</h3>
            <ul>
              <li>Hair: ${hairColor}</li>
              <li>Height: ${height}cm</li>
            </ul>
          </section>
        `
        characterSection.innerHTML += html
      }

      var nextUrl = people.next
      return nextUrl
    })
    .then(function(nextUrl) {
      return getMoreCharacters(nextUrl)
    })
    .then(function(anotherUrl) {
      getMoreCharacters(anotherUrl)
    })
}

var myName = 'Matt'

function getMoreCharacters(url) {
  return fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(morePeople) {
      console.log(morePeople)
      var characters = morePeople.results
      for (let i = 0; i < characters.length; i++) {
        var person = characters[i]
        var name = person.name
        var hairColor = person.hair_color
        var height = person.height

        var html = `
        <section>
          <h3>${name}</h3>
          <ul>
            <li>Hair:${hairColor}</li>
            <li>Height:${height}cm</li>
          </ul>
        </section>
      `
        characterSection.innerHTML += html
      }

      var nextUrl = morePeople.next
      return nextUrl
    })
}
