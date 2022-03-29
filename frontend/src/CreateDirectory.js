import axios from "axios";
import React from "react";

export default function CreateDirectory() {
  const addDirectory = (event) => {
    event.preventDefault();
    let dir_name = event.target.dir_name.value;
    axios
      .get(`/file/createdirectory/${dir_name}`)
      .then((res) => {
        console.log("created file", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='container'>
      <h1>Create Directory</h1>
      <form onSubmit={addDirectory}>
        <input type='text' name='dir_name' placeholder='Enter File Name' />
        <button>Create</button>
      </form>
    </div>
  );
}
