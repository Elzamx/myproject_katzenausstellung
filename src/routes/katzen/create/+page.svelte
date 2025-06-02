<script>
  let { form } = $props();
</script>

<h1>Füge deine Katze hinzu</h1>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input name="name" class="form-control" type="text" /> <!-- form-control ist Bootstrap-Klasse für Input-Felder und type ist ob Text oder Zahl schreiben kannst -->
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Rasse</label>
    <input name="rasse" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Alter</label>
    <input name="alter" class="form-control" type="number" />
  </div>
    <div class="mb-3">
    <label for="" class="form-label">Geschlecht</label>
    <input name="geschlecht" class="form-control" type="text" />
  </div>
  <button type="submit" class="btn btn-primary my-btn">Speichern</button>
</form>

{#if form?.success}
  <p class="text-success mt-3">Katze wurde erfolgreich hinzugefügt</p>
{/if}

<div class="backbt-container">
  <!-- damit ich button rechts habe -->
<a href="/katzen" class="btn btn-secondary">Zurück zur Übersicht</a>
</div>
