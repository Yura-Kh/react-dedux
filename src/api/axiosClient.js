import axios from 'axios';

export default async function getDataFromServer(endpoint) {
    try{
        const response = await axios.get(endpoint);
        return response.data;
    } catch(err){
        //throw Error(err.message);
        return Promise.reject(err.message);
    }
}