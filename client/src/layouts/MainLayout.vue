<template>
  <q-layout view="hHh lpR lFf">

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
    </q-header>

    <q-drawer v-model="left" side="left" elevated>
      <MainMenu />
    </q-drawer>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import MainMenu from '../components/Menues/MainMenu'
export default {
  data () {
    return {
      left: false,
    }
  },
  components: {
    MainMenu,
  }
}
</script>