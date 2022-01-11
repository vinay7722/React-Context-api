import React,{createContext} from 'react';
import './App.css';
import ComA from './ComA'

const Firstname = createContext();
const Lastname = createContext();

const App = () => {
  return (<>
    <Firstname.Provider value={"mini"}>
    <Lastname.Provider value={'lastname'}>
      <ComA/>
    </Lastname.Provider>
    </Firstname.Provider>
    </>
  );
};

export default App;
export {Firstname,Lastname};
