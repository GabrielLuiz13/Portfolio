import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Conhecimentos</h1>
      </div>
      <div className={styles.coluna}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" />
        <h2>ReactJs</h2>

      </div>
      <div className={styles.coluna}>
        <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
        <h2>JavaScript</h2>
      </div>
      <div className={styles.coluna}>
        <img src="https://cdn-icons-png.flaticon.com/512/3161/3161158.png" alt="" />
        <h2>SQL</h2>

      </div>
      <div className={styles.coluna}>
        <img src="https://logospng.org/download/css-3/logo-css-3-2048.png" alt="" />
        <h2>Css</h2>

      </div>
      <div className={styles.coluna}>
        <img src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png" alt="" />
        <h2>Python</h2>

      </div>
      <div className={styles.title}>
        <div className={styles.sub}>
          <p>Além dos citados acima, já estudei e tenho noções em Java, Php, Bootstrap e Html.</p>
          <p>Tenho conhecimento em Programação orientada a objetos e estou estudando UI/UX</p>
        </div>
      </div>


    </div>

  )
}

export default About