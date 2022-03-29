import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function FolderContents() {
  let [folders, setFolders] = useState([]);
  useEffect(() => {
    getList();
  });
  const getList = () => {
    axios
      .get("/file/readdirectory")
      .then((res) => {
        console.log(res.data);
        setFolders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteFolder = (dirname) => {
    axios
      .get(`/file/deletedirectory/${dirname}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    getList();
  };
  return (
    <div className='container'>
      <h1>Listing of Files</h1>
      <table className='center'>
        <tr>
          <th>Folder Name</th>
          <th>Delete</th>
        </tr>
        {folders.map((val) => {
          return (
            <tr>
              <td>{val}</td>
              <td>
                <button
                  onClick={() => {
                    deleteFolder(val);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}

        {/* {folders.length > 0 ? (
          <div>
            {folders.map((val) => {
              <tr>
                <td>{val}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteFolder(val);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>;
            })}
          </div>
        ) : (
          <div></div>
        )} */}
      </table>
    </div>
  );
}
