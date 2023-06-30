import { ADD_FAV, REMOVE_FAV, ADD_CHAR, GET_CHARACTER_DETAIL, CLEAN_DETAIL, FILTER, ORDER, REMOVE_CHAR } from "./actions";

const initialState = {
    myFavorites:[],
    allCharacters: [],
    characters: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CHAR:
            return{
                ...state,
                characters: [action.payload, ...state.characters]
            }
        case REMOVE_CHAR:
            return{
                ...state,
                characters: state.characters.filter((character)=> character.id !== action.payload)
            }
        /* case ADD_FAV:
                return{
                    ...state,
                    myFavorites: [...state.myFavorites, action.payload],
                    allCharacters:[...state.allCharacters, action.payload],
                    // creo una copia de todos mis favoritos, en allCharacters
                }; */
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: action.payload,
                allCharacters: action.payload
            };
        
        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: action.payload,
                allCharacters: action.payload 
            };
        /* case REMOVE_FAV:
            return{
                ...state,
                myFavorites: [...state.myFavorites.filter((personaje)=>{return personaje.id !== Number(action.payload)})],
                allCharacters: [...state.allCharacters.filter((personaje)=>{return personaje.id !== Number(action.payload)})]
            } */
        /* (...)se usa para crear una copia del array original, garantiza que se mantenga inmutable 
        y se devuelva un nuevo array en lugar de modificar el existente. */
         
        case FILTER:
            
          if(action.payload !== 'AllCharacters' && action.payload !== 'Filter'){
            return{
                ...state,//no modifico all characters
                myFavorites: state.allCharacters.filter((personaje)=> personaje.gender === action.payload)
                //copia el arreglo de todos los favoritos no lo muto y devuelvo el arreglo de filtradosS
            }
          }else if(action.payload === 'Filter'){
            return{
                ...state,
                myFavorites: state.allCharacters,
            }
          }else{
            return{
                ...state,
                myFavorites: state.allCharacters,
            }
          }

          
           
        
        case ORDER:
            if(action.payload === 'A'){
                return{
                    ...state,
                    myFavorites: [...state.allCharacters.sort((a, b) => a.id - b.id)]
                }
            }

            if(action.payload === 'D'){
                return{
                    ...state,
                    myFavorites: [...state.allCharacters.sort((a, b) => b.id - a.id)]
                }
            }

            return{
                ...state,
            }

        default:
            return {...state};
    }
};

export default rootReducer;
