"use client";

interface Draft {
  id: number;
  text: string;
}

export function saveDraft(text: string): void {
  // TODO: Open 'BlogDrafts' DB, version 1
  // On upgrade, create 'drafts' object store with 'id' as keyPath
  // On success, add a draft with id (timestamp) and provided text
}

export function loadDrafts(callback: (drafts: Draft[]) => void): void {
  // TODO: Open 'BlogDrafts' DB, version 1
  // On success, read all drafts from 'drafts' store and pass to callback
}
