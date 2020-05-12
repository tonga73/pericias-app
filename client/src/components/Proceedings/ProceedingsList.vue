<template>
    <ul 
        style="list-style: none;"
        class="q-pa-none q-ma-none"
    >
        <li>
            <ProceedingsItem />
        </li>
    </ul>
</template>

<script>
import ProceedingsItem from './ProceedingsItem'
export default {
    name: 'ProceedingsList',
    components: {
        ProceedingsItem
    }
}
</script>