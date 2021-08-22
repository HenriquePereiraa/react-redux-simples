//Aqui vai ser cofigurado todos os nossos reducers e apartir dele vamos gerar a store 

import { createStore, combineReducers } from "redux";

import numerosReducer from "./reducers/numerosReducer";

const reducers = combineReducers({
    
    numeros:numerosReducer
})


//função que vai confgurar um novo estado apartir dos reducers

function storeConfig() {
    //Essa funcção vai criar o estado da aplicação a partir dos reducers
    return createStore(reducers);
}


export default storeConfig  