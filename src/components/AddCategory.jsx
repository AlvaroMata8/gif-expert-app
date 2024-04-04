import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target}) => {
        setInputValue( target.value );
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();

        // prevent send empty inputs
        if (newInputValue.length <=1) return;

        // setCategories( (categories) => [ inputValue, ...categories]);
        onNewCategory( newInputValue );
        // clean input after submit
        setInputValue('');
    }
  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Search gifs"
            value={ inputValue }
            onChange={  onInputChange }
        />
    </form>
  )
}
// Las props
