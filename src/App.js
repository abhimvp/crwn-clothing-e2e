import HOME from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <h1>I'm the shop container</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HOME />} />{" "}
        {/** this way it tell react to render home component with navigation bar component when there is index in the outlet component. */}
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
