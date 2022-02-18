import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home";
import { FavoriteBook } from "./pages/FavoriteBook";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favoritos" exact component={FavoriteBook} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
