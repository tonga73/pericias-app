<template>
    <div class="row">
        <div class="col-10 offset-1 q-py-md">
            <q-select bg-color="white" clear-icon="" rounded outlined bottom-slots v-model="model" :options="options" label="Nº Expediente, Nombre y Apellido, Abogado, Juzgado..." counter maxlength="12" :dense="dense" :options-dense="denseOpts">
            <template v-slot:before>
                <q-icon name="find_in_page" />
            </template>

            <template v-slot:append>
                <q-icon v-if="model !== ''" name="close" @click.stop="model = ''" class="cursor-pointer" />
                <q-icon name="search" @click.stop />
            </template>

            <template v-slot:hint>
                Field hint
            </template>
            </q-select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            model: null,
            options: [
                '12345 Patricia N. Martin', '243546 Stella Belyakova', '354679 Dyonis Portillo Barraza', '867564 Eduarda Cunha Araujo', '756453 Arabella Gawkroger'
            ],
            dense: false,
            denseOpts: false,
        }
    }
}
</script>