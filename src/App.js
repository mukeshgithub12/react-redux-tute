// import logo from './logo.svg';
import './App.css';
import User from './components/Redux/User';
// import Home from './components/Home';
// import Profile from './components/Profile';
// import FunctionBase from './components/FunctionBase';
// import Toggle from './components/ToggleClass';
// import EventHandling from './components/EventHandling';
// import LifeCycle from './components/LifeCycle';
// import HooksMeathod from './components/Hooks/HooksMeathod';
// import Form from './components/Hooks/Form';
// import { Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <center><h1> Welcome  To React Redux  in  One Page</h1></center>
      {/* <Home/>
      <Profile/>
      <FunctionBase title="Function Base (props)" title2={{name:'Mukesh Kumar'}}/>
      <Toggle/>
      <EventHandling/>
      <LifeCycle/>
     <HooksMeathod/>
     <Form/> */}

     <User data={{name:'Mukesh Kumar',age:23}}/>
    </div>
  );
}

export default App;
