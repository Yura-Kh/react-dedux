import axios from 'axios';

export default async function getDataFromServer(endpoint) {
    try{
        const response = await axios.get(endpoint);
        return response.data;
    } catch(err){
        throw err;
    }
}