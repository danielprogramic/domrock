<template>
    <v-navigation-drawer v-if="loggedIn" fixed :mini-variant="true" :clipped="false" v-model="ndrawer" class="secondary" app>
      <v-list class="primary">
        <v-list-tile v-for="(item, i) in items" :key="i" value="true">
          <v-list-tile-action>
            <v-icon style="color:#fff;" light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title style="color:#fff;" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
  props: [
    'loggedIn',
    'ndrawer'
  ],
    data() {
      return {
        items: [{
          icon: 'library_add',
          title: 'Biblioteca'
        }],
      }
    }, 
}
</script>
