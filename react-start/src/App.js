import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./components/layout/Header";
import NotFoundPage from "components/layout/NotFoundPage";

function App() {
  return <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/movie/:id" element={<Detail />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
        </Router>
}

export default App;
