<template>
  <v-app id="inspire"  light>
    <dr-navigation :loggedIn="$store.state.isUserLoggedIn" :drawer="drawer">
    </dr-navigation>
  
    <!-- <v-navigation-drawer v-if="$store.state.isUserLoggedIn" fixed :mini-variant="true" :clipped="false" v-model="drawer" class="secondary" app>
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
      </v-navigation-drawer> -->
    <dr-toolbar :loggedIn="$store.state.isUserLoggedIn">
  
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
          <div style="float:right;">
            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
              <v-icon>menu</v-icon>
            </v-btn>
          </div>
          <v-spacer></v-spacer>
          <div style="float:right;">
            <v-btn icon @click="onLogout()">
              <v-icon>person</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </dr-toolbar>
    <v-content>
      <div v-if="!$store.state.isUserLoggedIn" class="bg">
        <!-- <center>
            <img src="/static/logo-domrock_ti.png" alt="">
          </center> -->
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </div>
      <v-container v-if="$store.state.isUserLoggedIn" fluid>
        <v-fade-transition mode="out-in">
  
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
      <div style="margin-top:-30px;margin-left:2px;position:absolute;color:#fff"><div>&copy;Copyright 2013 ― Todos os direitos reservados</div> </div>
    </v-content>
  
    <v-navigation-drawer v-if="$store.state.isUserLoggedIn" class="secondary" temporary fixed :right="right" v-model="rightDrawer" app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              <v-icon style="color:#0a1f30;" medium>business_center</v-icon>
              Módulos
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title" @click.stop="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- <dr-footer v-if="$store.state.isUserLoggedIn" ></dr-footer> -->
   
      
  
  </v-app>
</template>

<script>
  import Toolbar from '@/components/Shared/ToolBar'
  import Navigation from '@/components/Shared/Navigation'
  import Footer from '@/components/Shared/Footer'
  
  export default {
    components: {
      'dr-toolbar': Toolbar,
      'dr-navigation': Navigation,
      'dr-footer': Footer,
    },
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
    },
  
    methods: {
      onLogout: () => {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'login'
        })
      },
    }
  }
</script>

<style lang="stylus" scoped>
@import "../stylus/main"
</style>