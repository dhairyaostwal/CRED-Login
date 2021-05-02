import React from 'react';
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
          <a href="https://github.com/dhairyaostwal" ><img src={gitHubLogo} className="form--icon" /></a>
          <a href="https://linkedin.com/dhairyaostwal" ><img src={linkedinLogo} className="form--icon" /></a>
          <a href="https://medium.com/@dhairyaostwal"><img src={mediumLogo} className="form--icon" /></a>
        </div>
        <p><input placeholder="email" type="text" className="form--input" /></p>
        <p><input placeholder="password" type="password" className="form--input" /></p>
        <p><a href="https://github.com/dhairyaostwal/CRED-Login"><button className="btn">Sign In</button></a></p>

        <div>New here? Create account<br />Forgot your password?</div>
      </div>
    </div >
  );
}

export default App;