import { HomePage } from './components/pages/HomePage'
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5174/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <HomePage />

      <p>{data ? data : "Data not found"}    </p>
    </>
  )
}

export default App

