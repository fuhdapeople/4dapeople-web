import React from "react";
import "./Header.css";
import { Forum } from "../HeaderPages/Forum";
import { MainForm } from "./MainForm";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { WgoMain } from "../Wgo/WgoMain";
import { ProfileMain } from "../Profile/ProfileMain";
import { SettingsMain } from "../Settings/SettingsMain";

export function Header() {
  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(`${link}`); // Change the route to '/new-route'
  };
  return (
    <div>
      <div className="Header">
        <h1 className="Header-Title">4DaPeople</h1>
        <button
          className="Header-Button"
          title="What's Going On"
          onClick={() => handleClick("/wgo")}
        >
          WGO
        </button>
        <button
          className="Header-Button"
          onClick={() => handleClick("/profile")}
        >
          Profile
        </button>
        <button className="Header-Button" onClick={() => handleClick("/forum")}>
          Forum
        </button>
        <button
          className="Header-Button"
          onClick={() => handleClick("/settings")}
        >
          Settings
        </button>
      </div>
      <Routes>
        <Route path="/wgo" element={<WgoMain />} />
        <Route path="/profile" element={<ProfileMain />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/settings" element={<SettingsMain />} />
      </Routes>
    </div>
  );
}
