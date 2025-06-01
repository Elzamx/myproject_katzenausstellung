<script>
  export let data;
  let katze = data.katze;
</script>

<h1 class="text-center">{katze.name}</h1>

<div class="row mt-3">
  <div class="col-3">
    <img class="img-fluid" src={katze.poster} alt="" />
  </div>

  <div class="col">
    <p>Rasse: {katze.rasse}</p>
    <p>Alter: {katze.alter}</p>
    <p>Geschlecht: {katze.geschlecht}</p>

    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={katze._id}>
      <button class="btn btn-danger">Katze entfernen</button>
    </form>  
  </div>
</div>
<div class="backbt-container"> <!-- damit ich button zentrieren kann-->
  <a href="/movies" class="btn btn-secondary">Zurück zur Übersicht</a>
</div>

<style>
.backbt-container {
  display: flex;
  justify-content: left;
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>

