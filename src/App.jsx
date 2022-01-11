import React,{createContext} from 'react';
import './App.css';
import ComA from './ComA'

const Firstname = createContext();

const App = () => {
  return (<>
    <Firstname.Provider value={"mini"}>
      <ComA/>
    </Firstname.Provider>
    </>
  );
};

export default App;
export {Firstname};
