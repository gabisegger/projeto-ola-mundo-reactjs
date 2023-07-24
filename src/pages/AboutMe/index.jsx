import PostModel from "../../components/PostModel";
import coverPhoto from "../../assets/sobre_mim_capa.png";
import styles from "./AboutMe.module.css";
import photoAboutMe from "../../assets/sobre_mim_foto.png";

export default function AboutMe() {
  return (
    <PostModel
      coverPhoto={coverPhoto}
      title = "Sobre mim"
    >
      <h3 className={styles.subtitle}>
        Olá, eu sou o Antônio!
      </h3>

      <img 
        src={photoAboutMe}
        alt="Foto do Antônio Evaldo sorrindo"
        className={styles.photoAboutMe}
      />

      <p className={styles.paragraph}>
        Oi, tudo bem? Eu sou instrutor de Front-end na Alura e estou feliz de te ver por aqui.
      </p>

      <p className={styles.paragraph}>
        Minha história com programação começou no Instituto Federal do Piauí (IFPI), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
      </p>

      <p className={styles.paragraph}>
        No ensino superior, escolhi cursar Engenharia Elétrica na Universidade Federal do Piauí (UFPI). Lá eu consegui entrar no PET (Programa de Educação Tutorial), um grupo acadêmico que contribui de diversas formas para o curso. Lá eu tive a oportunidade de estudar desenvolvimento web para ser um dos mantenedores do site deles. 
      </p>

      <p className={styles.paragraph}>
        Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.</p>

      <p className={styles.paragraph}>
        E foi enquanto eu estava no PET que decidi procurar um estágio em desenvolvimento web. Eu encontrei uma vaga na Alura para o Scuba Team e percebi que ela aliava duas paixões minhas: programação e educação. Para minha felicidade, fui escolhido para fazer parte do time.
      </p>

      <p className={styles.paragraph}>
        Desde então, tem sido aprenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!
      </p>


    </PostModel>
  )
}
