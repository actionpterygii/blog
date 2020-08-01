import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {PATH, KEY} from './config.js';

function Header()
{
    const [info, getInfo] = useState([]);

    useEffect(() => {
        axios.get(PATH + 'information', {
            headers: {"X-API-KEY": KEY}
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
