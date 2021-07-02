<template>
  <div id="app">
    <nuxtjs-bootstrap-sidebar
      :initial-show="initialShow"
      :links="links"
      :fa="true"
      align="right"
      @sidebarChanged="onSidebarChanged"
    >
      <template v-slot:logo>
        <b-img :src="logoMini" rounded="circle" alt="Circle image"></b-img>
        <div class="logo-title">
          <h2>Sidebar</h2>
        </div>
      </template>
      <template v-slot:navbar>
        <b-nav-text> Navbar </b-nav-text>
      </template>

      <template v-slot:content>
          <router-view />
      </template>
    </nuxtjs-bootstrap-sidebar>
  </div>
</template>


<script>
import NuxtjsBootstrapSidebar from "@/components/NuxtjsBootstrapSidebar.vue";

export default {
  name: "ServeDev",
  components: {
    NuxtjsBootstrapSidebar,
  },
  data() {
    return {
      logoMini: require("@/assets/img/logo_bootstrap_vue.png"),
      initialShow: true,
      links: [
        { name: "Home", href: { name: "home" }, faIcon: ["fas", "home"] },
        {
          name: "Dropdown",
          faIcon: ["fas", "tint"],
          children: [
            {
              name: "Child Item 1",
              href: { name: "child-item-1" },
              faIcon: ["fas", "child"],
            },
            {
              name: "Child Item 2",
              href: { name: "child-item-2" },
              faIcon: ["fas", "child"],
            },
          ],
        },
        { name: "About", href: { name: "about" }, faIcon: "users" },
        { name: "Contact", href: { name: "contact" }, faIcon: "phone" },
      ],
    };
  },
  methods: {
    onSidebarChanged() {},
  },
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
</style>

