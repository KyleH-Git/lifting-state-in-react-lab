const IngredientList = (props) => {

    const handleClick = (event) => {
        const newIngredient = props.availableIngredients.filter((ingredient) => {
        if(ingredient.name === event.target.name){
            return ingredient}
        });

        props.addToBurger(newIngredient[0]);
    }

    return <ul>
        {props.availableIngredients.map((ingredient, index) => {
            return <li style={{backgroundColor: ingredient.color}}key={index}>{ingredient.name}
            <button name={ingredient.name} onClick={handleClick}>+</button>
            </li>
        })}
    </ul>;
  };
  
  export default IngredientList;