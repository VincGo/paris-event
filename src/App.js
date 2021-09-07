import './App.css';
import Home from "./views/Home";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchList from "./views/SearchList";
import Event from "./views/Event"

function App() {
    return (
        <BrowserRouter >
            <NavBar />
            <main>
                <Route path={"/"}  component={Home} exact/>
                <Route path={"/liste-des-evenements"}  component={SearchList} />
                <Route path={"/evenement/:id"} component={Event} />
            </main>
        </BrowserRouter>
    );
}

export default App;
