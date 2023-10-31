import {useCallback, useState} from 'react';

function TodoList(){
    const [newTodo, setTodo] = useState("")
    const [list, setList] = useState(["beaba"])

    const handleClick = useCallback(
        () => { 
            setList([newTodo, ...list]) 
            setTodo('')
        },
        [newTodo, list]
    )

    const handleChangeTodo = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          setTodo(e.target.value)
        },
        []
    )

    const handleDeleteTodo = useCallback(
        (indexToDelete: number) => { 
            setList(list.filter((todo, i) => i !== indexToDelete))
        },
        [list]
    )

    return (
        <div>
            <p>{newTodo}</p>
            <input type="text" value={newTodo} onChange={handleChangeTodo} />
            <button className='button' onClick={handleClick}>Add task</button>
            <ul>
                {list.map((todo, i) => (
                    <li key={i}>
                        <span>{todo}</span>
                        <button onClick={() => handleDeleteTodo(i)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

