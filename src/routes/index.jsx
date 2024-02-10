import { Routes, Route } from "react-router-dom";

import Escpae from "../pages/Escape"
import Unescpae from "../pages/Unescape"

export default function RoutersIndex() {
    return (
        <Routes>
            <Route exact path="/" element={<Escpae />} />
            <Route path="/unescape" element={<Unescpae />} />
        </Routes>
    )
}