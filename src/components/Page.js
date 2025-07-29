import React from 'react';

function Page({ shortUrl }) {
  return (
    <div className="mt-4">
      {shortUrl && (
        <p className="text-green-700">
          Shortened URL: <a href={shortUrl} className="underline" target="_blank" rel="noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  );
}

export default Page;
