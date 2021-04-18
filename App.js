import logo from './logo.svg';
import './App.css';
import Function_example from './function_example';
import State_example from './state_exmaple';
import Condition_render from './condition_rendering';
import ListRender from './list_rendering';
import Form_handle from './form_handle';
import Fragment from './fragments';
//import Context from './context';
//import ComponentC from './componentC';
import Context from './context'
function App() {
  return (
    <div className="App">
     <Function_example name="ram"></Function_example>
     <State_example></State_example>
     <Condition_render/>
     <ListRender/>
     <Form_handle/>
     <Fragment/>
     <Context></Context>
    </div>
  );
}

export default App;
