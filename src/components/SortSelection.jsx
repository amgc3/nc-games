import React, { useState } from 'react';

const SortSelection = ({ setSortTerm }) => {
  const [newSortTerm, setNewSortTerm] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      setSortTerm(newSortTerm);
  }
  return (
    <form className="category--selection-form" onSubmit={handleSubmit}>
      <label>Sort By: </label>
      <select
        value={newSortTerm}
        onChange={(event) => setNewSortTerm(event.target.value)}
      >
        <option disabled selected value>
          {' '}
          -- select an option --{' '}
        </option>
        <option value="title">Title</option>
        <option value="created_at">Created at</option>
        <option value="comments_count">Comments Count</option>
      </select>
      <button className="category-selection-button">Submit</button>
    </form>
  );
};

export default SortSelection;
