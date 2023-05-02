import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../provedor/api';
import Cardestoque from './CardEst';
import './styles.css';
import "../Principal/prinrespo.css"
import log from '../../src/favicion.png';
import gerenciamento4 from '../../src/gerenciamento4.png';
import gerenciamento3 from '../../src/gerenciamento3.png';
import { Link } from 'react-router-dom';
import add from './Button.png'

function HomePage() {

    const location = useLocation();
    const [Estoque, setEstoque] = useState([]);

    //controla o retorno da busca dos Estoque
    const manipulaResposta = Response => {
        const ListaDeEstoque = [];
        Response.data.data.forEach(estoque => {
            const Est = estoque.attributes;   //pega os atributos do estoque ou informações do estoque como: curso, url, titulo e etc.
            Est.id = estoque.id; // pega o id do estoque que está sendo retornado e junta com as outas informações.
            ListaDeEstoque.push(Est) // p push empilha um conteudos, logo este estoque estará sempre no topo.
        })
        setEstoque(ListaDeEstoque)//   
    }
    //controla o ciclo de vida do componente, dizendo quando a busca deverá buscar novamente
    useEffect(() => {
        if (location.state == null) {
            api.get('/estoques').then(manipulaResposta)
        }
        else {

            api.get(`/estoques?filters[name][$startsWith] =${location.state.buscar}`).then(manipulaResposta)

        }

    }, [location.state])





    if (location.state != null) {
        console.log(location.state.buscar);
    }





    return (
        <div>
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

            <div id="home-container">
                {Estoque.map(estoque => <Cardestoque estoque={estoque} manipula={manipulaResposta} />)}
            </div>
            <Link to='/cadastrar' style={{ textDecoration: 'none' }}>
                <img src={add} className="add" alt='imag'></img>
            </Link>
        </div>
    );
}

export default HomePage;