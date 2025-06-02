<script>
  export let data;
  const katze = data.katze;
</script>

<h1>Katze bearbeiten</h1>

<form method="POST" action="?/update">
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input name="name" class="form-control" value={katze.name} type="text" required />
  </div>

  <div class="mb-3">
    <label for="" class="form-label">Rasse</label>
    <input name="rasse" class="form-control" value={katze.rasse} type="text" />
  </div>

  <div class="mb-3">
    <label for="" class="form-label">Alter</label>
    <input name="alter" class="form-control" value={katze.alter} type="number" />
  </div>

  <div class="mb-3">
    <label for="" class="form-label">Geschlecht</label>
    <input name="geschlecht" class="form-control" value={katze.geschlecht} type="text" />
  </div>

  <div class="mb-3">
    <label for="" class="form-label">Bild-URL</label>
    <input name="poster" class="form-control" value={katze.poster} type="text" />
  </div>

  <button type="submit" class="btn btn-success">Änderungen speichern</button>
  <a href={"/katzen/" + katze._id} class="btn btn-secondary">Abbrechen</a>
</form>