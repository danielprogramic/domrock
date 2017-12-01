<template>
    <v-toolbar v-if="loggedIn" dark class="primary" app>
    <slot>
    </slot>
    </v-toolbar>
</template>
<script>
export default {
  props: [
    'loggedIn',
  ], 
}
</script>
