import React from 'react';
import Accordion from './components/Accordion';

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

const App = () => {
  return (
    <div>
      <br />
      <Accordion items={items} />
    </div>
  );
};

export default App;
