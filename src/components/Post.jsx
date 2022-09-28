import styles from './Post.module.css';

export function Post(){
  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/fernandafons.png"/>
          <div className={styles.authorInfo}>
            <strong>Maria</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Faça Galera</p>
        <p>Acabei de subir mais um projeto</p>
        <p>Fiz com a Rocketseat</p>
        <p><a href="">#novoprojeto</a></p>
      </div>
    </article>
    )
};