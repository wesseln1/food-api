// Fetches data from database
fetch("http://localhost:3000/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        buildDomComponent(parsedFoods)
    })

// Builds dom component
buildDomComponent = (foodArr) => {
  foodArr.forEach((food) => {

    let domString = `
      <div id="${food.id}" class="food-item">
        <h1>${food.name}</h1>
        <p>${food.type}</p>
        <p>${food.ethnicity}</p>
      </div>`
    renderToDom(domString)
  })
}

renderToDom = (domComponent) => {
  const container = document.querySelector("#container")
  container.innerHTML += domComponent
}