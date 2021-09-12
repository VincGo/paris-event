import React, {useRef, useState} from 'react';
import eventService from "../../services/eventService";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import {IoIosSearch} from "react-icons/io"
import Loader from "react-loader-spinner"

const SearchList = () => {
    const inputSearch = useRef();
    const [searchArray, setSearchArray] = useState(null)
    const [loading, setloading] = useState(" ")
    const [data, setData] = useState(" ")

    function searchEvent () {
        setloading(false)
        const search = inputSearch.current.value
        eventService
            .searchResult(search)
            .then((data) => {
                setSearchArray(data.records)
                setloading(true)
                data.total_count === 0 ? setData(false) : setData(true)
            })
            .catch((err) => console.log(err))

        inputSearch.current.value = ''
    }

    function handleKeyPress (e) {
        if(e.key === 'Enter') {
            searchEvent()
        }
    }

    return (
        <div>
            <header>
                <Title title={'Liste des événements'}/>
                <div id={"search"}>
                    <input type="text" placeholder={"Recherchez les prochains événements"} ref={inputSearch} onKeyPress={handleKeyPress}/>
                    <button onClick={searchEvent}>
                        <IoIosSearch />
                    </button>
                </div>

            </header>
            <div id={'card-list'}>
                {!loading &&
                <div className={"loader"}>
                    <Loader type={"TailSpin"} color="#24376f" height={80} width={80}/>
                </div>
                }
                {!data && <p>Aucun événement trouvé pour votre rechercher.</p>}
                {searchArray && searchArray.map((data) => <Card key={data.record.id} event={data}/>)}
            </div>
        </div>
    );
};

export default SearchList;