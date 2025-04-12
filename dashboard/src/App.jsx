import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './component/Layout.jsx'
import Project from './component/ProjectPage.jsx'
import Teams from './component/TeamsPage.jsx'
import Message from './component/MessagesPage.jsx'
import Analytics from './component/AnalistPage.jsx'
import Integrations from './component/IntergrationsPage.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './component/Dashboard.jsx'
import HomePage from './component/HomePage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    //   <Layout/>
    //   {/* <Toggle/> */}
    // </>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/home" replace />} />
                    <Route path='home' element={<HomePage/>}/>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="project" element={<Project/>} />
                    <Route path="teams" element={<Teams/>} />
                    <Route path="analist" element={<Analytics/>} />
                    <Route path="messages" element={<Message/>} />
                    <Route path="intergrations" element={<Integrations/>} />
                </Route>
      </Routes>
    </Router>
  )
}

export default App
