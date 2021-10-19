import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.scss'
import ModalInfo from '../ModalInfo'
import {closeModal} from '../../store/Interface'

const Modal = () => {
    const {data} = useSelector(state => state.modal)
    const dispatch = useDispatch()
    function handleOutsideClick (event){
        if (event.target === event.currentTarget) dispatch(closeModal())
    }
    return (
        <div className={styles.ModalContainer} onClick={handleOutsideClick}>
            <div className={styles.ModalContent}>
                <button onClick={() => dispatch(closeModal())}>x</button>
                <div className={styles.HeroImage}>
                    <img src={data.image.url} alt={data.name} />
                </div>
                <ModalInfo />
            </div>
        </div>
    )
}

export default Modal
