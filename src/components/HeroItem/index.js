import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './index.module.scss'
import {openModal} from '../../store/Interface'

const HeroItem = ({item}) => {
    const dispatch = useDispatch()
    return (
        <li className={styles.CardContainer} onClick={() => dispatch(openModal(item.id))}>
            <div className={styles.CardContent}>
                <img src={item.image?.url} alt={item.name} />
                <h3>{item.name}</h3>
            </div>
        </li>
    )
}

export default HeroItem
