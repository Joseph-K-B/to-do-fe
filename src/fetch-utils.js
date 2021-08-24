const URL = 'https://glacial-ridge-47333.herokuapp.com/'

export const getUser = async () => {
    const resp = await fetch (`${URL}/login`)
    const data = await resp.json();
    return data;
}