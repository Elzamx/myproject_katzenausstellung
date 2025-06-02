<script>
    import BesitzerCard from "$lib/components/BesitzerCard.svelte";
    let { data } = $props();
</script>

<div>
    <h1 class="main-title">Unsere stolzen Besitzer*innen</h1>
    <p style="margin-bottom: 1em;">
        Hier findest du eine Übersicht aller registrierten Katzenbesitzer*innen
        - von liebevollen Dosenöffnern bis zu leidenschaftlichen
        Ausstellungsprofis.
    </p>
</div>

<div class="button-container">
    <a href="/besitzer/create" class="btn btn-primary my-btn">Besitzer hinzufügen</a>
</div>

<div class="row mt-3">
    {#each data.besitzer as b}
        <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
            <BesitzerCard {b}></BesitzerCard>
        </div>
    {/each}
</div>

<p class="note"><i>Daten generiert mit ChatGPT</i></p>

<style>
    .button-container {
        display: flex;
        justify-content: center;
        margin-bottom: 2em;
    }

    .note {
        text-align: right;
        margin-bottom: 1em;
        font-size: small;
    }
</style>
