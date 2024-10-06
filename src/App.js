
// import Api from './Components/Fetchingdb';
import Table from './Components/CrudOperation';
import Add from './Pages/NewUser';
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Api/> */}
      {/* <Add/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Table />} />
          <Route path='/new' element={<Add />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
