import "./App.css";
import Sidebar from "./components/Sidebar";
import Review from "./components/Review";
import Rating from "./components/Rating";
import Analysis from "./components/Analysis";
import Visitors from "./components/Visitors";




function App() {
  return (
    <div className="App">
      <Sidebar />
      <Review />
      <Rating />
      <Analysis />
      <Visitors />
    </div>
  );
}

export default App;
