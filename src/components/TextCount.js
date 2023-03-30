import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";


export default function TextCount() {

    const ReExtraSpaces = () => {
        let words = text.split(' ');
        let joinedWords = '';
        words.forEach((elem) => {
            if (elem[0] !== undefined) {
                joinedWords += elem + " ";
            }
        })
        setText(joinedWords);
    };



    const [textareaFont, setTextareaFont] = useState("Arial");

    const handleFontChange = (font) => {
        setTextareaFont(font);
    }


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handleLoClick = () => {
        let newText1 = text.toLowerCase();
        setText(newText1);
    }

    const handleClear = () => {
        let newText1 = '';
        setText(newText1);
    }

    const handleOnch = (event) => {
        setText(event.target.value);

    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const [text, setText] = useState('');

    function getCount(str) {
        return str.split(' ').filter(function (num) {
            return num !== ''
        }).length;
    }


    let countChar = 0;
    let i = 0;
    function countVowels(str) {
        for (i = 0; i <= text.length; i++) {
            if (text.charAt(i).match(/[aeiouAEIOU]/)) {
                countChar++;

            }
        }
        return countChar;
    };

    let countSen = 0;
    let j = 0;
    function countSentence(str) {
        for (j = 0; j <= text.length; j++) {
            if (text.charAt(j).match(/[!.?]/)) {
                countSen++;

            }
        }
        return countSen;
    };


    return (
        <>
            <NavBar />
            <div>
                <div className=" shadow-2xl ml-10 mr-10 pb-5 rounded-2xl">
                    <h1 className=" text-4xl flex justify-center font-serif text-purple">Enter the Text</h1>
                    <div className=" flex flex-wrap justify-center space-x-8">
                        <div className=" flex shadow-md rounded-xl ">
                            <h1 className=" text-center text-gray-600 font-mono pt-1 m-3" >WORDS</h1>
                            <p className=" text-center text-3xl font-bold m-2">{getCount(text)}</p>

                        </div>
                        <div className=" flex shadow-md rounded-xl  " >
                            <h1 className=" text-center text-gray-600 font-mono pt-1 m-3">CHARACTERS</h1>
                            <p className=" text-center text-3xl font-bold m-2">{text.length - text.split(" ").length + 1}</p>
                        </div>
                        <div className=" flex shadow-md rounded-xl" style={{ marginLeft: "8px" }}>
                            <h1 className=" text-center text-gray-600 font-mono pt-1 m-3 ml-2" >VOWLES</h1>
                            <p className=" text-center text-3xl font-bold m-2">{countVowels(text)}</p>

                        </div>
                        <div className=" flex shadow-md rounded-xl ">
                            <h1 className=" text-center text-gray-600 font-mono pt-1 m-3 ml-2" >SENTENCES</h1>
                            <p className=" text-center text-3xl font-bold m-2">{countSentence(text)}</p>

                        </div>

                    </div>

                    <form className=" flex justify-center m-2 flex-wrap">
                        <textarea style={{ fontFamily: textareaFont }} value={text} onChange={handleOnch} className=" w-1/2 overflow-y-scroll p-1 border-2 border-gray-400 rounded-sm" placeholder="Enter Text Here" rows={13} cols={90}></textarea>
                        <button className=" h-3 m-1 border-b-gray-800" onClick={copyText}><img className=" w-4 hover:text" src="/assests/copy.png" alt="copyText" /></button>



                    </form>

                    <div className=" flex justify-center flex-wrap">
                        <div className=" flex justify-center flex-wrap ">
                            <h1 className=" font-bold mt-1">Select Font Style</h1>
                        </div>

                        <div className=" flex justify-center flex-wrap">
                            <button className="bg-white  hover:bg-gray-100 text-gray-800 font-semibold  px-4 border border-gray-400 hover:border-gray-800  rounded shadow m-1" onClick={() => handleFontChange('Rubik Moonrocks')}>Rubik Moonrocks</button>
                            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold  px-4 border border-gray-400 hover:border-gray-800  rounded shadow m-1" onClick={() => handleFontChange('Bebas Neue')}>Bebas Neue</button>
                            <button className="bg-white  hover:bg-gray-100 text-gray-800 font-semibold  px-4 border border-gray-400 hover:border-gray-800  rounded shadow m-1" onClick={() => handleFontChange("italic")}>Times New Roman</button>
                            <button className="bg-white  hover:bg-gray-100 text-gray-800 font-semibold  px-4 border border-gray-400 hover:border-gray-800  rounded shadow m-1" onClick={() => handleFontChange('Square Peg')}>Square Peg</button>
                        </div>

                    </div>

                    <div className=" flex flex-wrap justify-center ">

                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 hover:border-gray-800  rounded shadow m-1" onClick={handleUpClick}>
                            UPPERCASE
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 hover:border-gray-800  rounded shadow m-1" onClick={handleLoClick}>
                            lowercase
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 hover:border-gray-800  rounded shadow m-1" onClick={ReExtraSpaces}>
                            Remove Space
                        </button>


                        <button type="submit" onClick={speak} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 hover:border-gray-800  rounded shadow m-1">
                            <img className=" w-8" src="/assests/speak.png" alt="speak" />
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 hover:border-gray-800  rounded shadow m-1" onClick={handleClear}>
                            <img className=" w-8" src="/assests/clean.png" alt="clear Text" />
                        </button>






                    </div>

                </div>
                <div className=" m-5 mt-10 ml-10 mr-16">
                    <h1 style={{ fontFamily: 'Tiempos Headline' }} className=" text-3xl font-bold  text-purple ">About Word Counter</h1>
                    <div className=" flex flex-grow">
                        <p className="m-2 text-left text-xl text-gray-600 ">Word Counter is an easy to use online tool for counting words, characters, sentences, paragraphs and pages in real time.Get started by typing directly into the text area above or pasting in your content from elsewhere. Word and character counts will display at the top, any writing mistakes will be underlined </p>
                        <p className=" m-2  text-left text-xl text-gray-600">Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit. It also read the text for you . It convert the text to uppercase or lowercase </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}