import SearchBox from '../../components/SearchBox'
import styles from './index.module.scss'

const Header = () => {
    return (
        <header className={styles.HeaderContainer}>
            <SearchBox />
        </header>
    )
}

export default Header
