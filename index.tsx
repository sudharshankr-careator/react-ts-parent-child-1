import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

function App() {
  const [name, setName] = useState('');
  const [name1, setName1] = useState('Reddy');
  const submit = (event) => {
    event.preventDefault();
    setName1(name);
  };

  return (
    <div>
      <Hello name={name1} />
      <form
        action=""
        onSubmit={(event) => {
          submit(event);
        }}
      >
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

render(<App />, document.getElementById('root'));

render(<App />, document.getElementById('root'));
