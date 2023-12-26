import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UrbanDictionary() {
    const [definitions, setDefinitions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const searchEl = document.querySelector('#searchInput');
        searchEl.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
            params: { term: searchTerm },
            headers: {
                'X-RapidAPI-Key': 'c7f513a28cmshe9aee14fdba9164p1d3c99jsn0e3cf5a7874b',
                'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
            },
        };

        async function run() {
            try {
                const response = await axios.request(options);
                setDefinitions(response.data.list);
            } catch (error) {
                console.error(error);
            }
        }
        await run();
    };

    const renderedDefinitions = definitions.map((e, i) => (
        <div key={e.defid} className="flex items-center relative">
            <div className="w-10 h-10 rounded-full mr-4 bg-gray-600 text-white flex items-center justify-center shadow absolute">
                {i + 1}
            </div>
            <div className="rounded shadow bg-white ml-14 my-4 p-4">
                <p>{e.definition}</p>
            </div>
        </div>
    ));
    return (
        <div className="container px-4 my-2">
            <h1 className="text-2xl font-semibold text-center">Urban dictionary</h1>
            <form className="flex my-4">
                <span className="font-semibold mr-1">Define:</span>
                <input
                    id="searchInput"
                    type="text"
                    name="define"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-b border-black outline-none bg-transparent w-64"
                ></input>
                <button
                    className="border rounded border-black px-4 ml-4 bg-white"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>

            {renderedDefinitions}
        </div>
    );
}
