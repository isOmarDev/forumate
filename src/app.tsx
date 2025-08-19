import { useEffect, useState } from 'react';

const x = () => fetch('https://swapi.info/api/films');

function App() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function fetchSwap() {
      try {
        const swap = await x();
        const result = await swap.json();
        setData(result);
      } catch (e: any) {
        setError(e.message);
      }
    }

    fetchSwap();
  }, []);

  if (error) {
    return <span>{error}</span>;
  }

  if (!data) {
    return <span>loading...</span>;
  }

  return (
    <>
      {data.map((item: any) => (
        <div key={item.title}>{item.title}</div>
      ))}
    </>
  );
}

export default App;
