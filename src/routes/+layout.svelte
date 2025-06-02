<script>
  import "../styles.css";
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg my-navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Homepage</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/katzen"
            >Katzen</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/besitzer">Besitzer</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-3">
  <!-- mt-3 ist Bootstrap-Klasse für margin-top -->
  {@render children()}
  <!-- Rendern -> hier wird der Inhalt der aktuellen Seite angezeigt -->
</div>

<style>
  .my-navbar {
    background-color: #6d4c41;
  }
</style>
