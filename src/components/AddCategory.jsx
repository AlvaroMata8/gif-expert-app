import { useState } from "react";
import PropTypes from 'prop-types';

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
// propsTypes
AddCategory.propTypes = {
    onNewCategory: PropTypes.func
}
AddCategory.defaultProps = {
    onNewCategory: ''
}