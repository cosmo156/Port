import { useNavigate } from 'react-router-dom';
import './card.css'
import lixeira from './excluir.png'
import api from '../../provedor/api';

export default function CardEst(props) {

    const navigate = useNavigate()



    return (
        <div>
            <img className='cv-img1' alt='imag' src={lixeira} onClick={()=> (api.delete(`/estoques/${props.estoque.id}`))&&  setTimeout(function(){
        window.location.reload()
    },500)}/>


            <div className="cv-container" onClick={() => navigate(`/visualizar/${props.estoque.id}`, { state: { estoque: props.estoque } })}>
                <img className='cv-img' src={props.estoque.url} alt='imag'/>
                <div className='cv-info'>
                    <div className='cv-pre' >
                        <p className='cv-preco'>{props.estoque.preco}$</p>
                    </div>
                    <div className='cv-quant' >
                        <p className='cv-quantidade'>Q:{props.estoque.quantidade}</p>
                    </div>
                    <p className='cv-nome'>{props.estoque.name}</p>
                    <p className='cv-marca'>MARCA: {props.estoque.marca}</p>
                    <p className='cv-cor'>COR: {props.estoque.cor}</p>
                    <p className='cv-tamanho'>TAM: {props.estoque.tamanho}</p>
                </div>
            </div>
        </div>
    );
}