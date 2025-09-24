import { useState, useEffect } from 'react';
import Clock from './Clock';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Clock time={time} />
    </div>
  );
}

export default App;