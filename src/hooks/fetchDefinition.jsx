import axios from 'axios';

export default async function fetchDefinition(searchTerm) {
    const options = {
        method: 'GET',
        url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
        params: { term: searchTerm },
        headers: {
            'X-RapidAPI-Key': 'c7f513a28cmshe9aee14fdba9164p1d3c99jsn0e3cf5a7874b',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
        },
    };

    try {
        const response = await axios.request(options);
        return response.data.list;
    } catch (error) {
        console.error(error);
    }
}
