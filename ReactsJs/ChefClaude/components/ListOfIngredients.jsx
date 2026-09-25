
export function ListOfIngredients(props) {
        <section>
                <h2>Ingredients on hand: </h2>
                <ul className="ingredients-list" aria-live="polite">
                    {props.ourSpices}
                </ul>
               {props.recipeShow === false && { props.len > 5 ? <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button id="generate-recipe-Btn" onClick={props.click}>Get a recipe</button>
                </div> : null}}

        </section>
}