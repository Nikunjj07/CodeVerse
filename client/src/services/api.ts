const url = import.meta.env.VITE_BACKEND_URL;
export const runCode = async ({source_code,language_id}:{source_code:string, language_id:number}) => {
    const res = await fetch(`${url}/submission/run`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ source_code, language_id }),
        credentials: "include"
    });
    return res.json();
}

export const signIn = async ({email, password}:{email:string, password:string})=>{
    const res = await fetch(`${url}/user/signin`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            email,
            password
        })
    });
    const data = await res.json();
    return {
        ok: res.ok,
        status: res.status,
        data
    }
}

export const signUp = async ({username, email, password}:{username:string, email:string, password:string})=>{
    const res = await fetch(`${url}/user/signup`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            username,
            email,
            password
        })
    });
    const data = await res.json();
    return {
        ok: res.ok,
        status: res.status,
        data
    }
}

export const logoutUser = async () => {
    const res = await fetch(`${url}/user/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return {
        ok: res.ok,
        status: res.status,
        data
    };
}

