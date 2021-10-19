import React from 'react'
import { useSelector } from 'react-redux'
import HeroItem from '../HeroItem'
import styles from './index.module.scss'

const HeroesList = () => {
    const {data, loading} = useSelector(state => state.items)
    if (loading) return <p>Carregando...</p>
    return (
        <ul className={styles.HeroesContent}>
            {data?.map((item) => (
                <HeroItem key={item.id} item={item}/>
            ))}
        </ul>
    )
}

export default HeroesList
