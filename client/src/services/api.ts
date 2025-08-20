const url = import.meta.env.VITE_BACKEND_URL;
export const runCode = async ({source_code,language_id}:{source_code:string, language_id:number}) => {
    console.log(url)
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
