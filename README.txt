 SEVEN 8 SIX ASSOCIATES REAL ESTATE WEBSITE
===========================================

Developed by: Maryam Muneer  
Institution: NED University  
Course: Web Development Project  
Date: November 9, 2025  
Version: 1.0.0

------------------------------------------------------------
PROJECT OVERVIEW
------------------------------------------------------------
Seven 8 Six Associates is a responsive and modern real estate website that allows users to explore company details, contact property consultants, and access an admin dashboard.  
The project integrates *HTML, CSS, JavaScript (Frontend)* and *PHP with MySQL (Backend)* to provide a fully functional, professional web experience.

The website demonstrates:
- Responsive layout for all devices  
- Animated navigation with hamburger menu  
- Contact form validation and database storage  
- Admin login connected to a MySQL database  
- Clean and professional UI design  

------------------------------------------------------------
PROJECT STRUCTURE
------------------------------------------------------------
├── index.html              # Homepage with hero section
├── about.html              # About company section
├── contact.html            # Contact form page
├── dashboard.html          # Admin dashboard
├── login.html              # Admin login page
│
├── css/
│   └── style.css           # Main stylesheet
│
├── js/
│   └── script.js           # JavaScript (menu toggle, validation, animations)
│
├── php/
│   ├── connect.php         # MySQL database connection
│   ├── login.php           # Handles admin login
│   └── contact-process.php # Stores contact form messages into database
│
├── images/
│   └── logo.jpg            # Website logo and background assets
│
└── database.sql            # MySQL database export file

------------------------------------------------------------
FEATURES
------------------------------------------------------------
1️⃣ Responsive Design  
   - Works across desktop, tablet, and mobile screens  
   - Includes an animated hamburger menu for smaller devices  

2️⃣ User Interface  
   - Modern, professional design with animations  
   - Hero section with real estate-themed background  
   - Clean footer with social media icons and contact info  

3️⃣ Functionality  
   - Contact form with JavaScript + PHP validation  
   - Admin login system connected to MySQL  
   - Dashboard page for authenticated users  

------------------------------------------------------------
SETUP INSTRUCTIONS
------------------------------------------------------------
1. Install *XAMPP* on your system.  
2. Copy the project folder to:  
   ➤ C:\xampp\htdocs\seven8six_realestate
3. Start *Apache* and *MySQL* from the XAMPP Control Panel.  
4. Open browser and visit:  
   ➤ http://localhost/seven8six_realestate/index.html
5. Open *phpMyAdmin* and create a database named:  
   ➤ seven8six_db
6. Import the provided *database.sql* file into that database.  
7. Default login credentials:
   - Username: admin  
   - Password: 1234  

------------------------------------------------------------
DATABASE DETAILS
------------------------------------------------------------
Database Name: seven8six_db  

Tables Included:
1. users – stores admin login credentials  
2. contacts – stores contact form submissions  

SQL for creating the contacts table:
------------------------------------------------
CREATE TABLE contacts (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
------------------------------------------------

------------------------------------------------------------
BACKEND DESCRIPTION
------------------------------------------------------------
connect.php → Connects the website to MySQL using localhost credentials.  
login.php → Validates user credentials against the users table.  
contact-process.php → Handles the "Contact Us" form and inserts user messages into the contacts table.  

------------------------------------------------------------
TECHNOLOGIES USED
------------------------------------------------------------
Frontend  : HTML5, CSS3, JavaScript  
Backend   : PHP (Procedural)  
Database  : MySQL (phpMyAdmin)  
Icons     : Remix Icon CDN  
Server    : XAMPP Localhost  

------------------------------------------------------------
KNOWN ISSUES
------------------------------------------------------------
- Currently, no live property listings are included.  
- Only one admin login credential (admin / 1234).  
- Dashboard functionality is static (no CRUD operations yet).  

------------------------------------------------------------
FUTURE IMPROVEMENTS
------------------------------------------------------------
1. Implement CRUD (Create, Read, Update, Delete) for property listings.  
2. Add registration & password recovery for users.  
3. Enable search and filter for properties.  
4. Add image upload for properties.  
5. Secure login with password hashing.  
6. Improve SEO and HTTPS integration.  

------------------------------------------------------------
CONTACT INFORMATION
------------------------------------------------------------
Seven 8 Six Associates  
Email   : seven8six@gmail.com  
Phone   : +92 300 1234567  
Address : Office #12, Main Boulevard, Bahria Town, Lahore  
Developer: Maryam Muneer  
Institution: NED University of Engineering and Technology  

------------------------------------------------------------
END OF FILE
------------------------------------------------------------