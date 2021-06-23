import cog from './assets/cog.svg';

import { Dice } from './components/Dice'

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Dice Roller</h2>
        <span><img src={cog} alt="Config" /></span>
      </header>
      <main>
        <button>Roll!</button>
        <div className="dices">
          <Dice />
          <Dice />
          <Dice />
          <Dice />
        </div>
        <div className="total">
          <span >16</span>
        </div>
      </main>

    </div>
  );
}

export default App;
