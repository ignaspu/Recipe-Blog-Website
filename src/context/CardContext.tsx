import React, { ReactNode } from "react";
import { createContext, useEffect, useReducer, useState } from "react";

const CardContext = createContext<any>([]);

const CardActionTypes = {
  get_all: 'get all cards from db',
  add: 'add one new card',
  remove: 'remove one specific card',
  edit: 'edit one specific card'
};

const reducer = (state:any, action:any) => {
  switch (action.type) {
    case CardActionTypes.get_all:
      return action.data;
    case CardActionTypes.add:
      fetch(`http://localhost:8080/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(action.data)
      });
      return [...state, action.data];
    case CardActionTypes.remove:
      fetch(`http://localhost:8080/cards/${action.id}`, {
        method: "DELETE"
      });
      return state.filter((el: any) => el.id.toString() !== action.id.toString());
    case CardActionTypes.edit:
      fetch(`http://localhost:8080/cards/${action.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(action.data)
      });
      return state.map((el: any) => {
        if (el.id.toString() === action.id.toString()) {
          return { id: action.id, ...action.data };
        } else {
          return el;
        }
      });
    default:
      return state;
  }
}

const ContextProvider =  ({ children} : any) => {
  
  
  const [cards, setCards] = useReducer(reducer, []);

  useEffect(() => {
    fetch(`http://localhost:8080/cards`)
      .then(res => res.json())
      .then(data => setCards({
        type: CardActionTypes.get_all,
        data: data,
        id: {
          toString: function () {
            throw new Error("Function not implemented.");
          }
        }
      }));
  }, []);

  return (
    <CardContext.Provider value={{cards}}>
    {children}
  </CardContext.Provider>
  );
}

export { ContextProvider };
export default CardContext;