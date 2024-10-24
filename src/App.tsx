// src/App.js
import React from 'react';
import TodoList from './components/ TodoList';
import "./index.css"

function App() {

  const handleChild = () => {
    console.log("child clicked")
  }

  const handleParent = () => {
    console.log("parent clicked")
  }

  return (
    <div className="app">
      <div onClick={handleParent}>
        <div onClick={handleChild}> Child </div>
      </div>
      {/* <TodoList /> */}
    </div>
  );
}

export default App;

// key dùng để đinh danh các phần tử trong 1 danh và cần cố đinh theo thời gian ( khi thao tác với mảng mà đặt key theo index ==> key không cố đinh)
// index của phần từ có thể thay đôi theo thời gian nên không sử dụng làm key được 


