import React from 'react';
import Card from './Card';

import { connect } from 'react-redux';

const Sorteio = (props) => {

    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max-min)) + min;
    return ( 
        <>
            <Card title="Sorteio dos Números" purple>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
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

export default connect(mapStateToProps)(Sorteio);
