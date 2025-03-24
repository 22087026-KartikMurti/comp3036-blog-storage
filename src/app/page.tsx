"use client";

import { useEffect, useState } from "react";
import Draft from "./components/Draft";
import SavePrefs from "./components/SavePrefs";
import { loadDrafts, saveDraft } from "./lib/draftsDB";

export default function Home() {
  const [drafts, setDrafts] = useState<{ id: number; text: string }[]>([]);
  const [sessionStatus, setSessionStatus] = useState<string>("Checking...");

  useEffect(() => {
    fetch("/api/check-session").then((res) =>
      res.json().then((data) => setSessionStatus(data.message))
    );
    loadDrafts(setDrafts);
  }, []);

  return (
    <main>
      <h1>Blog Storage Exercise</h1>
      <button onClick={() => fetch("/api/login", { method: "POST" })}>
        Login (Sets Cookie)
      </button>
      <p>Session: {sessionStatus}</p>
      <SavePrefs />
      <Draft />
      <div>
        <h2>Saved Drafts (IndexedDB)</h2>
        <button onClick={() => saveDraft("New draft " + Date.now())}>
          Save Draft
        </button>
        <ul>
          {drafts.map((d) => (
            <li key={d.id}>{d.text}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
