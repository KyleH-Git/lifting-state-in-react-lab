const BurgerStack = (props) => {
    const handleClick = (event) => {
        props.removeFromBurger(props.stack[event.target.id]);
    }

    return <ul>
        {props.stack.map((ingredient, index) => {
            return <li style={{backgroundColor: ingredient.color}} key={index}>{ingredient.name}
            <button id={index} onClick={handleClick}>X</button>
            </li>
        })}
    </ul>;
  };
  
  export default BurgerStack;