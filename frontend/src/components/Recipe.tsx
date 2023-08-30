import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

function Recipe() {
    const [sampleData, setSampleData] = useState({});
    async function fetchData() {
        try {
            const res: AxiosResponse = await axios(
                'https://dummyjson.com/users',
            );
            const data = res.data;
            const firstUserHair = data['users'][0]['hair'];
            setSampleData(firstUserHair);
        } catch (error) {
            console.log('Axios Error');
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <img />
            <h1>Time</h1>
            <div>
                <pre>{JSON.stringify(sampleData, null, 2)}</pre>
            </div>
            <h1>Nutrition</h1>
            <div></div>
            <h1>Ingredients</h1>
            <div></div>
            <h1>Tools</h1>
            <div></div>
            <h1>Instructions</h1>
            <div></div>
        </>
    );
}

export default Recipe;
