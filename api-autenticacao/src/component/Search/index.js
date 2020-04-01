import React, { useState }  from 'react'
import { Input, FormGroup, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Giphy from '../Giphy'


function Search() {

  const [search, setSearch] = useState("");
  const [click, setClick, ] = useState("");

  function handleClick() {
        setClick(true);
    }

  return (
    <div className="principal">
    <FormGroup className="form">
      <Input placeholder="Procurar por giphy" type="text"  name="search" value={search} onChange={e => setSearch(e.target.value)}/>
      <Button onClick={handleClick} className="button" color="danger">Procurar</Button>
      {click ? <Giphy search={search}/> : null}
    </FormGroup>
    </div>
  );
}


export default Search