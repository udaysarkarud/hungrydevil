/* var lunch = {
    sandwich: 'turkey',
    drink: 'soda',
    chips: true,
    dessert: '000'


};

// This gets added after "lunch.chips" in the object


if (lunch.dessert == undefined) {
    console.log('soasdas')
}
else {
    lunch.dessert = lunch.dessert + 'pep'
    console.log(lunch.dessert)
}

let obj = objArray.map(boja => {
    if (boja.id == 0) {
        boja.dd = 'as'
    }
    else {
        boja.dd = boja.dd + 'as'
    }
})
 */

/* var objArray = [
    { id: 0, name: 'Object 0', otherProp: '321' },
    { id: 1, name: 'O1', otherProp: '648' },
    { id: 2, name: 'Another Object', otherProp: '850' },
    { id: 3, name: 'Almost There', otherProp: '046' },
    { id: 4, name: 'Last Obj', otherProp: '984' }
];

const select = objArray.find(x => x.id == 4)
console.log(select)

if (select == 0) {

} */



/*

let singleMealobj = data.meals[0]

if (singleMealobj.quantity == undefined) {
    singleMealobj.quantity = 1
}
else {
    singleMealobj.quantity = singleMealobj.quantity + 1
}

mealsCart.push(singleMealobj)
mealsCartCount.innerText = mealsCart.length
console.log(mealsCart) */




/* const checkItem = mealsCart.find(x => x.idMeal == singelCardItem.idMeal)
        if (checkItem == undefined) {
            singelCardItem.quantity = 1
            mealsCart.push(singelCardItem)
            console.log(mealsCart)
        }
        else {
            checkItem.quantity = checkItem.quantity + 1
            console.log(checkItem.quantity)
        }
 */


/* a = [
    { prop1: "abc", prop2: "qwe" },
    { prop1: "bnmb", prop2: "yutu" },
    { prop1: "zxvz", prop2: "qwrq" }];

index = a.findIndex(x => x.prop2 === "qwrq");
a[index].prop2 = a[index].prop2 + 'ddd'
console.log(a); */



/* if (data.meals[0][ing] != '' || data.meals[0][ing] == null) {
    const ingMeaObje = { [ing]: data.meals[0][ing], [mea]: data.meals[0][mea] }
    listOfIngMea.push(ingMeaObje)
    console.log(ingMeaObje)
}
else {
    continue;
}
 */



/* const listOfIngMea = []
for (let i = 1; i <= 20; i++) {
    const ing = 'strIngredient' + i
    const mea = 'strMeasure' + i

    if (data.meals[0][ing]) {
        const ingMeaObje = { [ing]: data.meals[0][ing], [mea]: data.meals[0][mea] }
        listOfIngMea.push(ingMeaObje)
        console.log(ingMeaObje)
    }
    else {
        continue;
    }
}
console.log(listOfIngMea) */

let ab = `ss `
let ac = ab + `con`
console.log(ac)