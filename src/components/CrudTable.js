import React from "react";
import { CrudTableRow } from "./CrudTableRow";

export const CrudTable = ({ data }) => {
  return (
    <div>
      <h3>
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
            {data.length === 0 ? (
              <tr>
                <td colSpan={7}>Sin Datos</td>
              </tr>
            ) : (
              data.map((el) => <CrudTableRow key={el.id} el={el} />)
            )}
          </tbody>
        </table>
      </h3>
    </div>
  );
};
