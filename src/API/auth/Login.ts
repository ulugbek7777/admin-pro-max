import instance from "../api";

interface loginInterface {
    userName: string;
    password: string | number;
}

export const LoginApi = async ({ userName, password }: loginInterface) => {
    try {
        const {data} = await instance('auths/login/ra', {
            method: 'POST',
            data: { email: userName, password },
            headers: { 'Content-Type': 'application/json' }
        });
        localStorage.setItem('token', data.id);
        localStorage.setItem('user', data.user);
        localStorage.setItem('expires', data.ttl);
    }
    catch (err) {
        console.log(err);
        throw new Error('Something went wrong')
    }
}