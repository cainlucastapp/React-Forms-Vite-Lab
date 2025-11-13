import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [ item , setItem ] = useState({ category: 'Produce'});
  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({...item, id: crypto.randomUUID()});
  };

  function handleChange(event){
    setItem((previous) => {
      return {...previous, [event.target.name]: event.target.value };
    });
  }

  return (
    <form className="NewItem" onSubmit={ handleSubmit }>
      <label>
        Name:
        <input type="text" name="name" onChange={ handleChange } />
      </label>

      <label>
        Category:
        <select name="category" onChange={ handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;