import axios from "axios";
import React from "react";

export default function CreateFile() {
  const addFile = (event) => {
    event.preventDefault();
    let file_name = event.target.file_name.value;
    let file_content = event.target.file_content.value;
    axios
      .get(`/file/createfile/${file_name}/${file_content}`)
      .then((res) => {
        console.log("created file", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='container'>
      <h1>Create File</h1>
      <form onSubmit={addFile}>
        <input type='text' name='file_name' placeholder='Enter File Name' />
        <textarea
          name='file_content'
          placeholder='Enter File Content...'
        ></textarea>
        <button>Create</button>
      </form>
    </div>
  );
}
