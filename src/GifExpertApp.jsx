import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Piece', 'One punch'])

    console.log( categories )

    const onAddCategory = () => {
        setCategories([ ...categories, 'Dragon ball' ])
        // setCategories(cat => [ ...cat, 'Dragon ball' ])
    }

    return (
        <>

            {/* {title} */}
            <h1> GifExpertApp </h1>

            {/* {Input} */}

            {/* {Gif List} */}
            <button onClick={ onAddCategory }>Add</button>
            <ol>
                { categories.map( (category) => {
                    return <li key={ category } >{ category }</li>
                }) }
            </ol>
                {/* {Gif item} */}


        </>
    );
}