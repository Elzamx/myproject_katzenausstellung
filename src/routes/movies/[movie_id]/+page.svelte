<script>
  export let data;
  let katze = data.katze;
</script>

<h1 class="text-center">{katze.name}</h1>

<div class="row mt-3">
  <div class="col-12 text-center mb-3" > <!-- Katzenbild in der Mitte zentriert -->
    <img class="img-fluid cat-image" src={katze.poster} alt="" />
  </div>

  <div class="col-12 text-center mb-3">
    <p><b>Rasse:</b> {katze.rasse}</p>
    <p><b>Alter:</b> {katze.alter}</p>
    <p><b>Geschlecht:</b> {katze.geschlecht}</p>

    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={katze._id} />
      <button class="btn btn-danger">Katze entfernen</button>
    </form>
  </div>
</div> 
 
<div class="backbt-container">
  <!-- damit ich button zentrieren kann-->
  <a href="/movies" class="btn btn-secondary">Zurück zur Übersicht</a>
</div>

<style>
.cat-image {
  width: 350px;
  height: 350px;
  border-radius: 8px; /* Abgerundete Ecken */
}
</style>

