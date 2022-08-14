import Banner from "./components/Banner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardContainer from "./components/CardContainer";
import AllCards from "./components/AllCards";
import About from "./components/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <CardContainer />
              </>
            }
          />
          <Route path="/allcards" element={<AllCards />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
