import React from 'react';

import './Login.css'
import './loginrespo.css'
import log from '../../src/favicion.png';
import { Link } from 'react-router-dom';

export default function Login() {
    
    return (
        <div class='prinl'>
            <header>
                <div class="containerl">

                    <div class="nomepl">
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <div class="nomel">
                                <img class='imagel' src={log} alt="logo"></img>
                                <h2 class="logo1l">Finan</h2>
                                <h2 class=" logo2l">Help</h2>
                            </div>
                        </Link>
                    </div>
                    <div class="loginl">
                        <h2>Não tem uma conta?</h2>
                        <Link to='/cadastro'>
                            <button class='buttonl' onclick="" ><p>CADASTRE-SE</p></button>
                        </Link>
                    </div>
                </div>
            </header>

            <div class='part1l'>
                <img class='image2l' src={log} alt='image1'></img>
                <div class='logl'>
                    <div class='login1l'>
                        <h5 class='textl'>Login</h5>
                        <input type='email' class="input1l" placeholder="Seu Email"  ></input>
                        
                        <input type='password' class="input2l" placeholder="Sua Senha" ></input>
                    </div>
                    <div class='buttonl'>
                        <Link to='/principal'>
                            <button ><p>ENTRAR</p></button>
                        </Link>
                    </div>

                </div>

            </div>



        </div>
    );
}
