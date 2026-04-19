Local Trade & Service Manager

A practical, offline-friendly web application designed to help local traders and service workers track sales, debts, credits, incomplete jobs, deadlines, and reminders — all in one place.

---

Overview

This project focuses on solving a real-world problem: helping small business owners manage daily transactions and obligations without relying on memory, paper records, or fragmented tools.

The application is built with simplicity, speed, and reliability in mind. It prioritizes clarity over complexity and ensures users can quickly answer critical questions like:

- Who owes me money?
- What do I owe others?
- What jobs are incomplete?
- What needs attention today?

---

Core Features (MVP)

- Customer management (create, update, view)
- Sales and transaction tracking
- Debt and partial payment tracking
- Incomplete job/work tracking
- Due dates and reminders
- Overdue detection
- Payment history timeline
- Simple dashboard overview
- Search and filtering

---

Tech Stack

Frontend

- React (with Vite)
- CSS 

Backend

- Node.js
- Express

Database

- MySQL

Tools

- Git & GitHub (version control)
- VS Code / Acode + Termux (development)

---

Project Structure

/my-app
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── store/
│   ├── utils/
│   └── styles/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── .env
├── package.json
└── README.md

---

Key Design Principles

- Offline-first mindset: Works even with unstable internet
- Speed over complexity: Fast data entry is critical
- Clarity: Users should instantly understand their financial position
- Trust: Transparent records and history
- Mobile-first: Optimized for everyday phone usage

---

Core Screens

- Dashboard (overview of debts, reminders, and activity)
- Customer List
- Customer Detail (main working screen)
- Add Sale / Transaction
- Payment Entry
- Reminders

---

Getting Started

Prerequisites

- Node.js
- MySQL
- Git

Installation

1. Clone the repository:
   
   git clone https://github.com/PhanthomElite001/TradeNote.git

2. Install dependencies:
   
   cd my-app
npm install

3. Set up environment variables:
   Create a ".env" file and configure:
   
   DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=

4. Run the backend:
   
   cd server
npm run dev

5. Run the frontend:
   
   cd ../
npm run dev

---

Development Approach

This project follows a phased build strategy:

1. Core data flow (customers, transactions)
2. Payment and balance logic
3. UI and usability improvements
4. Reminder and deadline system
5. Offline support and syncing
6. Production hardening

---

Future Improvements

- Offline sync engine (IndexedDB)
- Push notifications / SMS reminders
- Export (PDF, CSV)
- Multi-device sync
- Analytics and reporting
- Role-based access

---

Contributing

Contributions are welcome. If you plan to make significant changes, open an issue first to discuss the direction.

---

License

This project is not open source and may require payment for distribution and use of code

---

Final Note

This project is built with a clear goal: to create a tool that genuinely helps people manage real business challenges in simple environments. Every design and technical decision should support that mission.