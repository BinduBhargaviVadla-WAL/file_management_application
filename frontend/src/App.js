import logo from "./logo.svg";
import "./App.css";
import CreateFile from "./CreateFile";
import CreateDirectory from "./CreateDirectory";
import FolderContents from "./FolderContents";
import ModifyFile from "./ModifyFile";

function App() {
  return (
    <div className='App'>
      <CreateFile />
      <CreateDirectory />
      <FolderContents />
      <ModifyFile />
    </div>
  );
}

export default App;
