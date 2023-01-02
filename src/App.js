import React, { useState } from "react";
import "./style.css";
import Filters from './components/filters/Filters';
import Menu from './components/menu/Menu';
import { Context } from './context/Context';

export default function App() {
  const [context, setContext] = useState("All");
  return (
    <Context.Provider value={[context, setContext]}>
    <div>
      <div className="container">
        <Filters />
        <Menu />
      </div>
    </div>
    </Context.Provider>
  );
}
