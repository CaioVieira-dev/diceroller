import { RollDiceContextProvider } from './contexts/RollDiceContext';
import { ScoreContextProvider } from './contexts/ScoreContext'
import { Page } from './Page'


function App() {

  return (
    <ScoreContextProvider>
      <RollDiceContextProvider>
        <Page />
      </RollDiceContextProvider>
    </ScoreContextProvider>
  );
}

export default App;
