<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$pickup = $_POST['pickup'];
$destination = $_POST['destination'];
$goods = $_POST['goods'];

echo "<h1>Booking Received</h1>";

echo "<p><strong>Name:</strong> $name</p>";
echo "<p><strong>Phone:</strong> $phone</p>";
echo "<p><strong>Pickup:</strong> $pickup</p>";
echo "<p><strong>Destination:</strong> $destination</p>";
echo "<p><strong>Goods:</strong> $goods</p>";

?>