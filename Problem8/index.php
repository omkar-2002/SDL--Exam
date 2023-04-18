<?php
    // Connect to MySQL database
    $conn = mysqli_connect("localhost", "root", "", "users");
    
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['subject']) && isset($_POST['complaint'])) {
        // Get form data
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $subject = $_POST['subject'];
        $complaint = $_POST['complaint'];
    
        // Insert user into database
        $sql = "INSERT INTO user (name, email, password, subject, complaint) VALUES ('$name', '$email', '$password', '$subject', '$complaint')";
    
        if (mysqli_query($conn, $sql)) {
            echo "Complaint created successfully";
            echo "<a href='index.html'><button type='button'>Back</button></a>";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    } else {
        echo "Form data not set";
    }
    
    
    mysqli_close($conn);
?>
