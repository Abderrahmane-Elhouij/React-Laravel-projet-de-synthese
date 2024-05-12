import React from "react";
import "./Espace.css";
import { useNavigate, useLocation } from "react-router-dom";

export const EspaceAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const f1 = () => {
    navigate("/");
  };

  const navToUser = () => {
    navigate("/manage-users");
  };

  const adminName = location.state?.adminName || "Nom d'administrateur";
  return (
    <div>
      <header className="header">
        <div>
          <img src="imgProjet/Logo Ofppt.jpg" alt="Ofppt" className="img1" />
          <span className="title">OFPPT</span>
        </div>
        <div>
          <img
            src="imgProjet/profil.png"
            alt="Profile"
            className="profile-pic"
          />
          <span className="trainer-name">Mr {adminName}</span>
        </div>
        <button className="deconnexion" onClick={f1}>
          Déconnexion
        </button>
      </header>
      <section className="content">
        <img src="imgProjet/A1.png" alt="" className="img2" />
        <p className="ofppt-paragraph">
          Bienvenue à L'Office de la formation professionnelle et de la
          promotion du travail - Votre Passerelle vers l'Excellence
          Professionnelle avec l'OFPPT À L'Office de la formation
          professionnelle et de la promotion du travail, nous nous engageons à
          offrir des formations professionnelles de pointe en partenariat avec
          l'OFPPT, l'Office de la Formation Professionnelle et de la Promotion
          du Travail, reconnu pour son excellence dans le développement des
          compétences et l'insertion professionnelle au Maroc.
        </p>
      </section>
      <nav className="navigation">
        <button className="menu-button" onClick={navToUser}>
          Gestion des utilisateurs
        </button>
        <button className="menu-button">Planification des formations</button>
        <button className="menu-button">Suivi les formations</button>
        <button className="menu-button">Rapports</button>
        <button className="menu-button">Paramètres de compte</button>
        <button className="menu-button">Langues</button>
        <button className="menu-button">About us</button>
      </nav>
      <div className="formation">
        <div className="collab">
          <img src="imgProjet/EcronF.svg" alt="" className="frIcron" />
          <p className="plus"> + </p>
          <p className="calcul">10000</p>
          <b>Collaborateurs</b>
        </div>
        <div className="Places">
          <img src="imgProjet/Places.svg" alt="" className="frIcron" />
          <p className="plus"> + </p>
          <p className="calcul">1/2 million</p>
          <b>Places pédagogiques</b>
        </div>
        <div className="Pub">
          <img src="imgProjet/pub.svg" alt="" className="frIcron" />
          <p className="plus"> + </p>
          <p className="calcul">90%</p>
          <b>De l'offre publique de formation</b>
        </div>
        <div className="Métiers">
          <img src="imgProjet/Matier.svg" alt="" className="frIcron" />
          <p className="plus"> + </p>
          <p className="calcul">480</p>
          <b>Métiers</b>
        </div>
        <div className="Etab">
          <img src="imgProjet/etablismment.svg" alt="" className="frIcron" />
          <p className="plus"> + </p>
          <p className="calcul">400</p>
          <b>Etablissements</b>
        </div>
      </div>
    </div>
  );
};
