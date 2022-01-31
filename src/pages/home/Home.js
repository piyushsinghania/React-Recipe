import { projectFirestore } from '../../firebase/config';
import { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

// Styles
import './Home.css'

// Components
import RecipeList from '../../components/RecipeList';

export default function Home() {
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    projectFirestore.collection('recipes').get().then((snapshot) => {
        if (snapshot.empty) {
          setIsPending(false);
          setError('No recipes to load')
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setRecipe(results);
          setIsPending(false);
        }
      }).catch((err) => {
        setError(err.message);
        setIsPending(false);
      })
  }, [])

  return (
    <div className={`home ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && <RecipeList recipes={recipe} />}
    </div>
  );
}
