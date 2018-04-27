function cocktail() {
    // console.log(liquor)
    if (liquor === 'RUM') {
      var url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum'
    } else {
      var url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila'
    }
  fetch(url)
  .then(response => response.json())
  .then(data => newDrink(data))
  }
  
  function newDrink(data) {
    // console.log(data)
    const imageContainer = document.querySelector('.drink-picture')
    const name = document.querySelector('.drink-name')
    const image = document.querySelector('.drink-image')
    let drinks = data.drinks
    
    randomNumber = Math.round(Math.random() * (drinks.length - 1) + 1)
    id = drinks[randomNumber].idDrink
    // console.log(id)
    console.log(id)
    recipe(id)
  
    return name.innerText = drinks[randomNumber].strDrink , image.src = drinks[randomNumber].strDrinkThumb
  }
  
  function recipe(id) {
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id
    console.log(url)
    fetch(url)
    .then(response => response.json()) 
    .then(data => addRecipe(data))
  }
  
  // function addRecipe(data) {
  //   const recipe = data.drinks
  //   document.querySelector('#one').innerText = drinks.strIngredient1 + ':' + drinks.strMeasure1
  //   document.querySelector('#two').innerText = drinks.strIngredient2 + ':' + drinks.strMeasure2
  //   document.querySelector('#three').innerText = drinks.strIngredient3 + ':' + drinks.strMeasure3
  //   document.querySelector('#four').innerText = drinks.strIngredient4 + ':' + drinks.strMeasure4
  //   document.querySelector('#five').innerText = drinks.strIngredient5 + ':' + drinks.strMeasure5
  //   document.querySelector('#six').innerText = drinks.strIngredient6 + ':' + drinks.strMeasure6
  //   document.querySelector('#eight').innerText = drinks.strIngredient7 + ':' + drinks.strMeasure7
  //   document.querySelector('.description').innerText = drinks.strInstructions
  // }
  
  function addRecipe(data) {
    console.log(data)
    let drinks = data.drinks[0]
    ingredients = document.querySelector('.ingredients') 
    if (ingredients.children.length > 0) {
    clear()
    }
    heading = document.createElement('h2')
    list = document.createElement('ul')
    description = document.createElement('p')
    
    
    heading.innerText = 'Recipe'
    console.log(data)
    console.log(drinks.strIngredient1)
    list.innerHTML = 
    `
    <li> ${drinks.strIngredient1} ${drinks.strMeasure1}</li>
    <li> ${drinks.strIngredient2} ${drinks.strMeasure2}</li>
    <li> ${drinks.strIngredient3} ${drinks.strMeasure3}</li>
    <li> ${drinks.strIngredient4} ${drinks.strMeasure4}</li>
    <li> ${drinks.strIngredient5} ${drinks.strMeasure5}</li>
    <li> ${drinks.strIngredient6} ${drinks.strMeasure6}</li>
    <li> ${drinks.strIngredient7} ${drinks.strMeasure7}</li>
    `
    description.innerText = drinks.strInstructions
    ingredients.appendChild(heading)
    ingredients.appendChild(list)
    ingredients.appendChild(description)
  }
  
  function clear () {
    heading.innerHTML = ''
    list.innerHTML = ''
    description.innerHTML = ''
  }