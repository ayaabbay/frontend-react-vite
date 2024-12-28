import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,

} from 'react-router-dom'
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import App from './App.jsx';
import Home from './pages/home/Home.jsx';
import Contact from './pages/contact/Contact.jsx';
import Calender from './pages/calender/Calender.jsx';
import StudentProfile from '../src/pages/studentProfils/StudentProfile';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='calender' element={<Calender />} />
      <Route path='profile' element={<StudentProfile />} /> {/* Ajoutez la route pour le profil étudiant */}


    </Route>
  )
);
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
