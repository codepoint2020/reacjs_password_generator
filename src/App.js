import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [password, setPassword] = useState("");

  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  const symbols = ['!', '#', '$', '%', '&', '(', ')', '*',('_')];

  let genChars = [];

  let randPassword = "";

  function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }
 

  const btnGenerate = () => {
    
    for (let i = 0; i < 3; i++) {
      const x = Math.floor(Math.random() * letters.length - 1);
      genChars.push(letters[x]);
    
    }

    for (let i = 0; i < 3; i++) {
      const x = Math.floor(Math.random() * numbers.length);
      genChars.push(numbers[x]);
    }

    for (let i = 0; i < 3; i++) {
      const x = Math.floor(Math.random() * symbols.length);
      genChars.push(symbols[x]);
    }

  
    const shuffledGenChars = shuffleArray(genChars);
    randPassword = shuffledGenChars.join('').trim();
    setPassword(randPassword);

  }



  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h3>Random Password Generator</h3>
        <h3><input type="text" value={password} placeholder="Click generate..."/></h3>
        <button onClick={btnGenerate}>Generate</button>
      </header>
    </div>
  );
}

export default App;
