import React from 'react'
import { useSelector } from 'react-redux'
import HeroItem from '../HeroItem'
import styles from './index.module.scss'

const HeroesList = () => {
    const {data, loading} = useSelector(state => state.items)
    if (loading) return <p>Carregando...</p>
    const sliced = data.slice(0, 24)
    return (
        <ul className={styles.HeroesContent}>
            {sliced?.map((item) => (
                <HeroItem key={item.id} item={item}/>
            ))}
        </ul>
    )
}

export default HeroesList
