import React, {useRef, useState} from 'react';
import eventService from "../../services/eventService";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import {IoIosSearch} from "react-icons/io"

const SearchList = () => {
    const inputSearch = useRef();
    const [searchArray, setSearchArray] = useState([])

    function searchEvent () {
        const search = inputSearch.current.value
        eventService
            .searchResult(search)
            .then((data) => setSearchArray(data.records))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <header>
                <Title title={'Liste des événements'}/>
                <div id={"search"}>
                    <input type="text" placeholder={"Recherchez les prochains événements"} ref={inputSearch}/>
                    <button onClick={searchEvent}>
                        <IoIosSearch />
                    </button>
                </div>

            </header>
            {searchArray && searchArray.map((data) => <Card key={data.record.id} event={data}/>)}
        </div>
    );
};

export default SearchList;