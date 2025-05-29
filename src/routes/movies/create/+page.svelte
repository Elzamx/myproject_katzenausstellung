<script>
  let { form } = $props();
</script>

<a href="/movies">Back</a>
<h1>Füge eine Katze hinzu</h1>
<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input name="name" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Rasse</label>
    <input name="rasse" class="form-control" type="number" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Alter</label>
    <input name="alter" class="form-control" type="text" />
  </div>
    <div class="mb-3">
    <label for="" class="form-label">Geschlecht</label>
    <input name="geschlecht" class="form-control" type="text" />
  </div>
  <button type="submit" class="btn btn-primary">Katze hinzufügen</button>
</form>

{#if form?.success}
  <p>Katze hinzugefügt</p>
{/if}
