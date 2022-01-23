import { useFetch } from '../../hooks/useFetch';

// Styles
import './Home.css'

// Components
import RecipeList from '../../components/RecipeList';

export default function Home() {
  const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes');


  return (
    <div>
      {isPending && <div className='loading'>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
