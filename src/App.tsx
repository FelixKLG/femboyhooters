import React, {useState} from 'react';

const App = () => {
    const [playing, setPlaying] = useState(false);

    function femboyButton() {
        const femboyArray = [
            "https://www.deviantart.com/search?q=femboy+nudes",
            "https://www.reddit.com/user/FemboyNudes/",
            "https://www.twitter.com/femboynudes"
        ]
        const index = Math.floor(Math.random() * femboyArray.length)
        const theFemboy = femboyArray[index]
        // eslint-disable-next-line no-restricted-globals
        open(theFemboy)
    }

    function MoanButton() {
        if (playing) return;
        setPlaying(true);

        const audio = new Audio('/moan.mp3');
        audio.loop = false;
        audio.play()
            .then(() => setPlaying(false));
    }

    return (
        <div>
            <div className='grid grid-rows-7 auto-rows-max min-h-screen'>
                <div className='w-full bg-pink-600'/>
                <div className='w-full bg-pink-300'/>
                <div className='w-full bg-white'/>
                <div className='w-full bg-blue-300'>
                    <div className='flex flex-auto flex-col auto-cols-max h-full justify-center items-center place-items-center'>
                        <button onClick={femboyButton}>
                            <span className='font-bold text-white hover:text-gray-200 text-3xl hover:drop-shadow umami--click--femboy-button'>
                                Femboy Hooters
                            </span>
                        </button>
                        <button onClick={MoanButton}>
                            <span className='font-bold text-white hover:underline underline-offset-2 umami--click--moan-button'>
                                Press me UwU
                            </span>
                        </button>
                    </div>
                </div>
                <div className='w-full bg-white'/>
                <div className='w-full bg-pink-300'/>
                <div className='w-full bg-pink-600'/>
            </div>
        </div>
    );
}

export default App;

