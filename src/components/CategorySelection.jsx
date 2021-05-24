import React, { useState } from 'react';

const CategorySelection = ({ setCategory }) => {
  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategory(newCategory);
  };

  return (
    <form className="category--selection-form" onSubmit={handleSubmit}>
      <label>Select Category: </label>
      <select
        value={newCategory}
        onChange={(event) => setNewCategory(event.target.value)}
      >
        <option value="strategy">Strategy</option>
        <option value="hidden-roles">Hidden Roles</option>
        <option value="dexterity">Dexterity</option>
        <option value="push-your-luck">Push Your Luck</option>
        <option value="roll-and-write">Roll & Write</option>
        <option value="deck-building">Deck Building</option>
        <option value="engine-building">Engine Building</option>
      </select>
      <button className="category-selection-button">Submit</button>
    </form>
  );
};

export default CategorySelection;
