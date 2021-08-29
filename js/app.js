const searchInput = document.getElementById('searchInput')
const errorForWrongType = document.getElementById('errorForWrongType')
const mealsArea = document.getElementById('mealsArea')
const singleMealDetails = document.getElementById('singleMealDetails')
const mealsIteamList = document.getElementById('mealsIteamList')
const mealsCartCount = document.getElementById('mealsCartCount')
let mealsCart = []
// const singleMealDetails = document.getElementById('singleMealDetails')

//Button with Text Lenth Verify
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

//Create api link with input text
const selectApi = (searchInputValue) => {
    if (searchInputValue.length > 1) {
        const mealByName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`
        domDataShow(mealByName)
    }
    else {
        const mealsByLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputValue}`
        domDataShow(mealsByLetter)
    }
}

//Fetch Data From Api
const getApiData = async (apiLink) => {
    const res = await fetch(apiLink)
    const data = await res.json()
    return data

}

//Show Fetched all data 
const domDataShow = (mealLink) => {
    getApiData(mealLink).then(data => {
        mealsArea.textContent = ''
        data.meals.forEach(element => {
            const { idMeal, strMeal, strInstructions, strMealThumb } = element
            const singleMealCol = document.createElement('div')
            singleMealCol.classList.add('col')
            singleMealCol.innerHTML = `
                <div class="card">
                    <img src="${strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${strMeal}</h5>
                        <p class="card-text">${strInstructions.slice(0, 100)}</p>
                        <button onclick="singleMealApi('https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}')" class="btn btn-primary w-100" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight">
                            Click For More Details
                        </button>
                    </div>
                </div>
                `
            mealsArea.appendChild(singleMealCol)
        })
    })
}

//Show Fetched Single data 
const singleMealApi = (singleApiData) => {
    singleMealDetails.textContent = ''
    getApiData(singleApiData).then(data => {
        const { idMeal, strMeal, strInstructions, strMealThumb, strCategory, strArea } = data.meals[0]
        const singleDetailsCard = document.createElement('div')
        singleDetailsCard.classList.add('card')
        singleDetailsCard.innerHTML = `
            <img src="${strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${strMeal}</h5>
                <p class="card-text">${strInstructions.slice(0, 200)}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
                <p>Category: ${strCategory} / Area: ${strMeal}</p>
                <button onclick="addToCartList('https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}')"
    class="btn btn-primary w-100">Add To Cart</button>
            </div>
        `
        singleMealDetails.appendChild(singleDetailsCard)

    })
}

//Add meals to Array
const addToCartList = (product) => {
    getApiData(product).then(data => {
        const singelCardItem = data.meals[0]

        const Checkitem = mealsCart.findIndex(x => x.idMeal == singelCardItem.idMeal);
        if (Checkitem == -1) {
            singelCardItem.quantity = 1
            mealsCart.push(singelCardItem)
        }
        else {
            mealsCart[Checkitem].quantity = mealsCart[Checkitem].quantity + 1
        }
        mealsCartCount.innerText = mealsCart.length
    })


}

//Show Array Data
document.getElementById('viewCartList').addEventListener('click', () => {
    mealsIteamList.textContent = ''
    mealsCart.forEach(element => {
        const { idMeal, strMeal, strInstructions, strMealThumb, strCategory, strArea, quantity } = element
        const createIteam = document.createElement('div')
        createIteam.classList.add('card', 'mb-3', 'border-3', 'p-1', 'border-light')
        createIteam.innerHTML = `
            <div class="row">
                <div class="col-md-4">
                    <img src="${strMealThumb}" width="100px" class="img-fluid rounded-circle">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Item: ${strMeal}</h5>
                        <h5 class="text-primary">Quantity: ${quantity}</h5>
                        <p class="card-text"><small class="text-muted">Category: ${strCategory}, Area: ${strArea}</small>
                        </p>
                    </div>
                </div>
            </div>            
        `
        mealsIteamList.appendChild(createIteam)
    })
})