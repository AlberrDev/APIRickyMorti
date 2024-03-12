import { NavLink, useParams } from "react-router-dom"
import { useFetch } from "../data/useFetch";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";

export const DetailPage = () => {
    const {id} = useParams();
    console.log(id,"recibida")
    const {data,isLoading} = useFetch(`https://rickandmortyapi.com/api/character/${id}`)
    const {personajeFav,setPersonajeFav,eliminar} = useContext(UserContext);
    const [favorito,setFavorito] = useState(false);
    const refer = useRef();
    console.log(personajeFav,"personajeFav")
    console.log(data)
    console.log(refer,"refer")
    useEffect(() => {
        
            let resul  = personajeFav.find((ele) => ele === id);
            console.log(resul,"resultado")
            if (resul == id ) {
                console.log("entra use")
                setFavorito(true)
            }else{
                setFavorito(false)
            }
        
       },[data])

       console.log(favorito,"actual")
 
   

   
  

  const onSubmit = (e) =>{
e.preventDefault();
const {name,value} =e.target 
console.log(e.target.checked,"checkeado")
if (e.target.checked) {
    if (personajeFav.find((ele) => ele === id)) {
        console.log("duplicado")

    }else{
        setPersonajeFav([...personajeFav,id])  
    }
    console.log(personajeFav)
} else if (e.target.checked == false){
    console.log(id,"actual")
    eliminar(id)
    setFavorito(false)
}
 
  }

    return (
      <>
         <h1>Detail Page</h1>
         {
            !isLoading ? (
                data ? (
                        <div>
                            <p>Nombre:{data.name}</p>
                            <p>Especies:{data.species}</p>
                            <p>Gender:{data.gender}</p>
                            <p>OriginName:{data.origin.name}</p>
                            <p>Name:{data.location.name}</p>
                            <p>Episodios:{data.episode.length}</p>
                            <img src={data.image} alt="" />
                            <br />
                            
                            <label htmlFor="">Favorito?</label>
                            {
                              favorito ? (
                                <input type="checkbox" name="favorito" ref={refer} onChange={onSubmit} checked  />
                              ) :(
                                <input type="checkbox" name="favorito" ref={refer} onChange={onSubmit}  />

                              ) 
                            }
                             
                           
                            
                           
                        </div>

                    ):(
                        ""
                    )
            ):(
                ""
            )
          
         }
      </>
    )
  }