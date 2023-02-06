import { useState } from "react";

export function Form() {
  const [form, setForm] = useState({ name: "", age: 50 });
  const [users, setUsers] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setUsers([...users, form]);
  }

  function handleDelete(index) {
    const clone = [...users];
    clone.splice(index, 1);

    setUsers(clone);
  }

  return (
    <>
      {users.map((currentUser, index) => {
        return (
          <div>
            <h1>{currentUser.name}</h1>
            <strong>{currentUser.age}</strong>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              Apagar
            </button>
          </div>
        );
      })}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          type="text"
          value={form.name}
          name="name"
          onChange={handleChange}
        />

        <label htmlFor="age">Idade:</label>
        <input
          id="age"
          value={form.age}
          type="number"
          onChange={handleChange}
          name="age"
        />

        <button>Terminei!</button>
      </form>
    </>
  );
}
