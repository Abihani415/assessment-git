import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import GitUser from './component/gitUser'
import GitRepo from './component/gitRepo'
import './App.css'
import NavBar from './component/navbar'
import NotFound from './component/notFound'

const App = () => {
  return (
    <Container>
      <div className="App">
        <Router>
          <div className="App-header">
            <NavBar />
          </div>
          <Routes>
            <Route exact path="/" element={<GitUser />} />
            <Route exact path="user" element={<GitUser />} />
            <Route exact path="repos" element={<GitRepo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </Container>
  )
}

export default App
