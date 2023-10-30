import { useCallback, useState } from 'react';

const CounterState = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = useCallback(
        () => { setCounter(counter + 1) },
        [counter]
    )

    return (
        <div className="cpt">
            <p>Counter: {counter}</p>
            <button className='button' onClick={handleClick}>Reset</button>
        </div>
    );
};

export default CounterState;