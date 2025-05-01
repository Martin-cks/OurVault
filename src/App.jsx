import './App.css'

import { loginUrl } from "./auth/spotify";

function App() {
  return (
    <div>
      <h1>OurVault</h1>
      <h2>a site for Playlist sharing</h2>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default App
