import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";

import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Message } from "./Message";

export const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dbSearc, setDbSearch] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/users";
  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      //  console.log(res)
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }

      setLoading(false);
    });
  }, []);

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

        {loading && <Loader />}
        {error && <Message msg={`Error ${error.status}: ${error.statusText} `} bgColor="#dc3545" />}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            setDb={setDb}
            setDbSearch={setDbSearch}
            dbSearch={dbSearc}
          />
        )}
      </article>
    </div>
  );
};
