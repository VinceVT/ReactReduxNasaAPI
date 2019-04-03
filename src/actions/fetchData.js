import axios from 'axios';
import fetch from 'isomorphic-fetch';

export default function fetchData() {
    const API_Key = 'kUZbGd3PkE6bbymjUX3hhhwHOfakfBp3x9Tp140k';
    const api = 'https://api.nasa.gov/planetary/apod?api_key=';
    const url = api + API_Key;

    const request1 = fetch(url).then(response => { return response.json() });
    
    const request = axios.get(url);
    console.log(request);
    
    return { //returns plain object with props
        type: 'FETCH_DATA',     //action type
        payload: request        //Action Payload (cargo)
    };
    
}