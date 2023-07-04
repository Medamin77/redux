import "./App.css";
import ListTask from "./components/ListTask";
import Addtask from "./components/Addtask";

function App() {
  return (
    <div className="container">
      <ListTask />
      <Addtask />
      
    </div>
  );
}

export default App;