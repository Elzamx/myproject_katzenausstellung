<script>
  import MovieCard from "$lib/components/MovieCard.svelte";
  let { data } = $props();
</script>

<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>
<div>
  <a href="/movies/create" class="btn btn-primary">Add New Movie</a>
</div>
<div class="row mt-3">
  {#each data.movies as movie}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <MovieCard {movie}></MovieCard>
    </div>
  {/each}
</div>
