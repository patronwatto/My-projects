import React from "react"
import { Recipe } from "./Recipe.jsx"
import { ListOfIngredients } from "./ListOfIngredients.jsx"

export default Main() {
    const [ingredients, setIngredients] = React.useState([])

    const ingredientsList = ingredients.map(item => <li>{item}</li>)
    
    // function handleAddIngredient(e) {
    //     e.preventDefault()
    //     const ingr = document.getElementById('ingr-input')
    //     // const ingrVal = ingr.value.trim()
    //     // ingredients.push(ingrVal)
    //     // ingr.value = ""
    //     const formData = new FormData(e.currentTarget)
    //     const newIngr = formData.get('ingr-input')
    //     setIngredients(prev => [...prev, newIngr])
    //     ingr.value = ""
    //     e.currentTarget.reset()
    // }

    function submit(formData) {
        const ingr = formData.get('ingr-input')
        setIngredients(prev => [...prev, ingr])
    }

    const [recipeShown, setRecipeShown] = React.useState(false)

    function showRecipe() {
        setRecipeShown(true)
    }

    return(
        <main>
            <form action={submit} className="add-ingredient-form"
            onSubmit="">
                <input type="text" id="ingr-input" 
                name="ingr-input" placeholder="e.g garlic..."     
                aria-label="Enter new ingredient" required
                />
                <button type="submit" id="add-ingr-btn"
                >Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <ListOfIngredients 
                ourSpices={ingredientsList}
                recipeShow={recipeShown}
                len={ingredients.length}
                click={showRecipe}
                /> 
            } 

            {recipeShown === true && <Recipe /> }    
        </main>
    )
}

