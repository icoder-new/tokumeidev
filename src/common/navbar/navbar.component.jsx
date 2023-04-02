import React from 'react';
import { Container } from '@mui/material';
// import logo from '../../assets/img/logoblack.png';
import logo from '../../assets/img/userImg.jpg';
import './navbar.css';
import { Link } from 'react-router-dom';
import Mobile from './mobilenav.component';

const Navbar = () => {
  return (
    <>
      <nav className='w-full flex items-center px-10 h-[90px] py-[20px] justify-between bg-white fixed shadow-md'>
        <Link to='/'>
          <div className='font-bold text-black text-2xl cursor-pointer flex items-center justify-between font-[Poppins]'>
            <img
              className='mobile w-[60px] h-[60px] rounded-full img_shadow'
              src={logo}
              alt=''
            />
            {/* <div className='sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]  flex items-center justify-center rounded-full select-none  bg-slate-900'>
            </div> */}
            <span className='sm:text-2xl md:text-3xl mr-1 ml-4 '>Tokumei</span>
          </div>
        </Link>
        <div className='flex items-center contentListNav '>
          <a className='mr-4 font-bold' href='/'>
            Главный
          </a>
          <a className='mr-4 font-bold' href='#about'>
            Обо мне
          </a>
          <a className='mr-4 font-bold' href='#project'>
            Проекты
          </a>
          <a className='mr-4 font-bold' href='#contact'>
            Контакт
          </a>
        </div>
        <Mobile />
      </nav>
    </>
  );
};

export default Navbar;
