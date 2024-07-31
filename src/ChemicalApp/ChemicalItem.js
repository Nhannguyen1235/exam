import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { deleteChemical } from './redux/chemicalSclice';

export default function ChemicalItem() {
    const chemicals = useSelector((state)=>state.chemicals.chemicals);
    const dispatch = useDispatch();
    const handle_deleteChemical = (id)=>{
        dispatch(deleteChemical(id));
    }
    useEffect(() => {
        localStorage.setItem("chemicals", JSON.stringify(chemicals));
      }, [chemicals]); 
  return (
    <div>
        <Table hover>
            <thead>
                <tr>
                    <th>Chemical Name</th>
                    <th>Chemical Formula</th>
                </tr>
            </thead>
            <tbody>
                {chemicals.map((chemical, index) => (
                    <tr key={index}>
                        <td>{chemical.name}</td>
                        <td>{chemical.formula}</td>
                        <td><button className='btn btn-danger' onClick={()=>handle_deleteChemical(chemical.id)}>delete</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  )
}
