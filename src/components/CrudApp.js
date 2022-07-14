import React, { useState } from "react";

import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Juan",
    phone: "310-123-4561",
    age: "20",
    email: "juan@gmail.com ",
    address: "calle falsa 123",
    DateBirth: "10/10/2002",
  },
  {
    id: 2,
    name: "Pedro",
    phone: "310-123-4562",
    age: "30",
    email: "Pedro@gmail.com",
    address: "Calle falsa 124",
    DateBirth: "01/01/1992",
  },
  {
    id: 3,
    name: "Maria",
    phone: "310-123-4563",
    age: "40",
    email: "maria@gmail.com",
    address: "Calle falsa 125",
    DateBirth: "01/01/1982",
  },
  {
    id: 4,
    name: "Carlos",
    phone: "310-123-4564",
    age: "50",
    email: "carlos@gmail.com",
    address: "Calle falsa 126",
    DateBirth: "01/01/1972",
  },
  {
    id: 5,
    name: "Jose",
    phone: "310-123-4564",
    age: "60",
    email: "jose@gmail.com",
    address: "Calle falsa 123",
    DateBirth: "01/01/1962",
  },
];

export const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);
  const createData = (data) => {
    data.id = db.length + 1;
    //console.log(data);
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Esta seguro que desea eliminar el registro ${id}`
    );

    if (isDelete) {
      setDb(db.filter((el) => el.id !== id));
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD APP</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {/* <hr /> */}
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};
