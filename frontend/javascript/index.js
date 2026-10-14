const postFetch = async (url, key) => {
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(key)
        })
        if (!response.ok) {
            throw new Error(error);
        }
        return await response.json()
    }catch(error){
        throw new Error(error)
    }
}

document.addEventListener('DOMContentLoaded', async() =>{
    const valasz = document.getElementById('text')
    document.getElementById('button').addEventListener('click', async()=>{
        try{
            const response = await postFetch('api/saveData', {
                key: valasz
            })
        console.log("Sikeres válasz: ", response);
        }
        catch(error){
            console.log(error);
        }
    })
    
})