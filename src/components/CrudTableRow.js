import React from "react";

export const CrudTableRow = ({el}) => {
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.phone}</td>
      <td>{el.age}</td>
      <td>{el.email}</td>
      <td>{el.address}</td>
      <td>{el.DateBirt}</td>
      <td>
        <button>Editar</button> <button>Eliminar</button>
      </td>
    </tr>
  );
};
