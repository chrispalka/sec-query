import { useState } from 'react';
import axios from 'axios';
import './App.css';

const api = import.meta.env.VITE_API_DOMAIN;

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios(api).then((res) => {
      const { filings } = res.data.queryResponse;
      setData(filings);
      console.log(data);
    });
  };

  return (
    <>
      <div>
        <button onClick={getData}>Go</button>
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>CIK</th>
              <th>Filed At</th>
              <th>formType</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, i) => (
              <tr key={i}>
                <td>{x.companyName}</td>
                <td>{x.cik}</td>
                <td>{x.filedAt}</td>
                <td>{x.formType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
