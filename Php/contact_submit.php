 <?php
include('connect.php'); // connect to DB

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form values safely
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);

    // Simple validation
    if (empty($name) || empty($email) || empty($message)) {
        echo "<script>alert('Please fill all fields.'); window.history.back();</script>";
        exit;
    }

    // Insert query
    $sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('✅ Message sent successfully!'); window.location.href='../contact.html';</script>";
    } else {
        echo "<script>alert('❌ Database error: " . mysqli_error($conn) . "'); window.history.back();</script>";
    }
}
?>