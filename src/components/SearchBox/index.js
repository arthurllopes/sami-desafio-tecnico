import React from 'react'
import {RiSearchLine} from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { fetchItems } from '../../store/Items'
import styles from './index.module.scss'

const SearchBox = () => {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('')
    const timeoutRef = React.useRef(null)

    function handleFetch ({target}){
        setValue(target.value)

        clearTimeout(timeoutRef.current)

        timeoutRef.current = setTimeout(() => {
            const name = value.toLocaleLowerCase()
            dispatch(fetchItems(`search/${name}`))
        }, 1000)
    }
    return (
        <div className={styles.SearchContainer}>
            <input type="text" placeholder="Busque por nome ou poderes" value={value} onChange={handleFetch} />
            <div className={styles.Icon} onClick={handleFetch}>
                <RiSearchLine />
            </div>
        </div>
    )
}

export default SearchBox
