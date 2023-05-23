
const fetctLogin = (email, password) => {
    return fetch('api/v1/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
        ,
        body: JSON.stringify({
            email: email,
            password: password

        })
    }).then((data) => data.json())
}


const fetctSignUp = (name,email, password) => {
    return fetch('api/v1/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
        ,
        body: JSON.stringify({
            name:name,
            email: email,
            type:"user",
            password: password,
            image_url:"sdadsa"

        })
    }).then((data) => data.json())
}




export { fetctLogin, fetctSignUp };