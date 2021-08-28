const searchInput = document.getElementById('searchInput')
const errorForWrongType = document.getElementById('errorForWrongType')
const mealsArea = document.getElementById('mealsArea')
const singleMealDetails = document.getElementById('singleMealDetails')
// const singleMealDetails = document.getElementById('singleMealDetails')
// const singleMealDetails = document.getElementById('singleMealDetails')
// const singleMealDetails = document.getElementById('singleMealDetails')


document.getElementById('searchBtn').addEventListener('click', () => {
    if (searchInput.value.length == 0) {
        errorForWrongType.classList.remove('d-none')
    }
    else {
        errorForWrongType.classList.add('d-none')
        selectApi(searchInput.value)
    }
    searchInput.value = ''
})

const selectApi = (searchInputValue) => {
    if (searchInputValue.length > 1) {
        const mealByName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`
        getApiData(mealByName)
    }
    else {
        const mealsByLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputValue}`
        getApiData(mealsByLetter)
    }
}

const getApiData = async (apiLink) => {
    const res = await fetch(apiLink)
    const data = await res.json()
    domDataShow(data)

}

const domDataShow = (searchapiData) => {

    mealsArea.textContent = ''
    searchapiData.meals.forEach(element => {
        const { idMeal, strMeal, strInstructions, strMealThumb } = element
        const singleMealCol = document.createElement('div')
        singleMealCol.classList.add('col')
        singleMealCol.innerHTML = `
        <div class="card">
            <img src="${strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${strMeal}</h5>
                <p class="card-text">${strInstructions.slice(0, 100)}</p>
                <button onclick="singleMealApi('${idMeal}')" class="btn btn-primary w-100" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">
                    Click For More Details
                </button>
            </div>
        </div>
    `
        mealsArea.appendChild(singleMealCol)
    });
}

const singleMealApi = (singleApiData) => {
    const singleMealByID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${singleApiData}`
    console.log(singleMealByID)
}