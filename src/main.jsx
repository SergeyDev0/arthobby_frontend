import { createRoot } from "react-dom/client";
import './scss/reset.scss';
import './scss/vars.scss';
import './scss/App.scss';
import './scss/media.scss';
import App from "./App";

createRoot(document.getElementById("root")).render( <App /> );