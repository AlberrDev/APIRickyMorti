import { useFetch } from "../data/useFetch"
import { useCounter } from "../data/useCounter"
import { Link } from "react-router-dom";
export const InicioPage = () => {
    const {counter,setCounter,incrementa,decrementa} = useCounter(1);
    console.log(counter)
    const {data,isLoading} = useFetch(`https://rickandmortyapi.com/api/character/?page=${counter}`)
    let contadorInterno = 0;
    console.log(data)
    console.log(counter,"previo")


    return (
      <>
         <h1>Pagina de Inicio</h1>

        
         <div className="row d-flex flex-direction-column"> 
         {
            isLoading ? (
            ""
            ):(
               
                data ? (
                    
                    data.results.map(ele=>(
                        
                        
                     
                     <div className="col-3">
                        <p>{ele.name}</p>
                        <p>{ele.status}</p>
                        <p>{ele.species}</p>
                        <p>{ele.gender}</p>
                        <Link to={`/detail/${ele.id}`}><img src={ele.image} alt="" /></Link>
                        </div>
                       
                        
                       
                       
                    ))
                    
                ):(
                    ""
                )
               
            )
            
           
            
            
         }
        
         <button onClick={()=>incrementa(counter)} disabled={isLoading}>Pasar Pagina</button>
         {
            counter == 0 ? (
                ""
            ):
            (
                <button onClick={()=>decrementa(counter)}  disabled={isLoading}>Anterior</button>
            )
         }
         </div>
      </>
    )
  }