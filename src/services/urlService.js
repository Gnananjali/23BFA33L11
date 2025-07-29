// src/services/urlService.js

export const shortenUrl = async (url) => {
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`);
  const data = await response.json();

  if (!response.ok || !data.ok) {
    throw new Error(data.error || "Failed to shorten URL");
  }

  return {
    shortUrl: data.result.full_short_link,
  };
};
