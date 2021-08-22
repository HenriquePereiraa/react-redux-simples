import React from 'react';
import './Intervalo.css';
import Card from './Card';

import { connect } from 'react-redux';
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros';

const Intervalo = (props) => {

    return ( 
        <>
            <Card title="Intervalo de numeros" red>
                <div className="Intervalo">
                    <span>
                        <strong>Mínimo</strong>
                        <input type="number"  onChange={e => props.alterarMinimo(+e.target.value)}/>
                    </span>
                    
                    <span>
                        <strong>Máximo</strong>
                        <input type="number"  onChange={e => props.alterarMaximo(+e.target.value)}/>
                    </span>
                </div>
            </Card>
        </>
    );
}

const mapStateToProps = (state) => {
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const mapDispatchToProps = (dispatch) => {       
    //mapear os actions creator para dentro do componente
    return{
        alterarMinimo(novoNumero) {
            //action creator vai retornar a action
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);//agora essa actions sera passada para todos os reducers
        },

        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
