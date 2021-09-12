import './App.css';
import Home from "./views/Home";
import {BrowserRouter, Route} from "react-router-dom";
import SearchList from "./views/SearchList/SearchList";
import Event from "./views/Event/Event"
import Favorites from "./views/Favorites";
import Header from "./components/Header/Header";

function App() {
    return (
        <BrowserRouter >
            <Header />
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
