<?php
$counter_file = "counter.txt"; // File to store the counter value

// Read the current counter value
$counter = file_get_contents($counter_file);
$counter = intval($counter);

// Increment the counter by 1
$counter++;

// Save the updated counter value
file_put_contents($counter_file, $counter);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Visitor Counter</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <style>
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
    
    .counter {
      animation: pulse 1s infinite;
      font-size: 24px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Visitor Counter</h1>
  <p class="counter"><?php echo $counter; ?></p>
</body>
</html>
