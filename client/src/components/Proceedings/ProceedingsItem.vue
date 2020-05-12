<template>    
    <q-expansion-item
    class="shadow-1 overflow-hidden"
    style="border-radius: 30px"
    icon="description"
    label="243546 / 2015 Stella Belyakova"
    header-class="bg-primary text-white"
    expand-icon-class="text-white"
    >
        <q-card class="row">
            <q-card-section class="col-12">
                <q-list>
                    <q-item class="non-selectable q-pa-none">
                        <q-item-section side class="items-center">
                            <q-checkbox v-if="theModel === true" size="xl" toggle-indeterminate color="positive" v-model="theModel" />
                            <q-checkbox v-else-if="theModel === false" size="xl" toggle-indeterminate v-model="theModel" />
                            <q-checkbox v-else size="xl" toggle-indeterminate color="warning" v-model="theModel" />
                            <small class="text-uppercase">
                                <q-chip v-if="theModel === true" square icon="done" color="positive" text-color="white" size="sm"><strong>activo</strong></q-chip>
                                <q-chip v-else-if="theModel === false" square icon="clear" color="negative" text-color="white" size="sm"><strong>inactivo</strong></q-chip>
                                <q-chip v-else square icon="remove" color="warning" text-color="white" size="sm"><strong>pendiente</strong></q-chip>
                            </small>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label overline class="text-uppercase">Civil y comercial Nº2</q-item-label>
                            <q-item-label class="text-uppercase text-body1 text-weight-bold">Stella Belyakova vs Aseguradora SRL</q-item-label>
                            <q-item-label class="text-subtitle2">243546 / 2015</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <q-btn icon="edit" size="sm" color="info" padding="sm" />
                        </q-item-section>
                    </q-item>
                    <q-separator class="q-my-sm" />
                    <q-item class="q-pa-none">
                        <q-item-section>
                            <q-card flat>
                                <q-tabs
                                v-model="tab"
                                dense
                                active-color="primary"
                                indicator-color="primary"
                                align="justify"
                                >
                                <q-tab name="mails" label="Juez" />
                                <q-tab name="alarms" label="Actora" />
                                <q-tab name="movies" label="Demandada" />
                                </q-tabs>

                                <q-tab-panels v-model="tab" animated>
                                    <q-tab-panel name="mails">
                                        <span class="col-9 self-center">
                                            <q-chip clickable size="sm" class="q-my-none" color="primary" text-color="white">
                                                Bertrán Robles Reséndez
                                            </q-chip>
                                        </span>
                                    </q-tab-panel>

                                    <q-tab-panel name="alarms">
                                        <q-chip clickable size="sm" class="q-my-none" text-color="white">
                                            Natasha Lira Lara
                                        </q-chip>
                                        <q-chip clickable size="sm" class="q-my-none" text-color="white">
                                            Natasha Lira Lara
                                        </q-chip>
                                    </q-tab-panel>

                                    <q-tab-panel name="movies">
                                        <q-chip clickable size="sm" class="q-my-none" text-color="white">
                                            Yvonne Gutiérrez Huerta
                                        </q-chip>
                                        <q-chip clickable size="sm" class="q-my-none" text-color="white">
                                            Natasha Lira Lara
                                        </q-chip>
                                    </q-tab-panel>
                                </q-tab-panels>
                            </q-card>
                        </q-item-section>
                    </q-item>
                    <q-separator class="q-my-sm" />
                    <q-item>
                        <q-item-section side>
                            <FilesMenu />
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-card-section>
            <q-btn icon="fullscreen" class="col-12 bg-grey-1 text-center q-py-sm">
                Extender
            </q-btn>
        </q-card>
    </q-expansion-item>
</template>

<script>
import FilesMenu from '../Menues/FilesMenu'
export default {
    name: 'ProceedingsItem',
    data() {
        return {
        right: false,
        theModel: null,
        theModel2: 'maybe',
        tab: 'mails'
        }
    },
    methods: {
        reset () {
        this.theModel = null
        this.theModel2 = 'maybe'
        },
    },
    components: {
        FilesMenu
    }
}
</script>