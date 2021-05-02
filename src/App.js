import React, { useEffect, useState } from 'react';
import './App.css';
import gitHubLogo from './icons/github.png';
import mediumLogo from './icons/medium.png';
import linkedinLogo from './icons/linkedin.png';

function App() {

  return (
    <div className="login--bg">
      <div className="form--card">
        <div style={{ color: "#EBB997", fontSize: "1.7rem" }}>welcome to CRED club</div>
        <div>
          <img src={gitHubLogo} className="form--icon" />
          <img src={linkedinLogo} className="form--icon" />
          <img src={mediumLogo} className="form--icon" />
        </div>
        <p><input placeholder="email" type="text" className="form--input" /></p>
        <p><input placeholder="password" type="password" className="form--input" /></p>
        <p><button className="btn">Sign In</button></p>

        <div>New here? Create account<br />Forgot your password?</div>
      </div>
    </div>
  );
}

export default App;