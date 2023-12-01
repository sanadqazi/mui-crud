import React from 'react';
import Home from './components/Home';
import EditComponent from './components/EditComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditComponent />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
