<script>
  let { katze } = $props();
</script>

<div class="movie-card">
  <div>
    <a href={"/movies/" + katze._id}> <!-- Link to the movie details via picture-->
    <img class="img-fluid" src={katze.poster} alt="" />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/movies/" + katze._id}>{katze.name}</a> <!-- Link to the movie details -->
    </div>
    <div>
      Rasse: {katze.rasse}
    </div>
    <div>
      Alter: {katze.alter}
    </div>
    <div>
      Geschlecht: {katze.geschlecht}
    </div>
  </div>
</div>

<style>
  .movie-card {
    border: 3px solid black;
    height: 100%;
    background-color: white;
    color: black;
  }
  .details {
    padding: 0.5em;
  }
  .title {
    font-weight: bold;
  }
  .title a {  /* Passt Link an zb Unterstrich */
    text-decoration: none; 
    color: black; 
    font-size: 1.1em;
  }
  .title a:hover {
    text-decoration: underline; /* Unterstrich beim Hover/drüberfahren */
    color: #3949ab;           /*andere Farbe beim Hover/dürüberfahren */
  }
</style>
