# Hiring Lab — Invoice Dashboard

Welcome. You have 30 minutes.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Your tasks

The app is an internal invoice dashboard. It has bugs and a missing feature.
Your job is to find the bugs, fix them, and implement the feature.

### Bugs

There are **4 bugs** in the codebase. They range from easy to hard.
Some are visible immediately. Some only appear under specific interactions.
Start by using the app — the bugs will surface.

### Feature

Once you have fixed the bugs (or made progress), implement the following:

> Add a **"Mark as Paid"** button to the invoice detail panel.
> - Only show it when the invoice is not already paid
> - Clicking it should update the status immediately in the UI
> - The status should persist across page refreshes using localStorage

### Rules

- You may use any tools, including AI assistants
- Each bug fix must be a separate commit with a meaningful message
- The feature must be a separate commit
- CI must pass before you are done — check the Actions tab
