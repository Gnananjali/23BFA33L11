// src/components/Form.js
import React, { useState } from "react";
import { shortenUrl } from "../services/urlService"; // Adjust path as needed

function Form() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");

    try {
      const result = await shortenUrl(url); // ⬅️ You place it HERE
      console.log("API Response:", result); // ⬅️ Debug output
      setShortUrl(result.shortUrl); // ⬅️ Store short URL for display
    } catch (err) {
      console.error("Shorten error:", err);
      setError("Failed to shorten URL. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {shortUrl && (
        <p>
          Short URL:{" "}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  );
}

export default Form;
