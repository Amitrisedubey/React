import { useState } from "react";

export const Login = () => {
  const [form, setForm] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="Enter Email"
      />

      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Enter Password"
      />
      <button>Sign in</button>
    </div>
  );
};
