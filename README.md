🚀 Expert-Level User Management Portal
Cognifyz Full Stack Development Internship | Final Submission
Developer: Simanchala Jena

Institution: Driems University, Tangi, Cuttack

🌟 Project Overview
This project is a high-performance, secure User Management Dashboard built to fulfill the "Expert" requirements of the Cognifyz Internship. It demonstrates a complete CRUD (Create, Read, Update, Delete) lifecycle, secure authentication, and real-time external API integration.

🛠️ Core Features & Tasks Completed
Task 3 & 4 (Advanced UI/UX): Implemented a modern Glassmorphism dashboard using Bootstrap 5, FontAwesome icons, and real-time DOM updates for password strength validation.

Task 5 (REST API & CRUD): Developed a functional API at /api/users. Implemented Create (Registration), Read (User List), and Delete (User Removal) operations.

Task 6 (Database & Security): Integrated MongoDB via Mongoose. Secured user data using BcryptJS for one-way password hashing in a pre-save middleware hook.

Task 7 (External API): Utilized Axios to fetch live meteorological data from the Open-Meteo API, customized for the Cuttack/Tangi region.

Task 8 (Server Optimization): Secured HTTP headers using Helmet and implemented request logging with Morgan.

📸 Dashboard Preview
Live Weather: Real-time temperature sync in the navbar.

Security Meter: Dynamic password strength feedback.

User Management: Interactive table with instant delete capabilities.

⚙️ Installation & Setup
Clone the Repository:

Install Expert Dependencies:

Ensure MongoDB is Running:
Make sure your local MongoDB service is active on mongodb://127.0.0.1:27017.

Launch the Application:

Access the portal at: http://localhost:3000

📂 Architecture
🛡️ Security Protocols
Data Integrity: Automated hashing ensures plain-text passwords never enter the database.

Privacy: API endpoints are configured to exclude sensitive password strings from JSON responses.

Protection: Integrated Helmet middleware to defend against XSS and clickjacking attacks.