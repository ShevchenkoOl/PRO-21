import axios from 'axios';

export async function getSimpsons(){
    try {
        const res = await axios.get('https://thesimpsonsapi.com/api/characters');
        console.log(res.data);
        return res.data;
    } catch (error) {
        return [];
    }
};