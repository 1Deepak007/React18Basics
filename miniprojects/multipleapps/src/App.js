// import logo from './logo.svg';
// import './App.css';
import List from './components/List';
import MiniApps1 from './components/MiniApps1';
import Progressbar from './components/Progressbar';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="App">
      <h2 className='text-center underline text-2xl text-blue-600'>Mini projects</h2>

      <MiniApps1 />
      <Stopwatch />
      <Progressbar />
      <List />
    </div>
  );
}

export default App;
