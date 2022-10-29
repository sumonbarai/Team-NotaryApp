import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Orders from "./pages/Orders";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Orders />
    </div>
  );
}

export default App;
