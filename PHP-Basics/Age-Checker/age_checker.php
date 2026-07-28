

<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <title>Έλεγχος Ηλικίας για Ψήφο</title>
</head>
<body>
    <h1>Έλεγχος Ηλικίας για Ψήφο</h1>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="age">Εισάγετε την ηλικία σας:</label>
        <input type="number" id="age" name="age">
        <input type="submit" value="Υποβολή">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $age = $_POST["age"];

        if (!is_numeric($age) || $age < 0) {
            echo "<p>Η ηλικία πρέπει να είναι ένας θετικός αριθμός.</p>";
        } else {
            if ($age >= 18) {
                echo "<p>Για ηλικία: $age, έχετε δικαίωμα ψήφου.</p>";
            } else {
                echo "<p>Για ηλικία: $age, δεν έχετε δικαίωμα ψήφου.</p>";
            }
            

        }
    }
    ?>
</body>
</html>


