import React from 'react'
import Header from '../../components/Header'
import HeroesList from '../../components/HeroesList'
import { fetchItems } from '../../store/Items'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Modal from '../../components/ModalItem'

const HomePage = () => {
    const dispatch = useDispatch()
    const {modal} =  useSelector(state => state.modal)
    React.useEffect(() => {
        dispatch(fetchItems('search/k'))
    }, [dispatch])
    return (
        <>
            <Header />
            <HeroesList />
            {modal && <Modal />}
        </>
    )
}

export default HomePage
