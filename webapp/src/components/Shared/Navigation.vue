<template>
  <div v-if="loggedIn" >
    <v-navigation-drawer  fixed :mini-variant="true" :clipped="false" v-model="drawerFlag" class="secondary" app>
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
  </div>
</template>

<script>
  export default {
    props: [
      'loggedIn',
      'drawer'
    ],
    data() {
      return {
     
        items: [{
          icon: 'library_add',
          title: 'Biblioteca'
        }],
      }
    },
  
    computed: {
      drawerFlag: {
        get: function() {
          return this.drawer
        },
        set: function(val) {
          this.$emit('emdrawer', val)
        }
      }
    },
  }
</script>
