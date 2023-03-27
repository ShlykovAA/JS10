console.log("Hello!!!");

// Create class MockServer
// Create private property users
// users is an array
// Methods can be static
// All class methods should have 1 sec of delay. Similar to what we wrote during lesson
// Create method getAllUsers. This method returns a fulfilled promise with all users
// Create method getUser. This method receives id as arg.
// This method returns a fulfilled promise with user if user exists in users
// and rejected promise with custom error if no user found
// Create method addUser which adds users to users. This method receives user object as arg.
// addUser returns a fulfilled promise with value true if user arg has properties id, name, age
// else addUser returns a rejected promise with value custom error
// Create method updateUser which updates user in users. This method receives id as first arg user object as second arg.
// updateUser returns a fulfilled promise with updated users if user exists in users
// else updateUser returns a rejected promise with value custom error
// Create method deleteUser which deletes user in users. This method receives id as arg
// deleteUser returns a fulfilled promise with value true if user existed in users
// and was successfully deleted.
// else deleteUser returns a rejected promise with value custom error

// Please write a function or directly call MockServer and handle response with promise chains. console.log the result of function call Create another function that works with async/await and console.log the result
// Create special function that creates users from promise array

class MockServer {
    #users = [
        {id:1,name:"Mike",age:33},
        {id:2,name:"Ella",age:28},
    ];
    getAllUsers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.#users)
            }, 1000)
        });
    }
    getUser(id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = this.#users.find((item) => item.id === id);
                if (user) {
                    resolve(user);
                } else {
                    reject(new Error("No user found"));
                }
            }, 1000)
        })
    }
    addUser(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Object.keys(user).includes('id') && Object.keys(user).includes('name') && Object.keys(user).includes('age')) {
                    this.#users.push(user);
                    resolve(true);
                } else {
                    reject(new Error("Please write the correct object with id, name, age."))
                }
            }, 1000)
        })
    }
    updateUser(id,user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const findUser = this.#users.find((item) => item.id === id);
                if (findUser) {
                    this.#users = this.#users.reduce((acc,item)=>{
                        if (item.id === id) {
                            acc.push(Object.assign(item, user))
                        } else {
                            acc.push(item)
                        }
                        return acc;
                    },[])
                    resolve(this.#users)
                } else {
                    reject(new Error("No user found"));
                }
            }, 1000)
        })
    }
    deleteUser(id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const findUser = this.#users.find((item) => item.id === id);
                if (findUser) {
                    this.#users = this.#users.reduce((acc,item)=>{
                        if (item.id !== id) {
                            acc.push(item)
                        }
                        return acc;
                    },[])
                    resolve(true);
                } else {
                    reject(new Error("No user found"));
                }
            }, 1000)
        })
    }
}

const dataUsers = new MockServer();

const readAllUsers = async () => {
    const info = await dataUsers.getAllUsers();
    console.log(info);
};

const readUserById = (id) => {
    const info = dataUsers.getUser(id);
    info
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
};

const createsUsers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const newUser = dataUsers.addUser(arr[i]);
        newUser
        .then(() => {
            console.log("New user added ", arr[i]);
        })
        .catch((err) => {
            console.log("Incorrect user", arr[i], err);
        })
    }
}

createsUsers([
    {id:5,name:"Lola",age:19},
    {id:6,name:"Erik",age:18},
    {id:7,name:"Gven",age:27},
    {id:8,name:"Tom",age:20},
    {id:9, name: "oops"}
])

