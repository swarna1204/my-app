import "./App.css";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import GotCharacters from "./Components/Effect/EffectsComponent";
import Nav from "./Components/MyStateComponent/nav";
import { Routes, Route } from "react-router-dom";

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  return (
    <div>
      <Nav /> {/* Navigation */}
      <Routes>
        <Route
          path="/PropsComponent"
          element={<PropsComponent name={person.name} info={person.info} />}
        />
        <Route path="/EffectsComponent" element={<GotCharacters />} />
        <Route path="/MyStateComponent" element={<MyStateComponent />} />
      </Routes>
    </div>
  );
}

export default App;