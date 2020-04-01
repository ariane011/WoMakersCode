import React, { useState }  from 'react'
import { Input, FormGroup, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function Search() {

  const [name, setName] = useState("");

  const onChangeNameHandler = (event) => {
    const {target: {value}} = event
    setName(value)
  }

  return (
    <FormGroup className="form">
      <Input placeholder="Procurar por giphy" type="text"  value={name} onChange={onChangeNameHandler}/>
      <Button className="button" color="danger">Procurar</Button>
    </FormGroup>
  );
}


export default Search