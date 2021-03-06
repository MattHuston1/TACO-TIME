const baseUrl = 'https://swapi.co/api/'
const characterSection = document.querySelector('.characters')
const charPics = ['./Star-Wars-Pics/luke.jpg', './Star-Wars-Pics/C3PO.jpg', './Star-Wars-Pics/R2D2.jpg', './Star-Wars-Pics/darth-vader.jpg', './Star-Wars-Pics/leia.jpg', './Star-Wars-Pics/Owen-OP.jpg', './Star-Wars-Pics/Beru.png', './Star-Wars-Pics/r5-d4.jpg', './Star-Wars-Pics/Biggs.png', './Star-Wars-Pics/Obiwankenobi.jpg']
const pickUpLines = ["Unlike Han, I won't shoot first", "Nice buns, Princess", "You're the Obi-Wan for me", "You've been looking for love in Alderaan places", "Size matters not", "Damn girl you R2 fine, if you're lucky I'll give your the D2", "Let's get Hoth and heavy", "Jedi in the Streets, Sith in the Sheets", "R4 is red, R2 is blue. If I was the force, I'd be in you."]


function onClick(event) {
  event.preventDefault()
  if(event.target.textContent === "Nope") {
    event.target.textContent = "X"
    event.target.classList.add('nope')
  } else if(event.target.textContent === "Yes, please!") {
    event.target.textContent = "OK!"
    event.target.classList.add('yup')
  }
}

fetch(baseUrl + 'people')
  .then(function(response) {
    return response.json()
  })
  .then(function(people) {
    console.log(people.results);
    var peopleArray = people.results

    for (var i = 0; i < peopleArray.length; i++) {
      var person = people.results[i]

      var name = person.name
      var hairColor = person.hair_color
      var height = person.height
      var eyes = person.eye_color
      var birthYear = person.birth_year
      var gender = person.gender

      var html = `
        <section>
          <h3>${name}</h3>
          <img src="" alt=""/>
          <ul>
            <li>Hair: ${hairColor}</li>
            <li>Height: ${height}cm</li>
            <li>Eye Color: ${eyes}</li>
            <li>Birth Year: ${birthYear}</li>
            <li>Gender: ${gender}</li>
            <li>Pickup Line: "${pickUpLines[i]}"
          </ul>
          <div>
            <button>Nope</button>
            <button>Yes, please!</button>
          </div>
        </section>
      `
      characterSection.innerHTML += html
    }
    let selectButtons = document.querySelectorAll('button')
    let images = document.querySelectorAll('img')

    for(let i=0; i<10; i++) {
      images[i].src = charPics[i]
      selectButtons[i].addEventListener('click', onClick)
    }
    for(let i=10; i<selectButtons.length; i++) {
      selectButtons[i].addEventListener('click', onClick)
    }
  })
