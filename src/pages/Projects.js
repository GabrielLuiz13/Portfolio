import styles from './Projects.module.css'
import Logo from "../imagens/Miniblogpng.png"
import Logo2 from "../imagens/Screenshot_App.png"
import Logo3 from "../imagens/Calculadora.png"
import Logo4 from "../imagens/Spotify.png"

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.coluna}>
        <div className={styles.projeto}>
          <img src={Logo} alt="MiniBlog" />
          <h3>MiniBlog</h3>
          <p>Miniblog feito todo em react. Foi usado o Banco de dados FireBase,</p>
          <p>possui validação de login e modificação dos posts.</p>
          <a href="https://gabrielluiz13.github.io/MiniBlog_React/" target='blank'>Link do Projeto</a>
        </div>
        <div className={styles.projeto}>
          <img src={Logo2} alt="AppOrçamentoPessoal" />
          <h3>App Orçamento Pessoal</h3>
          <p>Um app feito usando ES6 (JS) com programação orientada a objeto.</p>
          <p>Serve para registrar seus gastos, classificando-os em categorias</p>
          <a href="https://gabrielluiz13.github.io/AppOrcamentoPessoal/" target='blank'>Link do Projeto</a>
        </div>
      </div>
      <div className={styles.coluna}>
        <div className={styles.projeto}>
          <img src={Logo4} alt="MiniBlog" />
          <h3>Spotify</h3>
          <p>Site cópia da empresa Spotify, feito com Html, Css</p>
          <p>e Bootstrap.</p>
          <a href="https://gabrielluiz13.github.io/Spotify/" target='blank'>Link do Projeto</a>
        </div>
        <div className={styles.projeto}>
          <img src={Logo3} alt="Calculadora" />
          <h3>Calculadora</h3>
          <p>Calculadora simples e prática, com as funcionalidades feitas com </p>
          <p>JavaScript.</p>
          <a href="https://gabrielluiz13.github.io/Calculadora/" target='blank'>Link do Projeto</a>
        </div>
      </div>
    </div>
  )
}

export default Projects