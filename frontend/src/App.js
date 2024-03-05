import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import SubList from "./components/sub-list";
import UnitList from "./components/unit-list";
import TodoList from "./components/todo-list";
import SharedTodoList from "./components/shared-todo-list";
import Footer from "./components/footer";
import Data from "./data.json";
import ScrollToTop from "./components/scroll-to-top";
import { useState, useEffect } from "react";

export default function App() {
  document.title = "nith syllabus";
  const [query, setQuery] = useState("");
  const [branch, setBranch] = useState("al");
  const [year, setYear] = useState("al");
  const [visitCount, setVisitCount] = useState(null);
  let ckeys;
  if (localStorage.getItem("keys")) {
    ckeys = JSON.parse(localStorage.getItem("keys"));
  } else {
    ckeys = {};
    localStorage.setItem("keys", JSON.stringify(ckeys));
  }
  const [keys, setKeys] = useState(ckeys);

  const addKey = (s, u) => {
    let initkeys = JSON.parse(JSON.stringify(keys));
    s in keys ? (initkeys[s] = [...initkeys[s], u]) : (initkeys[s] = [u]);
    setKeys(initkeys);
  };
  const removeKey = (s, u) => {
    let initkeys = JSON.parse(JSON.stringify(keys));
    initkeys[s] = initkeys[s].filter((x) => {
      return u !== x;
    });
    if (initkeys[s].length === 0) delete initkeys[s];
    setKeys(initkeys);
  };
  useEffect(() => {
    localStorage.setItem("keys", JSON.stringify(keys));
  }, [keys]);
  useEffect(() => {
    let updateVisitCount = async () => {
      try {
        const response = await fetch(
          "https://api.api-ninjas.com/v1/counter?id=nithsyllabus&hit=true",
          {
            headers: {
              "X-Api-Key": "D6wFzRj9uQ+GbRJQucOWIQ==CWhtt8YQQTltqWNi",
            },
          }
        );
        const data = await response.json();
        setVisitCount(data.value);
      } catch (error) {
        console.error(error);
      }
    };
    updateVisitCount();
  }, []);

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <SubList
              data={Data}
              query={query}
              setQuery={setQuery}
              branch={branch}
              setBranch={setBranch}
              year={year}
              setYear={setYear}
              keys={keys}
            />
          }
        ></Route>
        <Route
          path="/sub/:id"
          element={
            <UnitList
              data={Data}
              keys={keys}
              addKey={addKey}
              removeKey={removeKey}
            />
          }
        ></Route>
        <Route
          path="/todolist"
          element={
            <TodoList
              data={Data}
              keys={keys}
              addKey={addKey}
              removeKey={removeKey}
            />
          }
        ></Route>
        <Route
          path="/list/:name/:keys"
          element={<SharedTodoList data={Data} />}
        ></Route>
      </Routes>
      <div style={{ height: "1em" }}></div>
      <Footer visitCount={visitCount} />
    </>
  );
}
