// components/FlairIcons.tsx
import React from "react";

export const Lightning = () => (
  <svg width="1em" height="1em" viewBox="0 0 64 64" fill="#00ccff">
    <path d="M32 0L12 36h16l-4 28L52 28H36l4-28z" />
  </svg>
);

export const Diamond = () => (
  <svg width="1em" height="1em" viewBox="0 0 64 64" fill="#8ff">
    <polygon points="32,0 64,32 32,64 0,32" />
  </svg>
);

export const Flower = () => (
  <svg width="1em" height="1em" viewBox="0 0 64 64" fill="#cc66ff">
    <circle cx="20" cy="20" r="12" />
    <circle cx="44" cy="20" r="12" />
    <circle cx="20" cy="44" r="12" />
    <circle cx="44" cy="44" r="12" />
    <circle cx="32" cy="32" r="10" fill="#fff" />
  </svg>
);
