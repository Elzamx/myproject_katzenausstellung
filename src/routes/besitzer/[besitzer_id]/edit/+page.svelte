<script>
  export let data;
  const b = data.besitzer;
</script>

<h1>Besitzer bearbeiten</h1>

<form method="POST" action="?/update">
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input name="name" class="form-control" value={b.name} type="text" />
  </div>

  <div class="mb-3">
    <label for="" class="form-label">E-Mail</label>
    <input name="email" class="form-control" value={b.email} type="email" />
  </div>

  <div class="mb-3">
    <label for="" class="form-label">Telefonnummer</label>
    <input name="phoneNumber" class="form-control" value={b.phoneNumber} type="number"  />
  </div>

  <button type="submit" class="btn btn-success">Änderungen speichern</button>
  <a href={"/besitzer/" + b._id} class="btn btn-secondary">Abbrechen</a>
</form>
