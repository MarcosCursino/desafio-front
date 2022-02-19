import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home";
import { FavoriteBook } from "./pages/FavoriteBook";

import "react-toastify/dist/ReactToastify.css";

import { FavoriteProvider } from './contexts/FavoriteContext'

function App() {
  return (
    <BrowserRouter>
    <FavoriteProvider>
      <ToastContainer />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favoritos" exact component={FavoriteBook} />
      </Switch>
      </FavoriteProvider>
    </BrowserRouter>
  );
}

export default App;
