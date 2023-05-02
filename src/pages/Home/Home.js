import React from 'react';


import log from '../../src/favicion.png';
import gerenciamento from '../../src/gerenciamento.png';
import gerenciamento1 from '../../src/gerenciamento1.png';
import gerenciamento2 from '../../src/gerenciamento2.png';
import gerenciamento21 from '../../src/gerenciamento2.1.png';
import like from '../../src/like.png';
import like1 from '../../src/like1.png';

import './Home.css'
import './responsive.css'
import { Link } from 'react-router-dom';

export default function Home() {
  return (

    <div>
      <header>
        <div class="containerh">
          <div class="nomeph">
            <Link to='/' style={{ textDecoration: 'none' }}>
              <div class="nomeh">
                <img class='imageh' src={log} alt="logo"></img>
                <h2 class="logo1h">Finan</h2>
                <h2 class=" logo2h">Help</h2>
              </div>
            </Link>
          </div>
          <div class="loginh">
            <h2>Já tem uma conta?</h2>
            <Link to='/login'>
              <button class="buttonLogin" onClick={''} ><p>ENTRAR</p></button>
            </Link>

          </div>
        </div>
      </header>

      <div class='part1'>
        <img class='imgpt1' src={log} alt="logo"></img>
        <div class='lado'>
          <div class='paianun'>
            <h2 class="anun">Dificuldades para a organização</h2>
            <h2 class="anun">do seu negócio?</h2>
          </div>
          <div class="nome">
            <h2 class="logo1">Finan</h2>
            <h2 class=" logo2">Help</h2>
          </div>
          <h2 class="anun1">O controle na sua mão!!!</h2>
          <div class='button'>
            <Link to='/cadastro'>
              <button class="buttonCad" onClick={''} ><p>CADASTRE-SE</p></button>
            </Link>
          </div>
        </div>
      </div>

        <div class='part2'>
          <div class='bloco1'>
            <h2>Controle o seu estoque</h2>
            <div class='imagens'>
              <img class='imgpt1' src={gerenciamento} alt="logo"></img>
              <img class='imgpt1' src={gerenciamento1} alt="logo"></img>
              <img class='imgpt1' src={gerenciamento} alt="logo"></img>
            </div>
          </div>
          <div class='bloco2'>
            <h2>Gerencie seu lucro</h2>
            <div class='imagens'>
              <img class='imgpt2' src={gerenciamento2} alt="logo"></img>
              <img class='imgpt2' src={gerenciamento21} alt="logo"></img>
              <img class='imgpt2' src={gerenciamento2} alt="logo"></img>
            </div>
          </div>

        </div>

        <div class='part3'>

          <div class='img1'>
            <img class='imgpt3' src={like1} alt="logo"></img>
            <img class='imgpt31' src={like} alt="logo"></img>
            <img class='imgpt32' src={like1} alt="logo"></img>

          </div>
          <div class='text'>
            <h1>Para mais funcionalidades</h1>
            <h1>baixe a versão mobile em</h1>
            <h1>seu dispositivo móvel.</h1>
          </div>
          <div class='img2'>
            <img class='imgpt33' src={like1} alt="logo"></img>
            <img class='imgpt34' src={like1} alt="logo"></img>

          </div>
        </div>


      </div>

  );
}

