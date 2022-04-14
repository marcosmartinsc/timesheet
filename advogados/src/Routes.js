import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Config from './pages/Config';

export default () => {

    return(

        <Routes>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/config">
                <Config />
            </Route>
        </Routes>

    );
}