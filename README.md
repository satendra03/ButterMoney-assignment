# User Directory Application (ButterMoney)

A modern, responsive React application for managing team members. This dashboard allows users to view a list of members fetched from an API, search through them, and add new members with persistent local storage.

**Submitted By:** Satendra K. Parteti

**Live Link:** https://buttermoney-assignment.vercel.app/

## 📋 Assignment Details

The objective of this assignment was to build a User Management System that demonstrates:

- **API Integration:** Fetching and displaying data from an external source.
- **State Management:** Efficiently managing application state (Users, Loading, Errors).
- **Form Handling:** Creating forms with real-time validation.
- **Persistence:** Ensuring added data survives page reloads.
- **Modern UI:** Implementing a clean, responsive, and accessible user interface.

## ✨ Features

- **Member List:** Displays a combined list of users from the JSONPlaceholder API and local storage.
- **Real-time Search:** Filter members instantly by Name or Email.
- **Add New Member:** a modal form to add new users with robust validation:
  - Name: Minimum 5 characters.
  - Email: Valid email format.
  - Phone: Minimum 10 digits, numbers only.
- **Data Persistence:** Newly added members are saved to the browser's Local Storage.
- **Responsive Design:** A layout that adapts seamlessly to desktop and mobile screens.
- **Feedback:** Toast notifications for successful actions and error handling for API failures.

## 🛠️ Tech Stack

- **Frontend Framework:** React (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **UI Components:** ShadcnUI
- **Icons:** Lucide React
- **Validation:** Zod

## 🚀 Setup & Run Instructions

### Prerequisites

- Node.js

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/satendra03/ButterMoney-assignment.git
   cd ButterMoney-assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Project

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to the URL shown (usually `http://localhost:5173`).

### Building for Production

To create a production-ready build:

```bash
npm run build
```

## 📝 Assumptions

- **Hybrid Data Source:** The app assumes that API users are "read-only" in terms of persistence (since we can't write back to JSONPlaceholder), while locally added users are persisted in Local Storage.
- **API Availability:** It is assumed that `jsonplaceholder.typicode.com` is available. Basic error handling is in place if it fails.
- **Unique Constraints:** While the ID generation for local users is simple (timestamp/random based), we assume no collisions for this scope.

## 🖼️ UI Reference

The UI features a clean dashboard layout:

- **Header:** Title and "Add User" button.
- **Stats Bar:** Search input on the left, Total Members count on the right.
- **List View:** A vertical list of member cards displaying Name, Email, and Phone.
- **Add Member Modal:** A centered dialog with validation error messages.

**Acknowledgement:** The UI is referenced from [Dribbble](https://dribbble.com/shots/21103831-Organization-Access-Control-Team-Members-List).

---
