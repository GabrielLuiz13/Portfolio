import styles from './Home.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.coluna}>
        <h2>Olá, meu nome é Gabriel Luiz</h2>
        <p>Tenho 19 anos, sou apaixonado por tecnologia e programação.
          Sou desenvolvedor web, estudo e faço projetos desde o mês de maio de 2023.
          Já concluí alguns cursos, e atualmente estou focado em React/JavaScript.
        </p>
        <div className={styles.redes}>
          <ul>
            <li>
              <a href="https://github.com/GabrielLuiz13" target='blank'> <AiFillGithub /> </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gabriel-luiz-rojas-paiva-88258a274/" target='blank'> <AiFillLinkedin /> </a>
            </li>
            <li>
              <a href="https://wa.me/+5569984332336" target='blank'> <AiOutlineWhatsApp /> </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.coluna}>
        <img src="https://clarify.com.br/img-new/bg-logica-programacao.png" alt="Imagem de programação" />
      </div>
    </div>
  )
}

export default Home