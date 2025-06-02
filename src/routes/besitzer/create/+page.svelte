<script>
  let { form } = $props();
</script>

<h1>Besitzer hinzufügen</h1>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input name="name" class="form-control" type="text" />
  </div>

  <div class="mb-3">
    <label for="" class="form-label">E-Mail</label>
    <input name="email" class="form-control" type="email" />
  </div>

  <div class="mb-3">
    <label for="" class="form-label">Telefonnummer</label>
    <input name="phoneNumber" class="form-control" type="number" />
  </div>

  <button type="submit" class="btn btn-primary my-btn">Speichern</button>
</form>

{#if form?.success}
  <p class="text-success mt-2">Besitzer erfolgreich hinzugefügt</p>
{/if}
