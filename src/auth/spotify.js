export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your Vercel URL
const redirectUri = import.meta.env.VITE_APP_ENV === 'production' 
  ? "https://your-vercel-app-url.vercel.app/callback" 
  : "http://localhost:5173/callback";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID; // From .env

// Spotify permissions scope (adjust as needed)
const scopes = [
  "user-read-private",
  "user-read-email",
  "user-library-read",
  "playlist-read-private",
  "playlist-modify-private"
];

// Login URL generator
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;