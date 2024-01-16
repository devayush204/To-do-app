"use client"
import React, { useState } from 'react'
import TodoLists from './TodoLists';

const Container = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const addTodo = (event) => {
    setInputList(event.target.value);

  };

  const addingTodo = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList('');
  };

  const dltTodo = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arr, index) => {
        return index !== id;
      })
    })
  }


  return (
    <>
      <div className="main">
        <div className="todo-box">
          <h2>Write your things here:)</h2>
          <div className='input-box'>
            <input className='text'
              type="text"
              value={inputList}
              placeholder="Add todo"
              onChange={addTodo} />
            <button className='add-btn' onClick={addingTodo} >+</button>

          </div>
          <ol>
            {
              Items.map((items, index) => {
                return <TodoLists item={items} id={index} key={index} dltItems={dltTodo} />
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}

export default Container;
