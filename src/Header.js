import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Header()
{
    const [info, getInfo] = useState([]);

    useEffect(() => {
        axios.get('https://actionpterygii.microcms.io/api/v1/information', {
            headers: {"X-API-KEY": "3eb7bf23-beb0-472c-82af-0b67cdb6ca22"}
        }).then(res => getInfo(res.data))
    },[]);

    return (
        <div>
            <h1>{info.title}</h1>
            <p>{info.description}</p>
        </div>
    );
}
export default Header;
