<script>
  import MovieCard from "$lib/components/MovieCard.svelte";
  let { data } = $props();
</script>

<div>
  <h1 class="main-title">Entdecke die Katzencommunity</h1>
  <p style="margin-bottom: 1em;">
    Hier präsentieren stolze Katzenbesitzer*innen ihre ganz besonderen
    Lieblingsstars. Von gemütlichen Couch-Katern bis hin zu selbstbewussten
    Showkatzen - klick dich durch unsere Sammlung und entdecke die
    unterschiedlichsten Persönlichkeiten auf vier Pfoten!
  </p>
</div>

<div class="button-container">
  <!-- Container für button, um button in mitte platzieren zu können -->
  <a href="/movies/create" class="btn btn-primary my-btn">Katze hinzufügen</a>
  <!-- btn btn-primary ist Bootstrap-Style, my-btn ist mein style des Buttons (in css file) -->
</div>

<div class="row mt-3">
  <!-- mt-3 ist Bootstrap-Klasse für margin-top -->
  {#each data.katzen as katze}
    <!-- durchläuft alle Katzen im Array data.katzen -->
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <!-- Karten in verschiedenen Bildschirmgrössen und unterschiedlich breit -->
      <MovieCard {katze}></MovieCard>
      <!-- MovieCard-Komponente für jede Katze -->
    </div>
  {/each}
</div>

<p class="note"><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>

<style>
  .button-container {
    display: flex;
    justify-content: center; /* Zentriert den button horizontal */
    margin-bottom: 2em; /* Abstand nach unten */
  }

  .note {
    text-align: right;
    margin-bottom: 1em;
    font-size: small;
  }
</style>
