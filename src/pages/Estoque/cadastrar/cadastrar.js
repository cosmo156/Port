import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import log from '../../../src/favicion.png';
import gerenciamento4 from '../../../src/gerenciamento4.png';
import gerenciamento3 from '../../../src/gerenciamento3.png';
import fab from './fab.jpg'
import add from '../Button.png'

import { Link } from 'react-router-dom';

import './styles.css';
import '../styles.css'
import './styleresponsivo.css'


function VisualizarPage(props) {

    const params = useParams();


    return (
        <div className='cad'>
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
            <div className="cad-container">
                <img className='image' src={fab} frameborder="0" allowfullscreen></img>

                <div id="cad-info">
                    <div className="cad-informa">

                        <h2 className='Tiinfo' >Cadastrar produto</h2>

                        <form className='form1'>
                            <p className='infoi'>Nome:</p>
                            <input type='text' placeholder='EX: Tênis' className='input1'></input>
                            <p className='infoi'>Marca:</p>
                            <input type='text' placeholder='EX: Nike' className='input1'></input>
                            <p className='infoi'>Fornecedor (opcional):</p>
                            <input type='text' placeholder='EX: Fulano' className='input1'></input>
                        </form>

                    </div>
                </div>

            </div>

            <form className='form2'>
                <div>
                    <p className='infoi2'>Custo:</p>
                    <input type='number' placeholder='Custo: EX: 6,99' className='input2'></input>
                </div>
                <div>
                    <p className='infoi2'>Preço:</p>
                    <input type='number' placeholder='Preço: EX: 9,99' className='input2'></input>
                </div>
                <div>
                    <p className='infoi2'>Cor:</p>
                    <input type='text' placeholder='Cor: EX: branco' className='input2'></input>
                </div>
                <div>
                    <p className='infoi2'>Tamanho:</p>
                    <input type='number' placeholder='Tamanho: EX: 40' className='input2'></input>
                </div>
                <div>
                    <p className='infoi2'>Código:</p>
                    <input type='number' placeholder='Código: EX: 01115' className='input2'></input>
                </div>

            </form>
            <button className='add1' onClick={() => { alert('consolelog') }}><img className='add' src={add}></img></button>

        </div>
    );
}

export default VisualizarPage;