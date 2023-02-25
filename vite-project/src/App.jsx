import Card from "./components/Card";
import CardWhite from "./components/CardWhite";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div style={{ margin: "10px" }} className="col-12 col-lg-6">
          <Card />
        </div>
        <div style={{ margin: "10px" }} className="col-12 col-lg-6">
          <CardWhite />
        </div>
      </div>
    </div>
  );
}

export default App;
