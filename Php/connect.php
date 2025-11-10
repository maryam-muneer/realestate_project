<?php
// Simple database connection
$servername = "localhost";
$username = "root";  // Default XAMPP username
$password = "";      // No password for local setup
$dbname = "seven8six_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// echo "Connected successfully";  // optional test
?>