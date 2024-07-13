// import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import LifeCycleMethod from './components/LifeCycleMethod';
import UseStateHook from './components/UseStateHook';
import PropsDrilling1 from './components/PropsDrilling1';
import UseEffectHook from './components/UseEffectHook';
import ConditionalRendering from './components/ConditionalRendering';

function App() {


  return (
    <div className="App ps-3 pe-3 border-black">
      <ClassComponent/>
      <FunctionalComponent />
      <LifeCycleMethod />
      <UseStateHook />
      <PropsDrilling1 />
      <UseEffectHook />
      <ConditionalRendering />
    </div>
  );
}

export default App;
