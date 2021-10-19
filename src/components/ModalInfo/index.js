import React from 'react'
import { useSelector } from 'react-redux'
import styles from'./index.module.scss'
import {FcRating} from 'react-icons/fc'

const ModalInfo = () => {
    const {data} = useSelector(state => state.modal)

    const habilities = Object.entries(data.powerstats)
    console.log(habilities)

    if(!data) return null
    return (
        <div className={styles.HeroInfo}>
            <div className={styles.HeroBiography}>
                <h3>Informações gerais: </h3>
                <div>
                    <p>Nome: {data.biography.fullName || data.name}</p>
                    <p>Genêro: {data.appearance.gender}</p>
                </div>
            </div>
            <div className={styles.HeroOccupation}>
                <h3>Ocupação: </h3>
                <p>{data.work.occupation}</p>
            </div>
            <div className={styles.HeroPowerstats}>
                <h3>Habilidades: </h3>
                <div className={styles.Habilities}>
                    {habilities.map(([key, value]) => (
                        <div>
                            <p><strong>{key}: </strong> {value}/100</p>
                            <span>
                                <FcRating />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ModalInfo
