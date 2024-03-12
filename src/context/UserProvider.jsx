
import { useEffect, useReducer, useState } from "react";
import { UserContext } from "./UserContext"
import { todoReducer } from "../data/todoReducer";

let inicial = JSON.parse(localStorage.getItem("personajesFav")) || [];

export const UserProvider = ({children}) => {

  const [personajeFav,setPersonajeFav] = useState(inicial);

  console.log(personajeFav,"useprivi")

 
   const init=()=>{
       return JSON.parse(localStorage.getItem('personajesFav')) || []
   }

  const [todos, dispatch] = useReducer(todoReducer, [],init) 

  const eliminar=(id)=>{
    const action={
        type: 'delete',
        payload: id
      }
    dispatch(action);

  } 




  useEffect(() => {
   localStorage.setItem("personajesFav",JSON.stringify(personajeFav))
  },[personajeFav])

  useEffect(() => {
    localStorage.setItem("personajesFav",JSON.stringify(todos))
    setPersonajeFav(todos)
   },[todos])

  return (
    <UserContext.Provider value={{personajeFav,setPersonajeFav,eliminar}}> 
        {children}
    </UserContext.Provider>
  )
}
