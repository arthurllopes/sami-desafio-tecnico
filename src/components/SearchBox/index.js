import React from 'react'
import {RiSearchLine} from 'react-icons/ri'
import styles from './index.module.scss'

const SearchBox = () => {
    const [value, setValue] = React.useState('')
    return (
        <div className={styles.SearchContainer}>
            <input type="text" placeholder="Busque por nome ou poderes" value={value} onChange={(e) => setValue(e.target.value)} />
            <div className={styles.Icon}>
                <RiSearchLine />
            </div>
        </div>
    )
}

export default SearchBox
