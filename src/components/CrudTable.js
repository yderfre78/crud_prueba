import React, { useState } from "react";
import { CrudTableRow } from "./CrudTableRow";

export const CrudTable = ({
  data,
  setDataToEdit,
  deleteData,
  setDb,
  dbSearch,
}) => {
  const [search, setSearch] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  const handlesearcherName = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    filterBy(e.target.value);
  };
  const handlesearcherEmail = (_e) => {
    setSearchEmail(_e.target.value);
    console.log(_e.target.value);
    filterByEmail(_e.target.value);
  };
  const handlesearcherPhone = (_e) => {
    setSearchPhone(_e.target.value);
    console.log(_e.target.value);
    filterByPhone(_e.target.value);
  };

  const filterBy = (searchTerm) => {
    let resulSearch = dbSearch.filter((element) => {
      if (
        element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
        // || elemento.gmail.toString().toLowerCase().includes(tsearchTerm.toLowerCase())
      ) {
        return element;
      }
    });
    setDb(resulSearch);
  };
  const filterByEmail = (searchTerm) => {
    let resulSearch = dbSearch.filter((element) => {
      if (
        element.email
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
       
      ) {
        return element;
      }
    });
    setDb(resulSearch);
  };
  const filterByPhone = (searchTerm) => {
    let resulSearch = dbSearch.filter((element) => {
      if (
        element.phone
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
        // || elemento.gmail.toString().toLowerCase().includes(tsearchTerm.toLowerCase())
      ) {
        return element;
      }
    });
    setDb(resulSearch);
  };
  return (
    <div>
      <input
        className="form-control inputBuscar"
        value={search}
        onChange={handlesearcherName}
        type="text"
        placeholder="Búsqueda por Nombre"
      ></input>
      <input
        className="form-control inputBuscar"
        value={searchEmail}
        onChange={handlesearcherEmail}
        type="text"
        placeholder="Búsqueda Por Email"
      ></input>
      <input
        className="form-control inputBuscar"
        value={searchPhone}
        onChange={handlesearcherPhone}
        type="text"
        placeholder="Búsqueda Por Teléfono"
      ></input>

      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Direccion</th>
            <th>Fecha de Nacimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};
