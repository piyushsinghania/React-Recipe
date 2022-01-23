import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// Styles
import './Search.css'

// components
import RecipeList from '../../components/RecipeList'

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  const url = `http://localhost:3000/recipes?q=${query}`;

  const { data: recipes, isPending, error } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes includeing "{query}"</h2>
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
