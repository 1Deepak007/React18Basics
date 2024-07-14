import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import InVoice from './components/InVoice';
import UseRefHook from '../../application1/src/components/UseRefHook';
import NavigationBar from './components/subcomponents/NavigationBar';



function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/profile/:username' element={<Profile />}/>     {/* http://localhost:3000/profile/deepak */}
        <Route path='/invoice' element={<InVoice />}/>     {/* http://localhost:3000/invoice */}
        <Route path='*' element={
          <main>
            <p>There's no such route found</p>
          </main>
        }/>     {/* if no matching route then this will trigger */}
      </Routes>
    </div>
  );
}

export default App;
