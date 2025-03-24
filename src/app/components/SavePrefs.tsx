"use client";
import { useEffect, useState } from "react";

export default function SavePrefs() {
  const [prefs, setPrefs] = useState<string>("");

  useEffect(() => {
    // TODO: Save 'prefs' as 'tag:tech' in localStorage when component mounts
    // Then, read it back and set it to state
  }, []);

  return (
    <div>
      <h2>Filter Preference</h2>
      <p>Current: {prefs || "None"}</p>
    </div>
  );
}
