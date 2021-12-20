import './App.css';
import Evento from './components/Evento';

function App() {
   return (
    <div className="App">
      <h1>Teste de evento</h1>
      <Evento numero={1}/>
      <Evento numero={2}/>
    </div>
  );
}

export default App;
