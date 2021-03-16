import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'Frontend javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'Great success!',
  },
  {
    title: 'How to use React?',
    content: 'Drugs',
  },
];

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
  return (
    <div>
      <Header />

      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          onSelectedChange={setSelected}
          selected={selected}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
