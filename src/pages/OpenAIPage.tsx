import { useState, useEffect } from 'react'
import axios from 'axios';

const OpenAIPage = () => {
  const OPENAI_API_KEY = "sk-proj-PR6g98ASzQRPbYkwC9vhT3BlbkFJbWRKrNR1168FAhJUbxp9";
  const [data, setData ] = useState(null);

  useEffect(
    () => {
      axios
          .get(`https://api.openai.com/v1/models`, {
              headers: {
                  Authorization: `Bearer ${OPENAI_API_KEY}`,
                  'OpenAI-Organization': 'org-3v5B7uvTJcqvUAjzk3X72t0K',
                  'OpenAI-Project': 'proj_tzaXe5MRpS1c4DYyXNbfQCrq'
              }
          })
          .then((res) => {
            setData(res.data.data);
          })
          .catch((err) => console.log(err));
    },
    []
  );

  function getTitleCase(text: String) {
    if(text) {
      const result = text.replace(/([A-Z])/g, " $1");
      const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
      return finalResult;
    } else {
      return text;
    }
  }

  // `map` over the first object in the array
  // and get an array of keys and add them
  // to TH elements
  function getHeadings(data: {}[]) {
    return Object.keys(data[0]).map((key, index) => {
      return <th key={index}>{getTitleCase(key)}</th>;
    });
  }

  // `map` over the data to return
  // row data, passing in each mapped object
  // to `getCells`
  function getRows(data: any[]) {
    return data.map((obj: any, index) => {
      return <tr key={index}>{getCells(obj)}</tr>;
    });
  }

  // Return an array of cell data using the
  // values of each object
  function getCells(obj: any) {
    return Object.values(obj).map((value: any, index) => {
      // if(index === 2) {
      //   console.log(value);
      //   value = new Date(value * 1000);
      // }
      return <td key={index}>{value}</td>;
    });
  }

  return (
    <div>
      <h2>OpenAI Models</h2>
      <section className="widget">
        {data ? 
          <table>
            <thead>{getHeadings(data)}</thead>
            <tbody>{getRows(data)}</tbody>
          </table>
        : 'Loading...'}
      </section>
    </div>
  )
}

export default OpenAIPage