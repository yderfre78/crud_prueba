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

    helpHttp()
      .get(url)
      .then((res) => {
        console.log(res);

        if (!res.err) {
          setDb(res);
          setDbSearch(res);
          setError(null);
        } else {
          setDb(null);
          setDbSearch(null);
          setError(res);
        }

        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(url, options).then((res) => {
      // console.log(res);

      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    // console.log(endpoint);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb([...db, res]);
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Esta seguro que desea eliminar el registro ${id}`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        // console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          // setDb([...db, res]);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {/* <hr /> */}

        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText} `}
            bgColor="#dc3545"
          />
        )}
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
