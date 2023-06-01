import styles from './Menu.module.css';
import MenuLink from './MenuLink';

export default function Menu() {


    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">Start</MenuLink>
                <MenuLink to="/about-me">About Me</MenuLink>
            </nav>
        </header>
    )
}
