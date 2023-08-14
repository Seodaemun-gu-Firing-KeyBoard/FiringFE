import React from 'react';
import { Route, Routes} from 'react-router-dom';
import LocationList from './LocaionList';
import LocationPage from './LocationPage/LocationPage';

function Locations() {
  return (
    <>
      <Routes>
        <Route path='' element={<LocationList/>} />  
        <Route path=':id' exact element={<LocationPage/>} />
      </Routes>
    </>
  );
}

export default Locations;