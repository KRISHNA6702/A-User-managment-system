🚀 Node.js User Management App (CRUD)

A simple CRUD (Create, Read, Delete) application built using Node.js, Express, MongoDB, and EJS.
This project demonstrates basic backend operations and server-side rendering using modern ES Modules.

✨ Features
➕ Create Users (Name, Email, Image)
📖 Read All Users
❌ Delete Users
🎨 Server-side rendering with EJS
⚡ Clean Express setup using ES Modules
🛠️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Templating Engine: EJS
Architecture: MVC-inspired structure
📂 Project Structure
/models        → User schema  
/views         → EJS templates (index, read)  
/public        → Static files  
app.js         → Main server file  


⚙️ How It Works

➕ Create User
Form submission on homepage (/)
Data sent to /create
Stored in MongoDB
📖 Read Users
/read route fetches all users
Displays them using EJS template
❌ Delete User
/delete/:id
Deletes user by ID
Re-renders updated list

🔑 Environment Variables (Recommended)
PORT=3000

📌 Key Learning Outcomes
Understanding CRUD operations
Working with MongoDB & Mongoose
Handling form data in Express
Server-side rendering using EJS
Structuring a backend project


⚠️ Current Limitations
❌ No validation (empty/invalid inputs allowed)
❌ No update functionality
❌ No error handling
❌ No unique email checks
❌ Redirect logic issue in /create
🚀 Future Improvements
✏️ Add Update (Edit user)
🔒 Add validation & error handling
🌐 Convert to REST API
🎨 Add frontend framework (React)
🔍 Add search/filter functionality
👨‍💻 Author

Krishna Batra

⭐ Star this repo if you found it helpful!
