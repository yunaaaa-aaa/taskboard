'use client'

import { useState, useEffect} from  'react';
import { resolve } from 'styled-jsx/css';

export default function TodosPage () {
    const [todos, setTodos] = useState([]);
    const [newTodo, setnewTodo] = useState ('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTodos(){ //async 指的是不同步，await表示要等他執行完，才會往下一步
            try{
                const res = await fetch ('https://jsonplaceholder.typicode.com/todos?_limit=20');
                if(!res.ok) throw new Error('Failed to fetch'); 
                //if(res.status != 200 ) throw new Error('Failed to fetch');
                console.log(res);
                await new Promise((resolve) => setTimeout(resolve, 3000));

                const data = await res.json();
                setTodos(data);
            } catch (err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            } //finally->結束function後要做的事情
        }
        fetchTodos();
    } , [])

    return(
        <main className='p-4 max-w-xl mx-auto'>
            <h1 className='text-2xl font-bold mb-4'>Todos</h1>
             
                {loading && <p>Loading...</p>}

                {!loading && (
                    <ul className='space-y-2'>
                        {todos.map((todo) =>(
                            <li key={todo.id} className='border p-2 rounded'>
                                <h2 className='font-semibold'>
                                    {todo.title} {todo.completed? 'Done' : ''}
                                </h2>
                            </li>
                        ))}
                    </ul>
                )}
        </main>
    );
}