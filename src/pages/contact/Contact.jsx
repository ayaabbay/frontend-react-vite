
// @ts-ignore
/* import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { columns ,rows } from "./data"; */



import React, { useState } from 'react';

const Contact = () => {


  const users = [
    { id: 1, nom: 'aloui', prenom: 'aya', email: 'ayaaloui@admin.com', phone: '060000000' },
    { id: 2, nom: 'abbay', prenom: 'ahmed', email: 'abbayahmed@admin.com', phone: '0672345678' },
    { id: 3, nom: 'hlibi', prenom: 'amina', email: 'hlibiamina@admin.com', phone: '123456789' },
    { id: 4, nom: 'douah', prenom: 'nizar', email: 'douahnizar@prof.com', phone: '1234567890' },
    { id: 5, nom: 'benani', prenom: 'anas', email: 'benanianas@prof.com', phone: '1234567890' },
  ];

  const handleSendEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      {/* Bouton pour basculer entre les modes */}
{/*       <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: '10px',
          marginBottom: '15px',
          backgroundColor: darkMode ? '#fff' : '#333',
          color: darkMode ? '#333' : '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {darkMode ? 'Passer au mode clair' : 'Passer au mode sombre'}
      </button> */}

      {/* Tableau */}
      <div className="table-container">
        <table className={'table'}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nom}</td>
                <td>{user.prenom}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    onClick={() => handleSendEmail(user.email)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Envoyer un Email
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Styles dynamiques */}
      <style>{`
        .table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 10px;
          text-align: left;
        }

        /* Mode sombre */
        .dark-table {
          background-color: #1e1e1e;
          color: white;
        }
        .dark-table th {
          background-color: #333;
        }
        .dark-table tr:nth-child(even) {
          background-color: #2c2c2c;
        }

        /* Mode clair */
        .light-table {
          background-color: white;
          color: black;
        }
        .light-table th {
          background-color: #f4f4f4;
        }
        .light-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
};



 
/*    return (
      <div>

         <div style={{ height: 600, width: '100%' }}>
            <DataGrid rows={rows} 

            columns={columns} />
         </div>
      </div>
   );
} */

export default Contact;