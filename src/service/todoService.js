export default new class todoService {
    urlBase="http://localhost:8080";
    urlTodoSuffix = "/todo"
    urlTodosSuffix = "/todos"
    urlTodo = this.urlBase+this.urlTodoSuffix
    urlTodos = this.urlBase+this.urlTodosSuffix

    async getTodos() {
         return await fetch(this.urlTodos,{
             method:"GET",
        }) .then((res) => {
             if (res.ok) return res.json();
             else throw new Error("Failed");
         })
             .catch((err) => {
                 console.log(err);
                 return null;
             });
    }

    async deleteTodo(id) {
        return await fetch(this.urlTodo+"/"+id,{
            method:"DELETE",
        }) .then((res) => {
            if (res.ok) return res.json();
            else throw new Error("Failed");
        })
            .catch((err) => {
                console.log(err);
                return null;
            });
    }

    async editTodo(todo) {
        return await fetch(this.urlTodo,{
            method:"PUT",
            body: JSON.stringify(todo)
        }) .then((res) => {
            if (res.ok) return res.json();
            else throw new Error("Failed");
        })
            .catch((err) => {
                console.log(err);
                return null;
            });
    }

    async createTodo(todo) {
        return await fetch(this.urlTodo,{
            method:"POST",
            body: JSON.stringify(todo)
        }) .then((res) => {
            if (res.ok) return res.json();
            else throw new Error("Failed");
        })
            .catch((err) => {
                console.log(err);
                return null;
            });
    }
}

