<script>
  let { katze } = $props();
</script>

<div class="movie-card">
  <div>
    <img class="img-fluid" src={katze.poster} alt="" />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/movies/" + katze._id}>{katze.title}</a>
    </div>
    <div>
      Name: {katze.name}
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
    border: 1px solid #555;
    height: 100%;
    background-color: #444;
    color: white;
  }
  .details {
    padding: 0.5em;
  }
  .title {
    font-weight: bold;
  }
</style>
