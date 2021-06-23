import Select from 'react-select';
import styles from '../../styles/Tabela.module.css';
import { GiSoccerBall } from 'react-icons/gi';

import { useState } from 'react';

export default function Tabela() {

    const [jogo, setJogo] = useState(undefined);
    const [gols, setGols] = useState([]);


    const options = [
        {
            value: {
                time1: 'SP1',
                logo1: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/sao-paulo.svg',
                time2: 'CHA1',
                logo2: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/chapecoense.svg'
            }, label: (
                <div className={styles.timeOption}>
                    <span>SP1</span>
                    <img src='https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/sao-paulo.svg' height="25px" width="25px" />
                    <span>X</span>
                    <img src='https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/chapecoense.svg' height="25px" width="25px" />
                    <span>CHA</span>
                </div>)
        },
        {
            value: {
                time1: 'SP2',
                logo1: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/sao-paulo.svg',
                time2: 'CHA2',
                logo2: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/chapecoense.svg'
            }, label: (
                <div className={styles.timeOption}>
                    <span>SP2</span>
                    <img src='https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/sao-paulo.svg' height="25px" width="25px" />
                    <span>X</span>
                    <img src='https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/chapecoense.svg' height="25px" width="25px" />
                    <span>CHA</span>
                </div>)
        },
    ];

    return (
        <form className={styles.form}>
            <Select
                name='dd_jogos'
                options={options}
                value={jogo}
                onChange={value => setJogo(value)}
            />

            {
                jogo && (
                    <div>
                        <div className={styles.placar}>
                            <p>{jogo.value.time1}</p>
                            <img src={jogo.value.logo1} height="25px" width="25px" />
                            <input />
                            X
                            <input />
                            <img src={jogo.value.logo2} height="25px" width="25px" />
                            <p>{jogo.value.time2}</p>
                        </div>
                        <div className={styles.placar}>
                            <p>{jogo.value.time1}</p>
                            <img src={jogo.value.logo1} height="25px" width="25px" />
                            <button type='button'
                                onClick={() => setGols([...gols, { time: jogo.value.time1, jogador: '' }])}>
                                <GiSoccerBall width={150} height={150} />
                            </button>
                            X
                            <button type='button'
                                onClick={() => setGols([...gols, { time: jogo.value.time2, jogador: '' }])}>
                                <GiSoccerBall width={150} height={150} />
                            </button>
                            <img src={jogo.value.logo2} height="25px" width="25px" />
                            <p>{jogo.value.time2}</p>
                        </div>

                        <ul>
                            {gols.map(gol => <li><p>{gol.time}</p><input></input></li>)}
                        </ul>


                    </div>
                )

            }

        </form>)


}