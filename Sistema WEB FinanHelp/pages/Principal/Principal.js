import React from 'react';
import Grafico from './Grafico/Grafico';
import Calendar from './Calendario/Calendario';


import log from '../../src/favicion.png';
import gerenciamento4 from '../../src/gerenciamento4.png';
import gerenciamento3 from '../../src/gerenciamento3.png';


import './principal.css'
import './prinrespo.css'
import { Link } from 'react-router-dom';

export default function Principal() {
    return (

        <div class='containerp'>
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
            <div class='container'>
                <div class="campos">
                   <Grafico />
                    <Calendar />
                </div>
            </div>
        </div>

    );
}

