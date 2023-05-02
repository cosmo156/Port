

import './cadastro.css';
import './cadrespo.css'
import log from '../../src/favicion.png';
import { Link } from 'react-router-dom';

export default function Cadastro() {

    return (
        <div class='princ'>
            <header>
                <div class="containerc">
                    <div class="nomepc">
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <div class="nomec">
                                <img class='imagec' src={log} alt="logo"></img>
                                <h2 class="logo1c">Finan</h2>
                                <h2 class=" logo2c">Help</h2>
                            </div>
                        </Link>
                    </div>

                    <div class="loginc">
                        <h2>Já tem uma conta?</h2>
                        <Link to='/login'>
                            <button class='button1c' onclick="" ><p>ENTRAR</p></button>
                        </Link>
                    </div>
                </div>
            </header>

            <div class='part1c'>
                <img class='image2c' src={log} alt='image1'></img>
                <div class='logc'>
                    <div class='login1c'>
                        <h5 class='textc'>Registre sua conta</h5>
                        <input type='text' class="input1c" placeholder="Seu Nome"  ></input>
                        <input type='email' class="input2c" placeholder="Seu Email" ></input>
                        <input type='password' class="input3c" placeholder="Sua Senha" ></input>
                    </div>
                    <div class='buttonc'>
                        <Link>
                            <button ><p>CADASTRAR</p></button>
                        </Link>
                    </div>

                </div>

            </div>



        </div>
    );
}
