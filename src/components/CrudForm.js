import React, { useState, useEffect } from "react";
const initialForm = {
  id: null,
  name: "",
  phone: "",
  age: "",
  email: "",
  address: "",
  DateBirth: "",
};

export const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState(initialForm);
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.phone ||
      !form.age ||
      !form.email ||
      !form.address ||
      !form.DateBirth
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <div>{dataToEdit ? "Editar" : "Agregar"}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        ></input>
        <input
          type="text"
          name="phone"
          placeholder="Telefono"
          onChange={handleChange}
          value={form.phone}
        ></input>
        <input
          type="text"
          name="age"
          placeholder="Edad"
          onChange={handleChange}
          value={form.age}
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
        ></input>
        <input
          type="text"
          name="address"
          placeholder="Direccion"
          onChange={handleChange}
          value={form.address}
        ></input>
        <input
          type="text"
          name="DateBirth"
          placeholder="Fecha de Nacimiento"
          onChange={handleChange}
          value={form.DateBirth}
        ></input>
        <input type="reset" value="Limpiar" onClick={handleReset}></input>
        <button type="submit" value="Enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};
