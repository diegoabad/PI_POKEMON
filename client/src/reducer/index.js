import { getPokemons } from "../actions";

const initialState = {
    pokemons = []
}


function rootReducer(state=initialState,action) {
    switch (action.type) {
        case "GET_POKEMONS":
        return {
            ...state,pokemons:action.payload
        }
    }
} 

export default rootReducer;