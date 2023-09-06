import { useState } from "react"
import {GifGrid, AddCategory} from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])
  const onAddCategory = (newCategory) => {
    // categories.push(newCategory);
    if( categories.includes(newCategory) ) return
    setCategories([ newCategory, ...categories ])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory = { (event) => onAddCategory(event) }
      />
      
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {
          categories.map(category => (
            <GifGrid key={ category } category={ category }/>
          ))
        }
      </ol>
    </>
  )
}