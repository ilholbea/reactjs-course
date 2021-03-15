import React, { useState } from 'react';
import Dropdown from './components/Dropdown';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'Frontend javascript framework',
//   },
//   {
//     title: 'Why use React?',
//     content: 'Great success!',
//   },
//   {
//     title: 'How to use React?',
//     content: 'Drugs',
//   },
// ];

const options = [
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
  {
    label: 'Green',
    value: 'green',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};

export default App;
