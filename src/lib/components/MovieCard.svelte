<script>
  let { katze } = $props();
</script>

<div class="cat-card">
  <div>
    <a href={"/movies/" + katze._id}>
      <!-- Link to the movie details via picture-->
      <img class="img-fluid cat-image" src={katze.poster} alt="" />
    </a>
  </div>
  <div class="details">
    <div class="title">
      <a href={"/movies/" + katze._id}>{katze.name}</a>
      <!-- Link to the movie details -->
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
  .cat-card {
    border: black 1px solid; /* Schwarzer Rand */
    height: 100%;
    background-color: white;
    color: black;
  }
  .cat-card:hover {
    /* beim drüberfahren mit Maus wird card grösser */
    box-shadow: 0 8px 24px lightgray;
    transform: translateY(-4px) scale(1.02); /* verschiebt Karte leicht nach oben & vergrössert sie */
    transition: all 0.2s; /* sanfter Übergang */
  }
  .details {
    padding: 0.5em;
  }
  .title {
    font-weight: bold;
  }

  .title a:hover {
    text-decoration: underline; /* Unterstrich beim Hover/drüberfahren */
    color: #3949ab; /*andere Farbe beim Hover/dürüberfahren */
  }
  .cat-image {
    width: 350px;
    height: 350px;
    object-fit: cover; /* Bild füllt den Container aus */
  }
</style>
