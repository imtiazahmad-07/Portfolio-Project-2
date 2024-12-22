import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Navbar/Navbar";
import Groceries from "./Groceries/Groceries";

function App() {
  return (
    <div >
      <Navbar/>
      <Groceries/>
    </div>
  );
}

export default App;
