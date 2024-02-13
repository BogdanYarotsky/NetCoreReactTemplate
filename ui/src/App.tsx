import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

function App() {
  const [forecast, setForecast] = useState(undefined);

  const fetchForecast = async () => {
    try {
      const response = await fetch(`${apiEndpoint}/weatherforecast`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setForecast(data);
    } catch (error) {
      console.error('Failed to fetch forecast:', error);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={fetchForecast}>
          Fetch Forecast
        </button>
        {forecast && (
          <div>
            <h2>Forecast</h2>
            <div>{JSON.stringify(forecast)}</div>
          </div>
        )}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR updates.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
