console.log("Hello!!!");

const callBE = async () => {
    const res = await fetch('https://dummyjson.com/products/1',{
        method: "DELETE",
    });
    console.log(res)
    const data = await res.json() 
    console.log(data)
}
callBE()
