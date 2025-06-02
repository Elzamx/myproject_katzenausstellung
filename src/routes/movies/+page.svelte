<script>
  import MovieCard from "$lib/components/MovieCard.svelte";
  export let data;

  let search = ""; // Suchbegriff als Variable speichern
  $: filteredKatzen = data.katzen.filter(
    // $ sorgt, dass filteredKatzen automatisch aktualisiert wird, wenn sich data.katzen oder search ändert
    (
      katze, // filter() geht alle Katzen durch und prüft Suchbegriff und verwandelt alles in Kleinbuchstaben damit Suche nicht gross/kleinschreibungsabhängig ist
    ) =>
      katze.name.toLowerCase().includes(search.toLowerCase()) ||
      (katze.beschreibung &&
        katze.beschreibung.toLowerCase().includes(search.toLowerCase())),
  );
</script>

<div>
  <h1 class="main-title">Entdecke die Katzencommunity</h1>
  <!-- Suchfeld hinzufügen / bind:value wird inhalt des Feldes automatisch in Variable search gespeichert-->
<div class="search-container">
  <input
    type="text"
    placeholder="Suche nach einer Katze..."
    bind:value={search}
    class="form-control"
    style= "margin: 0 auto 1em auto;" 
  /> <!-- max-width: 400px; damit Suchfeld nicht zu breit wird, margin: 0 auto 2em auto; damit es zentriert ist und Abstand nach unten hat -->
</div>
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
  {#each filteredKatzen as katze}
    <!-- nur die Katzen, die zum Suchbegriff passen -> bei data.katzen wird nur immer die Komplette Liste angezeigt, egal was im Suchfeld ist -->
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
  .search-container {
    display: flex;
    margin-bottom: 1em;
  }
</style>
