import styles from '../Menu/Menu.module.css'
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <header className={styles.header}>
            <span>LOGO</span>
            <nav className={styles.nav}>
                <Link to={'/Portafolio/'}>Inicio</Link>

                <Link to={'/Portafolio/proyectos'}>Proyectos</Link>

                <Link to={'/portafolio/sobremi'}>SobreMi</Link>
                
            </nav>
           
        </header>
    )
}
export default Menu;