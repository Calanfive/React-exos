import { useCallback, useState } from 'react';

const CounterState = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = useCallback(
        () => { setCounter(counter + 1) },
        [counter]
    )

    return (
        <div className="cpt">
            <p>Counter</p>
            <p>{counter}</p>
            <button onClick={handleClick}>Reset</button>
        </div>
    );
};

export default CounterState;