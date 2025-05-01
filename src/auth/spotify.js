export const authEndpoint = "https://accounts.spotify.com/authorize";

// Add this at the very top
console.log('Environment:', {
  clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  env: import.meta.env.VITE_APP_ENV,
  allEnv: import.meta.env
});

if (!import.meta.env.VITE_SPOTIFY_CLIENT_ID) {
  throw new Error(`
    Missing Spotify Client ID!
    Check that:
    1. Your .env file exists in project root
    2. It contains VITE_SPOTIFY_CLIENT_ID
    3. You restarted the dev server
  `);
}

// Rest of your existing code...
// Environment-aware configuration
const redirectUri = import.meta.env.VITE_APP_ENV === 'production'
  ? "https://our-vault.vercel.app/callback"  // Your actual Vercel URL
  : "http://localhost:5173/callback";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

// Required permissions for playlist functionality
const scopes = [
  "user-read-private",
  "user-read-email",
  "user-library-read",
  "playlist-read-private",
  "playlist-modify-private",
  "playlist-read-collaborative"
].join("%20"); // Join with encoded space

// Secure token extraction
export const getTokenFromResponse = () => {
  try {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        const [key, value] = item.split("=");
        if (key && value) {
          initial[key] = decodeURIComponent(value);
        }
        return initial;
      }, {});
  } catch (error) {
    console.error("Token parsing failed:", error);
    return {};
  }
};

// URL-safe construction
export const loginUrl = new URL(authEndpoint);
loginUrl.searchParams.append("client_id", clientId);
loginUrl.searchParams.append("redirect_uri", redirectUri);
loginUrl.searchParams.append("scope", scopes);
loginUrl.searchParams.append("response_type", "token");
loginUrl.searchParams.append("show_dialog", "true");

export const spotifyAuthUrl = loginUrl.toString();// Add this at the top of spotify.js
console.log('Env vars:', {
  clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  env: import.meta.env.VITE_APP_ENV
});

// Verify the clientId exists before building URL
if (!import.meta.env.VITE_SPOTIFY_CLIENT_ID) {
  throw new Error('Missing Spotify Client ID in environment variables');
}