/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <div className="navbar  ">
            <div className="navbar-start">
                <img className=' w-32 h-10' src={logo} alt="Netflix" />
            </div>

            <div className="navbar-end flex flex-row gap-10">
                <div className=' flex gap-3 justify-start items-center w-64 hover:w-96 duration-200 h-6  border-[2px] border-[#808080] rounded-3xl p-5 overflow-hidden'>

                    <div>
                        <FontAwesomeIcon className=' text-[#E70913]' icon={faMagnifyingGlass} />
                    </div>

                    <div className=' w-full'>
                        <input className=' w-full bg-[#000000] outline-none ' placeholder=' Search Movies ...'  name="" id="" />
                    </div>
                </div>
                <div className=' flex justify-center items-center w-40 h-6 p-6 bg-[#E70913] rounded-3xl overflow-hidden'>
                    <p className=' text-white font-semibold'>Create Account</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;