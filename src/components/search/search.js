import React, { useState } from 'react';

function Search() {
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState('');
  const names = ['Leyla', 'Jojo', 'Ian', 'Daniel'];

  function onTextChange(event) {
    const { value } = event.target;
    setSuggestions([]);
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, 'i');
      const suggestedNames = names.sort().filter((name) => regex.test(name));
      setSuggestions(suggestedNames);
    }
    setText(value);
  }

  function renderSuggestions() {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((name, i) => (<li key={i}>{name}</li>))}
      </ul>
    );
  }


  return (
    <React.Fragment>
      <input type='text' value={text} onChange={onTextChange} />
      {renderSuggestions()}
    </React.Fragment>
  );
}

export default Search;
