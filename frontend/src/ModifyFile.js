import axios from "axios";
import React from "react";
import { useState } from "react";

export default function ModifyFile() {
  let [filecontent, setFilecontent] = useState();
  let [filename, setFilename] = useState();
  const getFileData = (event) => {
    event.preventDefault();
    let file = event.target.filename.value;
    setFilename(file);
    axios
      .get(`/file/readfile/${file}`)
      .then((res) => {
        console.log(res);
        setFilecontent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const modifyData = () => {
    axios
      .get(`/file/createfile/${filename}/${filecontent}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='container'>
      <h1>Modify Data</h1>
      <p>Provide file name with extension Ex: abc.txt</p>
      <form onSubmit={getFileData}>
        <input type='text' name='filename' placeholder='Enter file name' />
        <input type='submit' name='submit' />
      </form>
      <textarea
        className='text-content'
        rows='8'
        name='filecontent'
        value={filecontent}
        onChange={(event) => {
          setFilecontent(event.target.value);
        }}
        placeholder='Content..'
      ></textarea>
      <br />
      <button onClick={modifyData}>Modify</button>
    </div>
  );
}
