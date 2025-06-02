<script>
  export let data;
  let b = data.besitzer;
</script>

<h1>Besitzer-Details</h1>

<div class="card p-4">
  <h3 class="mb-3">{b.name}</h3>
  <p class="mb-1"><b>Email:</b> {b.email}</p>
  <p><b>Telefon:</b> {b.phoneNumber}</p>

  <form method="POST" action="?/delete">
    <input type="hidden" name="id" value={b._id} />
    <button class="btn btn-danger">Besitzer*in entfernen</button>
  </form>
</div>

<div class="d-flex justify-content-end gap-2 my-3"> <!-- Bootstrap Klasse für buttons nebeneinander & rechts -->
  <a href="/besitzer" class="btn btn-secondary">Zurück zur Übersicht</a>
  <a href={`/besitzer/${b._id}/edit`} class="btn btn-primary">Bearbeiten</a>
</div>
<!-- braucht ${b._id} um zur korrekten Bearbeitungsseite weitergeleitet zu werden -->
