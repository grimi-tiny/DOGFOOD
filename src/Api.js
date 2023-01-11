class Api{
    constructor(token){
        this.path = "https://api.react-learning.ru";
        this.group = "group-8";
        this.token = token;
    }
    signUp(body){ //регистация
        body.group = this.group;
            return fetch(`${this.path}/signup`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
            });
    }
    signIn(body){ //авторизация
        return fetch(`${this.path}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
    });
        
    }
}
export {Api};