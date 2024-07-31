import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from "reactstrap";
import ChemicalItem from './ChemicalApp/ChemicalItem';
import AddChemical from './ChemicalApp/AddChemical';
import SearchBar from './ChemicalApp/SearchBar';

export default function App() {
  return (
    <div>
      <Container className='text-center'>
        <AddChemical/>
      <ChemicalItem/>
      <SearchBar/>
      </Container>
    </div>
  )
}
