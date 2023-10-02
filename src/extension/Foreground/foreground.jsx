import React from "react";
import { createRoot } from "react-dom";

import Foreground from "./Foreground";
import "./index.css";

const root = createRoot(window.document.querySelector("#foreground"));

root.render(<Foreground />);