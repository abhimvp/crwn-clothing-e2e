import HOME from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HOME />} />
    </Routes>
  );
};

export default App;
