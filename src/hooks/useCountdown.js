import { useState, useEffect, useRef } from 'react';

export const useCountdownSeconds = (initialSeconds = 0) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isCounting, setIsCounting] = useState(false);
    const intervalRef = useRef();

    const start = () => {
        setIsCounting(true);
        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000); // 1 second in milliseconds
    };

    const stop = () => {
        setIsCounting(false);
        clearInterval(intervalRef.current);
    };

    const reset = () => {
        stop();
        setSeconds(initialSeconds);
    };

    useEffect(() => {
        return () => {
            stop();
        };
    }, [seconds]);

    return [isCounting, seconds, start, stop, reset];
};



export const useCountdownMinutes = (initialMinutes = 0) => {
    const [minutes, setMinutes] = useState(initialMinutes);
    const intervalRef = useRef();

    const start = () => {
        intervalRef.current = setInterval(() => {
            setMinutes((prevMinutes) => prevMinutes - 1);
        }, 60000); // 1 minute in milliseconds
    };

    const stop = () => {
        clearInterval(intervalRef.current);
    };

    const reset = () => {
        stop();
        setMinutes(initialMinutes);
    };

    useEffect(() => {
        return () => {
            stop();
        };
    }, []);

    return [minutes, start, stop, reset];
};





export const useCountdownHours = (initialHours = 0) => {
    const [hours, setHours] = useState(initialHours);
    const intervalRef = useRef();

    const start = () => {
        intervalRef.current = setInterval(() => {
            setHours((prevHours) => prevHours - 1);
        }, 3600000); // 1 hour in milliseconds
    };

    const stop = () => {
        clearInterval(intervalRef.current);
    };

    const reset = () => {
        stop();
        setHours(initialHours);
    };

    useEffect(() => {
        return () => {
            stop();
        };
    }, []);

    return [hours, start, stop, reset];
};