import React from "react";
import { createRoot } from "react-dom";

import Popup from "./popup.js";
import "./popup.css";

const root = createRoot(window.document.querySelector("#popup"));

root.render(<Popup />);
