import { useState, useEffect } from 'react';
import useFetchDefinition from '../hooks/fetchDefinition';
import useCleanDefinitions from '../hooks/cleanDefinitions';

export default function UrbanDictionary() {
    const [definitions, setDefinitions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const searchEl = document.querySelector('#searchInput');
        searchEl.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const results = await useFetchDefinition(searchTerm);
        setDefinitions(results);
    };

    const cleanedDefinitions = useCleanDefinitions(definitions);

    const renderedDefinitions = cleanedDefinitions.map((e, i) => (
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
            <form className="flex my-4 flex justify-center">
                <input
                    id="searchInput"
                    type="text"
                    name="define"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-b border-black outline-none bg-transparent w-full sm:w-64"
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
