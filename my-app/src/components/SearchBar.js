import React, { useState } from "react";
import { FaSearch, FaFeather, FaUserCircle, FaBell } from "react-icons/fa";

function SearchBar({ data, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const notifications = [
    "New album release from The Weeknd",
    "Live concert streaming now!",
    "Your playlist has been updated",
  ];

  const profileOptions = ["Profile", "Account", "Logout"];

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        borderBottom: "1px solid #ccc",
        backgroundColor: "#121212",
        position: "relative",
        zIndex: 1000,
      }}
    >
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaFeather style={{ fontSize: "24px", color: "#FFFFFF", marginRight: "8px" }} />
        <span style={{ fontSize: "24px", fontWeight: "bold", color: "#FFFFFF" }}>Musify</span>
      </div>

      {/* Search Section (Centered) */}
      <div style={{ display: "flex", alignItems: "center", flexGrow: 1, justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "100%",
            maxWidth: "300px",
          }}
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "gray",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            marginLeft: "10px",
          }}
          onClick={() => onSearch(searchTerm)}
        >
          <FaSearch />
        </button>
      </div>

      {/* User Actions */}
      <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
        {/* Notifications Icon */}
        <FaBell
          style={{ fontSize: "24px", color: "#FFFFFF", marginRight: "15px", cursor: "pointer" }}
          onClick={() => setShowNotifications(!showNotifications)}
        />

        {/* Notifications Box */}
        {showNotifications && (
          <div
            style={{
              position: "absolute",
              top: "50px",
              right: "50px",
              backgroundColor: "#000000",
              color: "#fff",
              padding: "10px",
              borderRadius: "5px",
              width: "250px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              zIndex: 1100,
            }}
          >
            <strong>Notifications</strong>
            <ul style={{ listStyle: "none", padding: 0, margin: "10px 0" }}>
              {notifications.length > 0 ? (
                notifications.map((note, index) => (
                  <li key={index} style={{ padding: "5px 0", borderBottom: "1px solid #555" }}>
                    {note}
                  </li>
                ))
              ) : (
                <li>No new notifications</li>
              )}
            </ul>
          </div>
        )}

        {/* Profile Icon (Clickable for options) */}
        <FaUserCircle
          style={{ fontSize: "28px", color: "#FFFFFF", cursor: "pointer" }}
          onClick={() => setShowProfileOptions(!showProfileOptions)}
        />

        {/* Profile Dropdown */}
        {showProfileOptions && (
          <div
            style={{
              position: "absolute",
              top: "50px",
              right: "10px",
              backgroundColor: "#000000",
              color: "#fff",
              padding: "10px",
              borderRadius: "5px",
              width: "150px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              zIndex: 1100,
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: "10px 0" }}>
              {profileOptions.map((option, index) => (
                <li
                  key={index}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderBottom: "1px solid #555",
                  }}
                  onClick={() => console.log(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
