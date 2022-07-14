import React from "react";

export const CrudTableRow = ({el, setDataToEdit, deleteData  }) => {
    let {id, name, phone, age, email, address, DateBirth} = el;
  return (
    
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{DateBirth}</td>
      <td>
        <button onClick={()=>setDataToEdit(el)}>Editar</button> <button onClick={()=>deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};
