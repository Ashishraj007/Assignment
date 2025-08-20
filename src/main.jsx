import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-bhel4rtnu6b42zgh.us.auth0.com"
      clientId="aJ9kBJpwKq6fOo0twX48Jmwwzm6XpIvt"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
