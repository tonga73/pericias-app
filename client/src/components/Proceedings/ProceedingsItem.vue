<template>
    <q-card 
      square 
      :class="proceeding.expandedMode ? '' : 'row'"
      :style="proceeding.expandedMode ? 'z-index: 5;' : ''"
    >
      <q-card-section class="col-12" :class="proceeding.expandedMode ? 'q-pa-none' : ''">
        <q-list>
          <!-- CABECERA EXPEDIENTE -->
          <q-item 
            class="non-selectable q-pa-none" 
            :class="proceeding.expandedMode ? 'bg-primary q-py-sm text-white' : ''">
            <q-item-section v-if="proceeding.expandedMode" side>
              <q-btn icon="keyboard_arrow_left" text-color="white" flat padding="none" class="q-pa-sm" @click="toggleExpandedMode({ number: proceeding.number, expandedMode: proceeding.expandedMode = !proceeding.expandedMode })" />
            </q-item-section>
            <q-item-section side class="items-center">
              <q-checkbox
                v-if="theModel === true"
                size="xl"
                toggle-indeterminate
                color="positive"
                v-model="theModel"
              />
              <q-checkbox
                v-else-if="theModel === false"
                size="xl"
                keep-color
                color="secondary"
                toggle-indeterminate
                v-model="theModel"
              />
              <q-checkbox v-else size="xl" toggle-indeterminate color="warning" v-model="theModel" />
              <small class="text-uppercase">
                <q-chip
                  v-if="theModel === true"
                  square
                  icon="done"
                  color="positive"
                  text-color="white"
                  size="sm"
                >
                  <strong>{{ proceeding.mode.updated }}</strong>
                </q-chip>
                <q-chip
                  v-else-if="theModel === false"
                  square
                  icon="archive"
                  color="grey"
                  text-color="white"
                  size="sm"
                >
                  <strong>{{ proceeding.mode.archived }}</strong>
                </q-chip>
                <q-chip v-else square icon="remove" color="warning" text-color="white" size="sm">
                  <strong>{{ proceeding.mode.pending }}</strong>
                </q-chip>
              </small>
            </q-item-section>
            <q-item-section>
              <q-item-label caption class="text-uppercase" :class="proceeding.expandedMode ? 'text-grey-4' : ''"><q-icon name="location_city" /> {{ proceeding.dependency.name }} | <q-icon name="gavel" /> {{ proceeding.dependency.magistrate }} </q-item-label>
              <q-item-label class="text-uppercase text-body1 text-weight-bold">{{ proceeding.name }}</q-item-label>
              <q-item-label class="text-subtitle2">{{ proceeding.number }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn icon="edit" size="sm" color="info" padding="sm" />
            </q-item-section>
          </q-item>
          <q-separator v-if="proceeding.expandedMode === false" class="q-my-sm" />
          <!-- PARTES -->
          <q-item class="q-pa-none">
              <q-item-section>
                <PartsList />
              </q-item-section>
          </q-item>
          <q-separator v-if="proceeding.expandedMode === false" class="q-my-sm" />
          <!-- ARCHIVOS -->
          <q-item>
            <q-item-section v-if="proceeding.expandedMode === false" side>
              <span style="position: absolute; right: 7px; top: 7px;">
                  <q-btn icon="folder" :icon-right="drawer ? 'keyboard_arrow_right' : 'keyboard_arrow_left'" @click="drawer = !drawer">
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
                        <span  
                            v-for="(file, index) in proceeding.files"  
                            :key="index"        
                        >
                          <FilesList :file="file" />
                        </span>
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
            </q-item-section>
            <q-item-section v-else>
              <span  
                  v-for="(file, index) in proceeding.files"  
                  :key="index"        
              >
                <FilesList :file="file" />
              </span>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-btn icon="fullscreen" v-if="proceeding.expandedMode === false" @click="toggleExpandedMode({ number: proceeding.number, expandedMode: proceeding.expandedMode = !proceeding.expandedMode })" class="col-12 bg-grey-1 text-center q-py-sm">Extender</q-btn>
    </q-card>
</template>

<script>
import PartsList from "../Parts/PartsList"
import FilesList from "../Files/FilesList"
import { mapActions } from 'vuex'
export default {
  name: "ProceedingsItem",
  props: {
    proceeding: {
      type: Object
    }
  },
  components: {
    PartsList,
    FilesList
  },
  data() {
    return {
      right: false,
      theModel: null,
      theModel2: "maybe",
      drawer: false,
      miniState: false
    };
  },
  methods: {
    reset() {
      this.theModel = null;
      this.theModel2 = "maybe";
    },
    ...mapActions('proceedings', ['toggleExpandedMode']),
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
};
</script>