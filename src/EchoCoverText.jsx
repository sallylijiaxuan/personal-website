import React from 'react';

// Original PDF text converted to vector paths and cropped to its right-hand cover.
// Glyph positions preserve the original font, tracking, kerning, and baselines.
const artwork = '/images/project/echo/cover-text-original.svg';
const description = 'ISSUE 1. Editor: Sally Li. Authors: Tom Lamont, Abby Aguirre. ADELE: THEN & NOW.';

export default function EchoCoverText() {
  return <img className="echo-cover-text" src={artwork} alt={description} draggable="false" />;
}

export function appendCoverText(element) {
  const image = document.createElement('img');
  image.className = 'echo-cover-text';
  image.src = artwork;
  image.alt = description;
  image.draggable = false;
  element.appendChild(image);
}
