import React from 'react';
import Card from './Card';

//responsavel por conectar o componente ao esado da aplicação
/**Vamos usar o connect para devolver um compomente que tem a ligação com o estado geral da minha aplicação o estado global */
import { connect } from 'react-redux';

const Media = (props) => {
    const {min, max} = props; 
    return ( 
        <>
            <Card title="Média dos Números" blue >
                <span>
                    <span>Resultado:</span>
                    <strong>{(max+min)/2}</strong>
                </span>
            </Card>
        </>
    );
}
 
const mapStateToProps = (state) =>{
    //mapeando os dados para dentro do meu compomente
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Media)
