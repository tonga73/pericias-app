<template>
  <div class="q-pa-none q-ma-none row">
    <!-- BARRA DE BÚSQUEDA -->
    <SearchBar class="col-12" />
    <!-- CONTAINER DE MODO LISTA Y EXPANDIDO -->
    <div 
      class="q-mb-lg"
      :class="proceeding.expandedMode ? '' : 'col-10 offset-1'" 
      v-for="(proceeding, index) in proceedings" 
      :key="index"
    >
      <!-- EXPEDIENTE MODO LISTA -->
      <q-expansion-item
        class="shadow-1 overflow-hidden"
        style="border-radius: 30px"
        icon="description"
        dense-toggle
        v-if="proceeding.expandedMode === false"
        :label="proceeding.number + ' · ' + proceeding.name"
        header-class="bg-primary text-white text-weight-medium text-subtitle1"
        expand-icon-class="text-white"
      >
        <ProceedingsItem :proceeding="proceeding" />
      </q-expansion-item>
      <!-- EXPEDIENTE MODO EXPANDIDO -->
      <div v-else class="fullscreen scroll">
        <ProceedingsItem :proceeding="proceeding" />
      </div>      
    </div>
  </div>
</template>

<script>
import SearchBar from '../SearchBar'
import ProceedingsItem from "./ProceedingsItem";
import { mapGetters } from "vuex";
export default {
  name: "ProceedingsList",
  components: {
    ProceedingsItem,
    SearchBar
  },
  computed: {
    ...mapGetters("proceedings", ["proceedings"])
  }
};
</script>
