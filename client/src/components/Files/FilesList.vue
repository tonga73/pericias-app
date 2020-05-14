<template>
    <div class="col-12">
        <q-list class="rounded-borders">
            <q-item-label header class="text-right no-pointer-events text-weight-medium bg-secondary text-white">{{ file.type }}</q-item-label>
            <q-intersection 
                once
                v-for="(item, index) in file.list"  
                :key="index"
                transition="scale"
                style="height: 56px"
            >
                <FilesItem :item="item" />                    
            </q-intersection>
        </q-list>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FilesItem from "./FilesItem"
export default {
    name: "FilesList",
    props: {
        file: {
        type: Object
        }
    },
    components: {
        FilesItem
    },
    data() {
        return {
        }
    },
}
</script>