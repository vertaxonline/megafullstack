import { useEffect, useState } from 'react';
import api from './shared/utils/api';

function App() {
  const [message, setMessage] = useState('Connecting...');

  useEffect(() => {
    // Backend ke /health route ko call kar rahe hain
    api.get('/health')
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage('Backend not connected!'));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Frontend + Backend Connection</h1>
      <p className="mt-4 p-4 bg-gray-800 rounded shadow-lg text-green-400">
        Status: {message}
      </p>
    </div>
  );
}

export default App;