import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';
import Navbar from '../component/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet> 
        </div>
    );
};

export default Main;