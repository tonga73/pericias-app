<template>
    <span style="position: absolute; right: 7px; top: 7px;">
        <q-btn v-if="drawer" icon="folder" icon-right="keyboard_arrow_right" @click="drawer = !drawer">
            &nbsp;56 archivos&nbsp;
        </q-btn>
        <q-btn v-else icon="folder" icon-right="keyboard_arrow_left" @click="drawer = !drawer">
            &nbsp;56 archivos&nbsp;
        </q-btn>
        <q-drawer
            v-model="drawer" 
            side="right"

            :mini="!drawer || miniState"
            @click.capture="drawerClick"

            :width="430"
            :breakpoint="500"
            bordered
            overlay
            content-class="bg-grey-4 text-dark"
        >
            <q-scroll-area class="fit">
                <q-list class="rounded-borders">
                    <q-item-label header class="text-right no-pointer-events text-weight-medium bg-secondary text-white">Documentos</q-item-label>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                        <q-avatar square>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Microsoft_Office_Word_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Word_%282018%E2%80%93present%29.svg.png">
                        </q-avatar>
                        </q-item-section>

                        <q-item-section>
                        <q-item-label lines="1">Pericia</q-item-label>
                        </q-item-section>

                        <q-item-section side top>
                        1 min ago
                        </q-item-section>
                    </q-item>

                    <q-separator inset="item" />

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                        <q-avatar square>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png">
                        </q-avatar>
                        </q-item-section>

                        <q-item-section>
                        <q-item-label lines="1">Otro Documento PDF</q-item-label>
                        </q-item-section>

                        <q-item-section side top>
                        1 min ago
                        </q-item-section>
                    </q-item>
                </q-list>
                <q-list class="rounded-borders">
                    <q-item-label header class="text-right no-pointer-events text-weight-medium bg-secondary text-white">Imágenes</q-item-label>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                        <q-avatar square>
                            <img src="https://pngimage.net/wp-content/uploads/2018/06/icone-album-photo-png-5.png">
                        </q-avatar>
                        </q-item-section>

                        <q-item-section>
                        <q-item-label lines="1">Pericia</q-item-label>
                        </q-item-section>

                        <q-item-section side top>
                        1 min ago
                        </q-item-section>
                    </q-item>

                    <q-separator inset="item" />

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                        <q-avatar square>
                            <img src="https://pngimage.net/wp-content/uploads/2018/06/icone-album-photo-png-5.png">
                        </q-avatar>
                        </q-item-section>

                        <q-item-section>
                        <q-item-label lines="1">Otro Documento PDF</q-item-label>
                        </q-item-section>

                        <q-item-section side top>
                        1 min ago
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area> 
            <!--
                in this case, we use a button (can be anything)
                so that user can switch back
                to mini-mode
            -->
            <div class="q-mini-drawer-hide absolute" style="top: 15px; left: -17px">
                <q-btn
                dense
                round
                unelevated
                color="negative"
                icon="chevron_right"
                @click="miniState = true"
                />
            </div>
        </q-drawer>
    </span>
</template>

<script>
export default {
    name: 'FilesMenu',
    data() {
        return {
            drawer: false,
            miniState: false
        }
    },
    methods: {
        drawerClick (e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (this.miniState) {
            this.miniState = false

            // notice we have registered an event with capture flag;
            // we need to stop further propagation as this click is
            // intended for switching drawer to "normal" mode only
            e.stopPropagation()
        }
        }
    }
}
</script>