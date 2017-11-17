<template>
  <v-app light>
    <v-navigation-drawer fixed :mini-variant="true" :clipped="false" v-model="drawer" class="secondary" app>
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
    <v-toolbar dark class="primary" app>
      <v-layout row justify-space-between>
        <v-flex xs2 style="margin-top:12px;">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-flex>
        <v-flex xs2>
          <center>
            <img src="/static/logo-domrock-nav.png" alt="Dom Rock" />
          </center>
        </v-flex>
        <v-flex xs2 style="margin-top:12px;">
          <v-spacer></v-spacer>
          <div style="float:right;">
            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
              <v-icon>menu</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>

  <v-navigation-drawer class="secondary" temporary fixed :right="right" v-model="rightDrawer" app>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title  class="title">
             <v-icon style="color:#0a1f30;"  medium >business_center</v-icon>
            Módulos
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

    <v-footer :fixed="fixed" app>
      <span>&copy;Copyright 2013 ― Todos os direitos reservados </span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'library_add',
          title: 'Biblioteca'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
