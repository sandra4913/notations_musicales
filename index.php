<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <title>Evaluation se perfectionner en JavaScript</title>
</head>

<body>
    <?php
    $notes = [
        'DO' => 'C', 'RE' => 'D', 'MI' => 'E', 'FA' => 'F', 'SOL' => 'G', 'LA' => 'A', 'SI' => 'B',
    ];

    $result = '';
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $note = $_POST['note_classique'] ?? '';
        if ($note == '') {
            $result = '<p>Aucune note choisie !</p>';
        } else if (array_key_exists($note, $notes)) {
            $result = "<p>La notation américaine pour la note {$note} est {$notes[$note]}.</p>";
        } else {
            $result = '<p>Note inconnue.</p>';
        }
        echo $result;
        return;
    }
    ?>
    <script src="script.js"></script>
    <div id='div'></div>
</body>

</html>