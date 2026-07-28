<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <title>Άθροισμα Αριθμών 1-10</title>
</head>
<body>
    <h1>Υπολογισμός Αθροίσματος</h1>
    <?php
    $sum = 0;
    for ($i = 1; $i <= 10; $i++) {
        $sum += $i;
    }
    echo "<p>Το άθροισμα των αριθμών από το 1 έως το 10 είναι: $sum</p>";
    ?>
</body>
</html>
