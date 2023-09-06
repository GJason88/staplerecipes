import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Recipe() {
  const [sampleData, setSampleData] = useState({});
  function fetchData() {
    axios
      .get('http://localhost:3000/recipes')
      .then((response) => {
        setSampleData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
