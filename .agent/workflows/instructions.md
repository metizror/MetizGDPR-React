---
description: Instructions for creating shopify public app using react and node
---

# Shopify Public App Instructions

## Objective
Create a **Shopify Public App** using **React** for the frontend and **Node.js** for the backend.

## Mandatory Constraints
- **Do NOT use Shopify CLI Node templates**
- **Do NOT scaffold the project using `shopify app create`**
- Use a **custom, manually defined folder structure**
- App must be compatible with Shopify **Public App** requirements

## Tech Stack
### Frontend
- React (plain React or framework-based is fine unless specified)
- Shopify **Polaris** for all UI components
- Polaris must be used consistently (no random UI libraries)

### Backend
- Node.js
- Express (preferred unless stated otherwise)
- Shopify Admin API integration
- OAuth flow implemented manually (no CLI magic)

## Project Structure
- Use a **custom folder structure**
- Frontend and backend should be clearly separated
- Avoid tightly coupling frontend build tools with backend logic

Example (based on current setup):
```
/
├── client/           # React Frontend (Vite)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── server/           # Node.js Backend (Express)
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
├── package.json      # Root package (optional)
└── .agent/           # Agent Instructions
    └── workflows/
```

## App Requirements
- Implement Shopify OAuth authentication flow
- Handle app installation and uninstallation webhooks
- Secure API calls using Shopify access tokens
- Follow Shopify public app guidelines

## UI Guidelines
- Use **Shopify Polaris** components exclusively
- Ensure UI follows Shopify admin design patterns
- App should feel native inside Shopify Admin

## Code Quality Expectations
- Clear separation of concerns
- Readable, maintainable code
- No unnecessary abstractions
- No dead files or placeholder junk
