import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Settings() {
  let history = useHistory();
  const [speedrunMode, setSpeedrunMode] = useState(
    localStorage.getItem("Speedrun_Mode")
  );

  const handleSettings = (e, state, func) => {
    e.target.checked
      ? localStorage.setItem(e.target.value, true)
      : localStorage.removeItem(e.target.value, false);
    func(!state);
  };

  return (
    <div className="container settings__container">
      <h1>Settings</h1>
      <div className="settings">
        <div className="setting-container">
          <h4>Speedrun Mode</h4>
          <label className="checkbox-label">
            <input
              type="checkbox"
              value="Speedrun_Mode"
              checked={speedrunMode}
              onChange={(e) => handleSettings(e, speedrunMode, setSpeedrunMode)}
            />
            <span className="checkbox-custom"></span>
          </label>
          <button
            className="button button--answer"
            style={{ marginTop: "30px" }}
            onClick={() => history.push("/settings/regions")}
          >
            Region settings
          </button>
        </div>
      </div>
    </div>
  );
}
