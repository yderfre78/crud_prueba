import React, { useState, useEffect } from "react";

export const CrudForm = () => {
  const initialForm = {
    id: null,
    name: "",
    phone: "",
    age: "",
    email: "",
    address: "",
    DateBirth: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (_e) => {};
  const handleSubmit = (_e) => {};
  const handleReset = (_e) => {};

  return (
    <div>
      <div>Agregar</div>
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
        ></input>
        <input type="reset" value="Limpiar" onReset={handleReset}></input>
        <button type="submit" value="Enviar">
          Agregar
        </button>
      </form>
    </div>
  );
};
