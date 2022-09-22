import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.modules.css'
import HomePage from "./pages/home.page/home.page";
import CreateCarPage from "./pages/create.car.page/create.car.page";
import UpdateCarPage from "./pages/update.car.page/update.car.page";

const App = () => {
    return (
        <div>
          <Routes>
              <Route path={'/'} element={<HomePage/>}>
                  <Route path={'/create'} element={<CreateCarPage/>}/>
                  <Route path={'/:update'} element={<UpdateCarPage/>}/>
              </Route>
          </Routes>
        </div>
    );
};

export default App;