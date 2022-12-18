import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import SubList from './components/sub-list';
import UnitList from './components/unit-list';
import TodoList from './components/todo-list';
import SharedTodoList from './components/shared-todo-list';
import Footer from './components/footer';
import Data from './data.json';
import { useState, useEffect } from 'react';


export default function App(){
    const [query, setQuery] = useState("");
    let ckeys;
    if(localStorage.getItem("keys")){
      ckeys=JSON.parse(localStorage.getItem("keys"));
    }else{
      ckeys={};
      localStorage.setItem("keys", JSON.stringify(ckeys))
    }
    const [keys, setKeys] = useState(ckeys);
    
    const addKey=(s, u)=>{
      let initkeys=JSON.parse(JSON.stringify(keys));
      s in keys?initkeys[s]=[...initkeys[s], u]:initkeys[s]=[u];
      setKeys((initkeys))
    }
    const removeKey=(s, u)=>{
      let initkeys=JSON.parse(JSON.stringify(keys));
      initkeys[s] = initkeys[s].filter((x)=>{return u!==x})
      if(initkeys[s].length===0) delete(initkeys[s])
      setKeys((initkeys));
    }
    useEffect(()=>{
      localStorage.setItem("keys", JSON.stringify(keys))
    }, [keys])
    return(
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<SubList data={Data} query={query} setQuery={setQuery} keys={keys}/>}></Route>
        <Route path='/sub/:id' element={<UnitList data={Data} keys={keys} addKey={addKey} removeKey={removeKey}/>}></Route>
        <Route path='/todolist' element={<TodoList data={Data} keys={keys} addKey={addKey} removeKey={removeKey}/>}></Route>
        <Route path='/todolist/:keys' element={<SharedTodoList data={Data} addKey={addKey} removeKey={removeKey}/>}></Route>
      </Routes>
      <Footer/>
      </>
    )
}