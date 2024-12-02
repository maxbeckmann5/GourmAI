import React, { useState } from "react";
import axios from "axios";

function SearchRecipes() {
  const [query, setQuery] = useState(""); // Eingabe des Nutzers
  const [response, setResponse] = useState(""); // API-Antwort
  const [loading, setLoading] = useState(false); // Ladezustand
  const [error, setError] = useState(null); // Fehler

  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Please enter a query!");
      return;
    }

    setLoading(true);
    setError(null);
    setResponse("");

    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are an assistant that helps users find recipes by receiving their available ingredients.",
            },
            {
              role: "user",
              content: query,
            },
          ],
          max_tokens: 100, // Max. Länge der Antwort
          temperature: 0.7, // Kreativitätsgrad
        },
        {
          headers: {
            Authorization: `Bearer `, // Eingebundener API-Key
            "Content-Type": "application/json",
          },
        }
      );

      // Antwort setzen
      setResponse(res.data.choices[0].message.content);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-recipes">
      <h2 className="search-title">Find the Perfect Recipe</h2>
      <div className="search-box">
        <input
          type="text"
          className="search-input-field"
          placeholder="Enter your ingredients here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {response && (
        <div className="response-container">
          <h3>Recipe Suggestions:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default SearchRecipes;
