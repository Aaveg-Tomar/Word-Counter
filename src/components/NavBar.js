import { Link } from 'react-router-dom';
import React from 'react';


export default function NavBar(){
    return(
        <>
        <div className=" flex justify-between">
            <img className=" w-14 m-4" src="/assests/word-file.png" alt="logo"/>
            <l1 className=" m-6 mt-7"> <a className=" bg-gradient-to-r from-purple text-black p-2  rounded-md  " ><Link to="/contact">Contact</Link></a></l1>
        </div>
        </>

    );
}