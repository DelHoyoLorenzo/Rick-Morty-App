import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAL";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFav = (character) => {//PORQ NO VA ASYNC ACA: async en la declaración de la función addFav, lo cual es innecesario ya que Redux Thunk manejará la asincronía por ti. Puedes eliminar la palabra clave async y dejar que Redux Thunk se encargue de envolver tu función de acción asincrónica.
  /* return{
        type: ADD_FAV,
        payload: character
    } */
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
      let response = await axios.post(endpoint, character);
      let data = response.data;
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    };
  } catch (error) {}
};

export const removeFav = (id) => {
  /* return{
        type: REMOVE_FAV,
        payload: id
    } */
  try {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
      let response = await axios.delete(endpoint);
      let data = response.data;
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    };
  } catch (error) {}
};

export function filterCards(gender) {
  return {
    type: "FILTER",
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: "ORDER",
    payload: order,
  };
}
