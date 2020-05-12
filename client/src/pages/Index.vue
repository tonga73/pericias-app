<template>
  <q-page class="row">
    <div class="q-pa-md col-10 offset-1">
      <ProceedingsList />
    </div>
  </q-page>
</template>

<script>
import ProceedingsList from '../components/Proceedings/ProceedingsList'
export default {
  name: 'PageIndex',
  components: {
    ProceedingsList
  }
}

</script>
