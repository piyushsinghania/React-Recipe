import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Create.css'

export default function Create() {  
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientsInput = useRef(null)
  const history = useHistory()
  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')
  
  // Handle Add ingredients
  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim();

    if(ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing]);
    }
    setNewIngredient('');
    ingredientsInput.current.focus();
  }

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, method, ingredients, cookingTime: cookingTime + ' minutes' })
  }

  // Redirect the user when we get the response
  useEffect(() => {
    if (!data) return;
    history.push("/")
  }, [data])
 
  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Recipe title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input 
              type="text"
              onChange={(e) => {setNewIngredient(e.target.value)}}
              value={newIngredient}
              ref={ingredientsInput}
            />
            <button onClick={handleAdd} className="btn">Add</button>
          </div>
        </label>
        <p>Current Ingredients: {ingredients.map((i) => <em key={i}> {i}, </em>)} </p>

        <label>
          <span>Recipe Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input 
            type="number" 
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required 
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  )
}