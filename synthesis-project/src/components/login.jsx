import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedOption === "Formateur") {
      setRole("Formateur");
      axios
        .get("http://127.0.0.1:8000/api/formateurs")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    } else if (selectedOption === "Administrateur") {
      setRole("Administrateur");
      axios
        .get("http://127.0.0.1:8000/api/administrateur")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  }, [selectedOption]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const find = data.find((e) => e.email === email && e.password === password);
    if (find) {
      if (role === "Administrateur") {
        navigate("/espace-admin", { state: { adminName: find.nom } });
      } else if (role === "Formateur") {
        navigate("/espace-formateur", { state: { formateurName: find.nom } });
      }
    } else {
      setErrorMessage("Email or password is incorrect");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await axios.post('http://127.0.0.1:8000/api/login', {
  //       email,
  //       password,
  //     });
  //     console.log(response.data)
      
  //     if (response.data.success) {
  //       navigate("/espace-" + role, { state: { [role === "Formateur" ? "formateurName" : "adminName"]: response.data.user.nom } });
  //     } else {
  //       setErrorMessage("Email or password is incorrect");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setErrorMessage("An error occurred. Please try again later.");
  //   }
  // };

  return (
    <div className="login-container">
      <img
        src="imgProjet/A3.jpg"
        alt="Background "
        className="background-img"
      />
      <div className="login-form-container">
        <img src="imgProjet/Logo Ofppt.jpg" alt="Logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h1>Login</h1>
            <hr />
            <div className="input-container">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
            </div>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              name="Role"
              id="Role"
              placeholder="Role"
            >
              <option value="" disabled>
                Role
              </option>
              <option value="Formateur">Formateur</option>
              <option value="Administrateur">Administrateur</option>
            </select>
            <br />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
