import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Recipe.css";
import React from "react";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, error, isPending } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h1 className="recipe_title">{recipe.title}</h1>
          <p className="recipe_time">{recipe.cookingTime}</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="recipe_method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
