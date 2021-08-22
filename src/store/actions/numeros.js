//aqui vai ter as funcções que representam o action creator

//Action Creator

/**Aqui eu poderia chamar o back-end(API) da aplicação se fosse o caso */
//export é para que eu possa acessar a função fora desse arquivo

import {
    NUM_MAX_ALTERADO,
    NUM_MIN_ALTERADO
} from './actionsTypes';

export function alterarNumeroMinimo(novoNumero) {
    return{
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero) {
    return{
        type: NUM_MAX_ALTERADO,
        payload:novoNumero
    }
}