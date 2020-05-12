<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-dark text-white">
      <q-toolbar>
        <q-btn dense flat icon="view_quilt" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwx4x4a09rBioISJVuAlwKTZXd8AvYo9aO2gp53p3E1skkcjT3&s">
          </q-avatar>
          Administrador de Expedientes
        </q-toolbar-title>
      </q-toolbar>
      
      <FilesMenu />
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" elevated>
      <MainMenu />
    </q-drawer>

    <q-page-container class="bg-grey-3">
      <SearchBar />
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import SearchBar from '../components/SearchBar'
import MainMenu from '../components/Menues/MainMenu'
export default {
  data () {
    return {
      left: false,
    }
  },
  components: {
    MainMenu,
    SearchBar,
  }
}
</script>