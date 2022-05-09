<template>
  <div class="home">
    <v-container>
      <v-layout row wrap>

        <v-flex xs6>
          <List/>
        </v-flex>

        <v-flex xs6>
          <listAdd/>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import List from '@/components/List'
import ListAdd from '@/components/ListAdd'

export default {
  name: 'Home',
  components: {
    List,
    ListAdd
  }
}
</script>
