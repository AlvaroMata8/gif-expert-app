import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Piece', 'One punch'])

    console.log( categories )

    const onAddCategory = ( newCategory ) => {
   
        setCategories([ newCategory,...categories ])
        // setCategories(cat => [ ...cat, 'Dragon ball' ])
    }

    return (
        <>

            {/* {title} */}
            <h1> GifExpertApp </h1>

            {/* {Input} */}
                <AddCategory 
                    // setCategories={ setCategories }
                    onNewCategory= { value => onAddCategory( value ) }
                />
            {/* {Gif List} */}
            {/* <button onClick={ onAddCategory }>Add</button> */}
            <ol>
                { categories.map( (category) => {
                    return <li key={ category } >{ category }</li>
                }) }
            </ol>
                {/* {Gif item} */}


        </>
    );
}