<script>
  export let data;
  let katze = data.katze;
</script>

<h1 class="text-center">{katze.name}</h1>

<div class="row mt-3">
  <div class="col-12 text-center mb-3">
    <!-- Katzenbild in der Mitte zentriert -->
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

<div class="d-flex justify-content-end gap-2 my-3">
  <!-- Bootstrap Klasse für buttons nebeneinander & rechts -->
  <a href={"/movies/" + katze._id + "/edit"} class="btn btn-primary"
    >Katzendaten bearbeiten</a
  >
  <a href="/movies" class="btn btn-secondary">Zurück zur Übersicht</a>
</div>

<style>
  .cat-image {
    width: 350px;
    height: 350px;
    border-radius: 8px; /* Abgerundete Ecken */
  }
</style>
