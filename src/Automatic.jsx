import React, { useEffect, useState } from 'react'
function Automatic() {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 500);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    function toggleRunning() {
        setIsRunning(prevIsRunning => !prevIsRunning);
    }

    function reset() {
        setCounter(0);
    }

    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return (
            (minutes < 10 ? '0' + minutes : minutes) + ':' +
            (seconds < 10 ? '0' + seconds : seconds)
        );
    }

  return (
    <>
        <div className="container mt-5 border border-5 border-success shadow-lg rounded w-50 mx-auto" style={{backgroundColor:'white',padding: '20px'}} >
            <div className="app ">
        <h1 className='text-primary text-center'>Automatic Counter</h1>
        <br></br>
        <h1 className='text-info text-center'>{formatTime(counter)}</h1>
        <br></br>
            <div className='text-center'>
                {isRunning ? (
                    <button onClick={toggleRunning} className='btn btn-danger m-2'>Stop</button>
                ) : (
                    <button onClick={toggleRunning} className='btn btn-success m-2'>Start</button>
                )}
                <button onClick={reset} className='btn btn-warning m-2'>Reset</button>
            </div>
            </div>
        </div>
    </>
  )
}

export default Automatic