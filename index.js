console.log("Hello!!!");

// Create class UserService
// Implement every scenario from dummy users BE in your class
// For each scenario create new method
// Methods can be static
// Read response from BE and console.log it or store it in class properties
// Don't forget to catch errors when request failed
// *Extra task: Delete users with ids 1,2,3,4 and random id from 5 to 10000 simultaneously
// Use Promise.allSettled for this task

class UserService {
    users = [];
    selectedUser = null;
    searchedUsers = [];
    filteredUsers = [];
    userCarts = null;
    userPosts = null;
    userTodos = null;
    getAllUsers(){
        fetch("https://dummyjson.com/users")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            this.users.push(...data.users);
            console.log(this.users)
        }) 
    }
    async getUser(id){
        const url = new URL(`https://dummyjson.com/users/${id}`);
        const res = await fetch(url);
        const data = await res.json();
        this.selectedUser = data;
        console.log(this.selectedUser);
    }
    searchUsers(param){
        const url = new URL('https://dummyjson.com/users/search');
        url.searchParams.set('q', param);
        fetch(url)
        .then((res) => {
           return res.json()
        })
        .then((data) => {
            this.searchedUsers.push(...data.users);
            console.log(this.searchedUsers);
        })
    }
    async filterUsers(key, value){
        const url = new URL('https://dummyjson.com/users/filter');
        url.searchParams.set('key', key);
        url.searchParams.set('value', value);
        const res = await fetch(url);
        console.log(`key = ${key} && value = ${value}`);
        const data = await res.json();
        this.filteredUsers.push(...data.users);
        console.log(this.filteredUsers);
    }
    async paginatedUsers(limit, skip){
        const url = new URL('https://dummyjson.com/users');
        url.searchParams.set('limit', limit);
        url.searchParams.set('skip', skip);
        const res = await fetch(url);
        console.log(`${res.status} ${res.url}`);
        const data = await res.json();
        this.searchedUsers.push(...data.users);
        console.log(this.searchedUsers);
    }
    async getUserCarts(id){
        const url = new URL(`https://dummyjson.com/users/${id}/carts`);
        const res = await fetch(url);
        const data = await res.json();
        this.userCarts = data.carts[0];
        console.log(this.userCarts);
    }
    async getUserPosts(id){
        const url = new URL(`https://dummyjson.com/users/${id}/posts`);
        const res = await fetch(url);
        const data = await res.json();
        this.userPosts = data.posts;
        console.log(this.userPosts);
    }
    async getUserTodos(id){
        const url = new URL(`https://dummyjson.com/users/${id}/todos`);
        const res = await fetch(url);
        const data = await res.json();
        this.userTodos = data.todos;
        console.log(this.userTodos);
    }
    createUser(body){
        fetch('https://dummyjson.com/users/add', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
        .then((res) => {
            res.json();
            console.log("Create user status:", res.statusText)
        })
    }
    async updateUser(id, body){
        const res = await fetch(`https://dummyjson.com/users/${id}`, {
            method: "PUT", // or 'PATCH'
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
        const data = await res.json();
        console.log(`Update user status: ${res.statusText}`, data);
    }
    async deleteUser(id){
        const res = await fetch(`https://dummyjson.com/users/${id}`, {
            method: "DELETE",
        });
        console.log(`Delete user status: ${res.statusText}`);
    }
}

const users = new UserService();
// users.getAllUsers();
// users.getUser(2);
// users.searchUsers("terr");
// users.filterUsers("hair.color", "Blond");
// users.paginatedUsers(8,3);
// users.getUserCarts(1);
// users.getUserPosts(6);
// users.getUserTodos(2);
// users.createUser({id:101, firstName: "Tolya", lastName: "Shlykov", age: 32, height: 175})
// users.updateUser(100, {firstName: "Vova", age: 21, height: 145})
// users.deleteUser(12)