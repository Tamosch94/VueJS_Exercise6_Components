<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <app-server-status></app-server-status>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-server-list-group></app-server-list-group>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-server-details></app-server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <app-server-manager></app-server-manager>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>

</style>
