import { useEffect } from 'react';

import axios from 'axios';

export default function Dashboard() {
  async function getHello() {
    const { data } = await axios.get('/api/hello');
    console.log(data);
  }

  useEffect(() => {
    getHello();
  }, []);

  return (
    <div>
      <h1>Principal</h1>
    </div>
  );
}
