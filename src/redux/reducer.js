const initialState = {
    myFavorites:[],
    allCharacters: [],
    
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return{
                ...state,
                allCharacters:[...state.allCharacters, action.payload],
                myFavorites: [...state.allCharacters, action.payload],
            };
        case 'REMOVE_FAV':
            return{
                ...state,
                myFavorites: [...state.myFavorites.filter((personaje)=>{return personaje.id !== Number(action.payload)})]
                /* (...) para crear una copia del array original garantiza que se mantenga inmutable y se devuelva un nuevo array en lugar de modificar el existente. */
            }
        
        case 'FILTER':
            return{
                ...state,//no modifico all characters
                myFavorites: [...state.myFavorites.filter((personaje)=> personaje.gender === action.payload.gender)]
                //copia el arreglo de todos los favoritos no lo muto y devuelvo el arreglo de filtrados
            }
        
        case 'ORDER':
            if(action.payload === 'A'){
                return{
                    ...state,
                    myFavorites:[...state.myFavorites.sort((a, b) => a.id - b.id)]
                }
            }

            if(action.orden === 'D'){
                return{
                    ...state,
                    myFavorites:[...state.myFavorites.sort((a, b) => b.id - a.id)]
                }
            }

        default:
            return state;
    }
};

export default rootReducer;
