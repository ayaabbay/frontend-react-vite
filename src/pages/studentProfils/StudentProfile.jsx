// src/components/StudentProfile.js
import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import axios from 'axios';
import './StudentProfile.css'; // Importez le fichier CSS

const studentData = {
    matricule: "M-2024-000135",
    nom: "Abbay",
    prenom: "Aya",
    campus: "EMSI CENTRE",
    classe: "3IIR",
    groupe: "G3",
    sousGroupe: "Sous Groupe",
    email: "AYAABBAY17@GMAIL.COM",
    emailEmsi: "Aya.Abbay@emsi-edu.ma",
    cne: "G131500384",
    cin: "EE666809",
    genre: "Feminin",
    dateNaissance: "17/01/2003",
    nationalite: "MAROCAINE",
    serieBac: "Internationale",
    anneeBac: "2020",
    diplomeAcces: "Sciences Physiques",
    specialiteDiplome: "Option Français",
    mentionDiplome: "Mention",
    lieuDiplome: "Lieu d'obtention du diplôme"
};

const StudentProfile = () => {
    const [editingField, setEditingField] = useState(null);
    const [modifiedData, setModifiedData] = useState({ ...studentData });

    const handleEditClick = (field) => {
        setEditingField(field);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModifiedData({ ...modifiedData, [name]: value });
    };

    const handleApproveClick = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/api/etudiants/${studentData.id}`, modifiedData);
            alert('Modifications approuvées et enregistrées');
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement des modifications', error);
        }
    };

    return (
        <Box className="student-profile">
            <Typography variant="h4" gutterBottom>
                Données personnelles administratives
            </Typography>
            <Box className="profile-info">
                <Box className="profile-picture">
                    <img src="/path/to/student/photo.jpg" alt="Student" />
                </Box>
                <Box className="profile-details">
                    <Box className="profile-section">
                        {Object.entries(modifiedData).map(([key, value]) => (
                            <React.Fragment key={key}>
                                <Typography variant="h6">{key.charAt(0).toUpperCase() + key.slice(1)}</Typography>
                                {editingField === key ? (
                                    <TextField
                                        name={key}
                                        value={value}
                                        onChange={handleInputChange}
                                        variant="outlined"
                                        size="small"
                                    />
                                ) : (
                                    <Typography>{value}</Typography>
                                )}
                                {editingField !== key && (
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="small"
                                        onClick={() => handleEditClick(key)}
                                    >
                                        Signaler
                                    </Button>
                                )}
                            </React.Fragment>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box className="profile-actions">
                <Button variant="contained" color="primary" onClick={handleApproveClick}>
                    Approuver
                </Button>
            </Box>
        </Box>
    );
};

export default StudentProfile;
