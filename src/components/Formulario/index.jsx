import React, { useState } from "react";
import InputMask from "react-input-mask";
import styles from './Formulario.module.css'

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0.0);

    const imcDaPessoa = () => {
        const alturaAoQuadrado = altura * altura;
        const imc = peso / alturaAoQuadrado;

        if (imc < 18.5) {
            return `De acordo com seu IMC de ${imc.toFixed(2)} você está abaixo do peso`;
        } else if (imc <= 24.9) {
            return `De acordo com seu IMC de ${imc.toFixed(2)} você está com o peso normal`;
        } else if (imc <= 29.9) {
            return `De acordo com seu IMC de ${imc.toFixed(2)} você está com sobrepeso`;
        } else if (imc <= 34.9) {
            return `De acordo com seu IMC de ${imc.toFixed(2)} você está com obesidade grau I`;
        } else if (imc <= 39.9) {
            return `De acordo com seu IMC de ${imc.toFixed(2)} você está com obesidade grau II`;
        } else {
            return `De acordo com seu IMC de ${imc.toFixed(2)} você está com obesidade grau III ou Mórbida`;
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Calculadora de IMC</h1>
            <form>
                <div className={styles.peso}>
                    <h3>Peso</h3>
                    <InputMask
                        mask="999kg"
                        type="text"
                        required
                        onChange={(evento) => setPeso(parseFloat(evento.target.value))}
                        placeholder="Digite seu Peso"
                    />
                </div>
                <div className={styles.altura}>
                    <h3>Altura</h3>
                    <InputMask
                        mask="9.99m"
                        type="text"
                        required
                        onChange={(evento) => setAltura(parseFloat(evento.target.value))}
                        placeholder="Digite sua altura"
                    />
                </div>
                <p className={styles.resultado}><span className={styles.span}>{imcDaPessoa()}</span></p>
            </form>
            <img src="http://bariatricaflorianopolis.com.br/wp-content/uploads/2017/06/Tabela-de-IMC-dos-Graus-de-obesidade.png" alt="" />
        </div>
    );
};

export default Formulario;
