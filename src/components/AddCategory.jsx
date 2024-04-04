import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
    
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target}) => {
        setInputValue( target.value );
    };

    const onSubmit = (event) => {
        event.preventDefault();

        // prevent send empty inputs
        if (inputValue.trim().length <=1) return;

        setCategories( (categories) => [ inputValue, ...categories]);

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
