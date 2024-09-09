"use client";

import { useState } from "react";
import axios from "axios";

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/shorten", { originalUrl: url });
      setShortUrl(response.data.shortUrl);
    } catch (error:any) {
      console.error("Error shortening URL:", error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="w-96 h-full bg-gray-800 p-4 rounded-lg text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">URL Shortener</h1>

      <div className="p-6 max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border p-2 text-black w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Shorten
          </button>
        </form>
        {shortUrl && (
          <div className="mt-4">
            <a href={shortUrl} className="text-blue-600">
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlShortener;
