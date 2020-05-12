<template>
    <q-scroll-area class="fit text-dark">
        <q-list v-for="(menuItem, index) in menuList" :key="index">

        <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
            <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
            {{ menuItem.label }}
            </q-item-section>
        </q-item>

        <q-separator v-if="menuItem.separator" />

        </q-list>
    </q-scroll-area>
</template>

<script>
const menuList = [
  {
    icon: 'add_box',
    label: 'Nuevo Expediente',
    separator: true
  },
  {
    icon: 'widgets',
    label: 'Vista de Archivos',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Configuración',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Reportar al Admin',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Ayuda',
    separator: false
  }
]
export default {
    name: 'MainMenu',
    data() {
        return {
            menuList
        }
    }
}
</script>