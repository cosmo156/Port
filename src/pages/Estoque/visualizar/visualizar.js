import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import log from '../../../src/favicion.png';
import gerenciamento4 from '../../../src/gerenciamento4.png';
import gerenciamento3 from '../../../src/gerenciamento3.png';
import api from '../../../provedor/api'

import { Link } from 'react-router-dom';

import './styles.css';
import '../styles.css'
import './styleresponsivo.css'

function VisualizarPage() {

    const params = useParams();

    const [estoque, setestoque] = useState({
        id: 0,
        url: '',
        name: '---',
        marca: '---',
        tamanho: '---'
    });

    useEffect(() => {
        console.log(params.id);
        //Busca vídeo
        api.get(`/estoques/${params.id}`).then((response) => {
            const novoestoque = response.data.data.attributes;
            novoestoque.id = response.data.id;
            setestoque(novoestoque);
        })
            .catch(e => console.log(e));



    }, [params.id])




    return (
        <div className='visu'>
            <header>
                <div class="containerp">
                    <div class="nomepp">
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <div class="nomep">
                                <img class='imagep' src={log} alt="logo"></img>
                                <h2 class="logo1p">Finan</h2>
                                <h2 class=" logo2p">Help</h2>
                            </div>
                        </Link>
                    </div>
                    <div class="Iconesp">
                        <div class='relatorio'></div>
                        <Link to='/principal' style={{ textDecoration: 'none' }}>
                            <img class='icon1p' src={gerenciamento3} alt="icon"></img>
                            <h2 class="text">Relatorio</h2>
                        </Link>
                        <div class='estoque'>
                            <Link to='/estoque' style={{ textDecoration: 'none' }}>
                                <img class='icon2p' src={gerenciamento4} alt="icon"></img>
                                <h2 class="text" >Estoque</h2>
                            </Link>
                        </div>

                    </div>
                </div>
            </header>
            <div className="visualizar-container">
                <img className='image' alt='imag' src={estoque.url}></img>

                <div id="visualizar-info">
                    <div className="visualizar-informa">
                        <h2 className='Tiinfo' >Informações do produto</h2>
                        <div className='informa'>
                           <p className='infotex' >NOME:</p>
                           <p className='infotex-r'>{estoque.name}</p>
                        </div>
                        <div className='informa'>
                           <p className='infotex' >MARCA:</p>
                           <p className='infotex-r'>{estoque.marca}</p>
                        </div>
                        <div className='informa'>
                           <p className='infotex' >TAMANHO:</p>
                           <p className='infotex-r'>{estoque.tamanho}</p>
                        </div>
                        <div className='informa'>
                           <p className='infotex' >COR:</p>
                           <p className='infotex-r'>{estoque.cor}</p>
                        </div>
                        
                        <div className='informa'>
                           <p className='infotex' >QUANTIDADE:</p>
                           <p className='infotex-r'>{estoque.quantidade} Uni.</p>
                        </div>
                        
                        <div className='informa'>
                           <p className='infotex' >PREÇO:</p>
                           <p className='infotex-r'>{estoque.preco} R$</p>
                        </div>
                        
                    </div>
                    
                    

                </div>
            </div>
        </div>
    );
}

export default VisualizarPage;