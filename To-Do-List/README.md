[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/IS4_EDAV)
# 12-todo-app

## Topics
- express REST api
- HTML client hosted by express, consuming REST api

## Todos: Rest Api

- Complete the `todos-router.ts` from the live coding in class with a delete endpoint to delete a single todo
- Add also a delete endpoint to delete all todos

## Todos: Frontend

### Fetch Todos
- In the `public` folder, add an HTML client page
- fetch all todos from the backend with `GET` and display them in a `table` or `ul`
- You might want to add a reload button to refresh the list on a button click.

### Add a new todo
- Add an HTML form with a text input to post a new Todo text to the backend.
- Send a `POST` request to the backend when the user confirms the input.
- Afterwards, clear the form text input and refresh the todo list 

> **Hint**
>
> - Use the following convenience function for sending HTTP requests to your backend with a specific HTTP method:

```ts
async function fetchRestEndpoint(route: string, method: "GET" |"POST" |"PUT" |"DELETE", data?: object): Promise<any> {
    const options: RequestInit = { method };
    if (data) {
        // if you need to send a body with your HTTP request, add the body data as json string to options
        options.headers = { "Content-Type": "application/json" };
        options.body = JSON.stringify(data);
    }
    const res = await fetch(route, options);
    if (!res.ok) {
        const error = new Error(`${method} ${res.url} ${res.status} (${res.statusText})`);
        throw error;
    }
    if (res.status !== 204) {
        // reading body of the HTTP response
        return await res.json();
    } 
}
```

### Update a todo
- Add a click listener to the checkbox of each todo to toggle the `done` flag
- Send a `PUT` rest request for update the todo in the backend 
    - **Note:** `PATCH` would be more appropriate here, but you can stay with `PUT` in this example
- Of course, refresh the todo list afterwards.

### Delete a todo

- Add a delete button in each table row
- Send a `DELETE` REST request to the backend when this button is pressed, and refresh the todo list afterwards

### Delete all todos

- Add a clear button below the list
- Send a `DELETE` request to the backend and refresh the list afterwards.

## CSS styling

- Improve the appearance of your page with either bootstrap or css of your choice.
- Example:
<img src="todolist-frontend.png">