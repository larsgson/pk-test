import './App.css';
import { usfmText } from './data/Acts.1.short.usfm.js';
import { usfm2perf } from './helpers/usfm2perf';

function App() {
  console.log(usfmText)
  const checkPerf = usfm2perf(usfmText)
  console.log(checkPerf)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
