import { useState } from 'react';
import DownloadJSON from './DownloadJSON';
import SaveData from './SaveData'

export default function FormTest() {

  const [data, setData] = useState({
    name: '',
    color: ''
  })

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    for (let [key, value] of formData.entries()) {
      alert(`${key}: ${value}`);
    }
  };

  return (
    <>
      <h1>Forum to JSON Submission Test</h1>
      <p>The form below should be exported as a JSON file somewhere upon submission. In theory, at least...</p>

      <div className="form-wrap">
        <form onSubmit={SaveData}>
          <label>Name:</label><br />
          <input type="text" id="name" name="name"></input><br />

          <label>Primary Color (Hex):</label><br />
          <input type="text" id="primarycolor" name="primarycolor" placeholder="#000000"></input>

          <button>Save</button>
          {/* <DownloadJSON data={data} fileName="testData" /> */}
        </form>
      </div>

      <br />
      <h3>Name: {data.name}</h3>
      <h3>Color: {data.color}</h3>
    </>
  )
}