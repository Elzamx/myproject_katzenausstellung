<script>
  import MovieCard from "$lib/components/MovieCard.svelte";
  let { data } = $props();
</script>

<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>
<div>
  <a href="/movies/create" class="btn btn-primary">Add New Cat</a>
</div>
<div class="row mt-3">
  {#each data.katzen as katze}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <MovieCard {katze}></MovieCard>
    </div>
  {/each}
</div>
