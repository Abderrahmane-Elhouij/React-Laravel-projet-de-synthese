import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./create.css";

function Create() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formateurs, setFormateurs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadFormateurs();
  }, []);

  const loadFormateurs = () => {
    axios
      .get("http://127.0.0.1:8000/api/formateurs")
      .then((res) => setFormateurs(res.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/formateurs", {
        nom,
        prenom,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        setSuccessMessage("Formateur créé avec succès!");
        setNom("");
        setPrenom("");
        setEmail("");
        setPassword("");
        loadFormateurs();
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const handleDelete = (idFormateur) => {
    axios
      .delete(`http://127.0.0.1:8000/api/formateurs/${idFormateur}`)
      .then((res) => {
        console.log(res.data);
        setFormateurs(formateurs.filter((formateur) => formateur.idFormateur !== idFormateur)); 
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Créer un compte formateur</h2>
          <form onSubmit={handleSubmit} className="form-container">
            {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Nom
              </label>
              <input
                type="text"
                className="form-control"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="prenom" className="form-label">
                Prénom
              </label>
              <input
                type="text"
                className="form-control"
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Mot de passe
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <button type="submit" className="">
                Créer Formateur
              </button>
              <button
                className="btn-primary"
                onClick={() => navigate("/espace-admin")}
              >
                Retour à l'Espace
              </button>
            </div>
          </form>
          <h2 className="text-center mt-5">Liste des formateurs</h2>
          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {formateurs.map((formateur) => (
                <tr key={formateur.idFormateur}>
                  <td>{formateur.nom}</td>
                  <td>{formateur.prenom}</td>
                  <td>{formateur.email}</td>
                  <td>
                    <button onClick={() => handleDelete(formateur.idFormateur)}>
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Create;
