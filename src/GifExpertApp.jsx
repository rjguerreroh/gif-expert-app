import { useState } from "react"
import {AddCategory} from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon ball'])
  const onAddCategory = () => {
    setCategories([ ...categories, 'Valorant']);
  }


  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories}/>
      
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {
          categories.map(category => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>
  )
}