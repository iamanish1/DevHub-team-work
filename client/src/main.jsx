/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import BugHuntArenaParticipantPage from './Pages/BugHuntArenaParticipant.jsx'
import BugHuntArenaLeaderBoard from './Pages/BugHuntArenaLeaderBoard.jsx'
import EventRegistrationPage from './Pages/EventRegisterationPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BugHuntArenaParticipantPage/>
    <BugHuntArenaLeaderBoard/>
    <EventRegistrationPage/>
  </StrictMode>
)
