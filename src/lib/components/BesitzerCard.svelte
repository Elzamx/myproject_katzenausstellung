<script>
  let { b } = $props();
</script>

<div class="card p-3">
  <div class="title">
    <a href={"/besitzer/" + b._id}>{b.name}</a>
    <!-- Link to the movie details -->
  </div>

  <p class="mb-1"><b>Email:</b> {b.email}</p>
  <p><b>Telefon:</b> {b.phoneNumber}</p>
</div>

<style>
  .card {
    border-radius: 10px;
    background-color: rgb(241, 227, 227);
  }
  .card:hover {
    /* beim drüberfahren mit Maus wird card grösser */
    box-shadow: 0 8px 24px lightgray;
    transform: translateY(-4px) scale(1.02); /* verschiebt Karte leicht nach oben & vergrössert sie */
    transition: all 0.2s; /* sanfter Übergang */
  }
  .title {
    font-weight: bold;
    margin-bottom: 1.0em;
  }
  .title a:hover { 
    color: #3949ab; /*andere Farbe beim Hover/dürüberfahren */
  }
</style>
