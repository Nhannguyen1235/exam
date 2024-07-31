import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchChemical } from "./redux/chemicalSclice";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handle_search = (search) => {
    dispatch(searchChemical(search));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handle_search(search);
          }
        }}
      ></input>
    </div>
  );
}
