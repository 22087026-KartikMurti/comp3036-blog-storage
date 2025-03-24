"use client";
import { useEffect, useState } from "react";

export default function Draft() {
  const [draft, setDraft] = useState<string>("");

  useEffect(() => {
    // TODO: Save 'draft' as 'My temp draft...' in sessionStorage when component mounts
    // Then, read it back and set it to state
  }, []);

  return (
    <div>
      <h2>Tab Draft</h2>
      <p>Draft: {draft || "None"}</p>
    </div>
  );
}
