import './App.css';
import Home from "./views/Home";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchList from "./views/SearchList";
import Event from "./views/Event"
import Favorites from "./views/Favorites";

function App() {
    return (
        <BrowserRouter >
            <NavBar />
            <main>
                <Route path={"/"}  component={Home} exact/>
                <Route path={"/liste-des-evenements"}  component={SearchList} />
                <Route path={"/evenement/:id"} component={Event} />
                <Route path={"/favoris"} component={Favorites}/>
            </main>
        </BrowserRouter>
    );
}

export default App;
