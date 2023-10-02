import React from "react";
import { createRoot } from "react-dom";

import Recorder from "./recorder.js";
import "./recorder.css";

const root = createRoot(window.document.querySelector("#recorder"));

root.render(<Recorder />);
