import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Form } from "reactstrap";
import { addChemical } from "./redux/chemicalSclice";
export default function AddChemical() {
    const [newNameChemical,setNewNameChemical] = useState("");
    const [newFormulaChemical,setNewFormulaChemical] = useState("");
    
    const dispatch = useDispatch();
    const handle_addChemical = (chemical)=>{
        dispatch(addChemical(chemical))
    }
    return (
      <div>
        <Form>
        <input type="text" className="m-3" placeholder="Nhập tên hóa học" value={newNameChemical} onChange={(e)=>setNewNameChemical(e.target.value)}/>
        <input type="text" placeholder="Nhập công thức hóa học" value={newFormulaChemical} onChange={(e)=>setNewFormulaChemical(e.target.value)}/>
        <input type="submit" onClick={()=>handle_addChemical({name:newNameChemical,formula:newFormulaChemical})}></input>
        </Form>
      </div>
    )
  }
  