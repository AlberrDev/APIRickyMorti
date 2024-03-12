
export const todoReducer = (initialState=[],action) => {

 

  switch (action.type) {
    
        
    case 'delete':
        console.log(initialState,"estado inicial redu")
        initialState = JSON.parse(localStorage.getItem('personajesFav'));
        let filtrado = initialState.filter(todo=>todo !== action.payload);
        console.log(filtrado,"filtrado interno")
        return filtrado
    default:
        return initialState;
  }
}
