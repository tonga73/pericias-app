<template>    
    <q-card flat>
        <q-card-section class="text-center">
            <span class="text-h6 text-secondary text-uppercase">Partes</span>
        </q-card-section>
        <q-tabs
            v-model="tab"
            dense
            align="justify"
        >
            <q-tab class="text-primary" name="applicant" label="Actora" />
            <q-tab class="text-secondary" name="defendant" label="Demandada" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="applicant">
            <q-chip
                clickable
                size="md"
                class="q-my-none"
                text-color="white"
                color="grey-13"
            >Natasha Lira Lara</q-chip>
            <q-chip
                clickable
                size="md"
                class="q-my-none"
                text-color="white"
                color="grey-13"
            >Natasha Lira Lara</q-chip>
            </q-tab-panel>

            <q-tab-panel name="defendant">
            <q-chip
                clickable
                size="md"
                class="q-my-none"
                text-color="white"
                color="grey-13"
            >Yvonne Gutiérrez Huerta</q-chip>
            <q-chip
                clickable
                size="md"
                class="q-my-none"
                text-color="white"
                color="grey-13"
            >Natasha Lira Lara</q-chip>
            </q-tab-panel>
        </q-tab-panels>
    </q-card>
</template>

<script>
export default {
    name: 'PartsList',
    data() {
        return {
            tab: "applicant"
        }
    }
}
</script>