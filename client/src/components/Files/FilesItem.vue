<template>
    <q-item clickable v-ripple>
        <q-item-section avatar>
            <q-avatar square>
                <img v-if="item.format === 'pdf'" :src="item.formatLogo" alt="">
                <img v-else :src="item.url">
            </q-avatar>
        </q-item-section>

        <q-item-section>
        <q-item-label lines="1">{{ item.title }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
        1 min ago
        </q-item-section>
    </q-item>
</template>

<script>
export default {
    name: "FilesItem",
    props: {
        item: {
            type: Object
        }
    },
}
</script>