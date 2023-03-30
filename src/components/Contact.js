import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Contact() {
  return (
    <>
    <div>
        <div className=" flex justify-between">
        <Link to={"/"}> <img className=" w-14 m-4" src="/assests/word-file.png" alt="logo"/></Link>
        </div>
        <div className="  bg-hero bg-no-repeat bg-center bg-zinc-50 ">
                <h1 className='text-6xl ml-10 mt-4 font-extrabold'>Contact Us</h1>
                <div className=' ml-10 mt-4 text-xl text-gray-400'>
                    <p>Have a question, thought, suggestion or just want to get in touch? </p>
                    <p>Send us your feedback or ideas, we'd love to hear from you. </p>
                    <p>Submit your message via the form below or email us directly at <span className=' text-midnight'>tomaraaveg@gmail.com</span></p>
                </div>
                <div>
                    <img src='/assests/bg-1.svg' alt='bgImage' />
                </div>
            </div>

            <form className="mt-6 ml-10">
                <div className=' flex'>
                    <div className="mb-2">
                        <label>
                            <span className="text-gray-700 text-lg ">Your name</span>
                            <input type="text" name="name" className=" block px-6 py-2 mr-2 mt-2 border-2 border-gray-500 rounded-md "
                                placeholder="John cooks" required/>
                        </label>
                    </div>
                    <div className="mb-2">
                        <label>
                            <span className="text-gray-700 ml-2 text-lg">Email address</span>
                            <input name="email" type="email" className="block  ml-2  mt-2 px-6 py-2 border-2 border-gray-500 rounded-md" placeholder="john.cooks@example.com" required />
                        </label>
                    </div>
                </div>
                <div className="mb-2">
                    <label>
                        <span class="text-gray-700 text-lg">Message</span>
                        <textarea name="message" className=" block  mt-2 px-6 py-8 border-2 border-gray-500 rounded-md"
                            rows="5" cols={40}
                        ></textarea>
                    </label>
                </div>

                <div class="mb-6 ml-6 ">
                <button className="bg-white w-1/4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 hover:border-gray-800  rounded shadow m-1" >
                        Contact Us
                    </button>
                </div>
                <div></div>
            </form>
            
    </div>
    <Footer/>
    </>
  )
}
