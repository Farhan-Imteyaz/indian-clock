import { useEffect, useState } from "react";

let CurrentTime = () => {
    
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }

    }, []);

    return (
    <p className="border border-dark p-3 rounded d-inline-block bg-warning">This is the the current time: {time.toLocaleDateString()} -  
    
    {time.toLocaleTimeString()}</p>
);


};

export default CurrentTime;