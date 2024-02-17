import { createContext, useEffect, useReducer, useState } from "react";

const UsersContext = createContext<any>([]);

const UsersActionTypes = {
  get_all: 'get all users from db',
  add: 'add one new card',
  remove: 'remove one specific card',
  edit: 'edit one specific card'
};

const reducer = (state:any, action:any) => {
  switch (action.type) {
    case UsersActionTypes.get_all:
      return action.data;
    case UsersActionTypes.add:
      fetch(`http://localhost:8080/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(action.data)
      });
      return [...state, action.data];
    case UsersActionTypes.remove:
      fetch(`http://localhost:8080/users/${action.id}`, {
        method: "DELETE"
      });
      return state.filter((el: any) => el.id.toString() !== action.id.toString());
    case UsersActionTypes.edit:
      fetch(`http://localhost:8080/users/${action.id}`, {
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

const UsersProvider =  ({ children} : any) => {
  
  
  const [users, setusers] = useReducer(reducer, []);

  useEffect(() => {
    fetch(`http://localhost:8080/users`)
      .then(res => res.json())
      .then(data => setusers({
        type: UsersActionTypes.get_all,
        data: data,
        id: {
          toString: function () {
            throw new Error("Function not implemented.");
          }
        }
      }));
  }, []);

  return (
    <UsersContext.Provider value={{users}}>
    {children}
  </UsersContext.Provider>
  );
}

export { UsersProvider };
export default UsersContext;