import './App.css'

import { loginUrl } from "./auth/spotify";

function App() {
  return (
    <div>
      <h1>OurVault Playlist Sharing</h1>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default App
