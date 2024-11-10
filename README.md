<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Pictures of Ducks!</title>
</head>
<body>

    <nav>
        <!-- Main Title -->
        <div class="container has-text-centered">
            <h1 class="main-title">Random Pictures of Ducks!</h1>      
        </div>

        <!-- Navbar with One Color Button -->
        <div class="navbar">
            <a href="/" class="navbar-item button is-primary">Home</a>
            <a href="/add" class="navbar-item button is-primary">Upload</a>
            <a href="/contact" class="navbar-item button is-primary">Contact</a>
        </div>

        <!-- Centered Duck Section -->
        <div class="container has-text-centered">
            <h2 class="subtitle">Here is your Duck!</h2>      
        </div>

        <!-- Duck Image -->
        <div class="container has-text-centered">
            <img id="image" src="api/randomimg?t=1731265525077" alt="Random Duck Image">
        </div>

        <!-- Button to Get Another Duck -->
        <div class="container has-text-centered">
            <a class="button is-primary" onclick="changeImage();">Give me another duck!</a>
        </div>
    </nav>

</body>

<style>
