const URL = 'https://glacial-ridge-47333.herokuapp.com'

export const getToken = async (loginInfo, type) => {
   const authURL = `${URL}/api/${type}`;
   const resp = await fetch (authURL, {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(loginInfo),
   });
   const data = await resp.json();
   localStorage.setItem('TOKEN', data.token);
   return data.token
}

export const getToDos = async (token, todoList) => {
    const userTodos = `${URL}/api/todos`
    const resp = await fetch (userTodos, {
        method: 'GET',
            headers: {
                'Content-Type': 'application/json',
             Authorization: 
                token,
        },
        body: JSON.stringify(todoList)
    });
    const data = await resp.json();
    return data
}

export const createTodo = async (token, todo) => {
    const todosURL = `${URL}/api/todos`;
    const resp = await fetch(todosURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(todo),
    
});
const data = await resp.json();
return data
}

export const updateTodo = async (token, todo) => {
    const todosURL = `${URL}/api/todos/${todo.id}`;
    const resp = await fetch()
}