import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import Feed from './Feed';
import NotFound from './NotFound';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import Head from '../Helpers/Head';

const User = () => {
    const {data} = React.useContext(UserContext);

    return (
        <section className='container'>
            <Head title='Minha conta' />
            <UserHeader/>
            <Routes>
                <Route path="/" element={<Feed user={data.id} />}/>
                <Route path="postar" element={<UserPhotoPost/>}/>
                <Route path="estatisticas" element={<UserStats/>}/>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </section>
    )
}

export default User