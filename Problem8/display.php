<?php
    // Connect to MySQL database
    $conn = mysqli_connect("localhost", "root", "", "users");
    
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    // Select all users from database
    $sql = "SELECT * FROM user";
    
    $result = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($result) > 0) {
        // Display table headers
        echo "<table><tr><th>Name</th><th>Email</th><th>Subject</th><th>Complaint</th></tr>";
        
        // Loop through each row in the result set and display data
        while($row = mysqli_fetch_assoc($result)) {
            echo "<tr><td>" . $row["name"] . "</td><td>" . $row["email"] . "</td><td>" . $row["subject"] . "</td><td>" . $row["complaint"] . "</td></tr>";
        }
        
        echo "</table>";
    } else {
        echo "No complaints found.";
    }
    
    mysqli_close($conn);
?>
