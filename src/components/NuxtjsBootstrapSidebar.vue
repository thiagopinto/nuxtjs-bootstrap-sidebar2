<template>
  <div class="wrapper container-fluid">
    <!-- Sidebar -->
    <nav
      id="sidebar"
      :class="`nuxtjs-bootstrap-sidebar   ${
        [show ? 'visible' : 'hidden']
      } ${theme} ${align}`"
      data-color="white"
      data-active-color="danger"
    >
      <div class="sidebar-header logo">
        <div class="logo-mini" @click="onButtonClick">
          <slot name="logo" />
        </div>
        <span
          id="sidebarButton"
          class="sidebar-button"
          :class="[theme, show ? 'visible' : 'hidden']"
          @click="onButtonClick"
          ><font-awesome-icon :icon="['far', 'times-circle']" size="1x" />
          <i class="far fa-times-circle"></i>
        </span>
      </div>
      <hr />
      <div class="sidebar-wrapper">
        <b-list-group class="items-wrapper nav">
          <template v-for="(link, index) in links">
            <template v-if="link.href !== undefined">
              <b-list-group-item
                :key="index"
                v-b-tooltip.hover.right
                :title="link.name"
                class="sidebar-menu-item mt-2 mb-2 pt-2 pb-2"
                :class="`${align}`"
                :to="link.href"
              >
                <div class="before"></div>
                <span class="fa-icon left">
                  <component
                    v-if="link.faIcon"
                    :is="'font-awesome-icon'"
                    :icon="link.faIcon"
                  />
                </span>
                <span class="link-name">
                  {{ link.name }}
                </span>
                <span class="fa-icon right">
                  <component
                    v-if="link.faIcon"
                    :is="'font-awesome-icon'"
                    :icon="link.faIcon"
                  />
                </span>
                <div class="after"></div>
              </b-list-group-item>
            </template>

            <template v-else>
              <b-list-group-item
                :key="index"
                v-b-tooltip.hover.right
                :title="link.name"
                class="sidebar-menu-item sidebar-dropdown mt-2 mb-2 pt-2 pb-2"
                style="padding-right: 0.03rem"
                :class="`${align}`"
                v-b-toggle="`accordion-${index}-${link.href}`"
              >
                <div class="before"></div>
                <span class="fa-icon left">
                  <component
                    v-if="link.faIcon"
                    :is="'font-awesome-icon'"
                    :icon="link.faIcon"
                  />
                </span>
                <span class="link-name">
                  {{ link.name }}
                </span>
                <span class="fa-icon right">
                  <component
                    v-if="link.faIcon"
                    :is="'font-awesome-icon'"
                    :icon="link.faIcon"
                  />
                </span>
                <div class="after"></div>
              </b-list-group-item>
              <b-collapse
                :id="`accordion-${index}-${link.href}`"
                :key="index + 100"
                accordion="child-level-1"
                role="tabpanel"
                :visible="link.visible"
              >
                <b-list-group>
                  <b-list-group-item
                    v-for="(child, idChild) in link.children"
                    :key="idChild"
                    class="sidebar-menu-item child-level-1 mt-2 mb-2 pt-2 pb-2"
                    :class="`${align}`"
                    v-b-tooltip.hover.right
                    :title="child.name"
                    :to="child.href"
                  >
                    <div class="before"></div>
                    <span class="fa-icon left">
                      <component
                        v-if="child.faIcon"
                        :is="'font-awesome-icon'"
                        :icon="child.faIcon"
                      />
                    </span>
                    <span class="link-name">
                      {{ child.name }}
                    </span>
                    <span class="fa-icon right">
                      <component
                        v-if="child.faIcon"
                        :is="'font-awesome-icon'"
                        :icon="child.faIcon"
                      />
                    </span>
                    <div class="after"></div>
                  </b-list-group-item>
                </b-list-group>
              </b-collapse>
            </template>
          </template>
        </b-list-group>
      </div>
      <slot name="footer" />
      <!--/ .items-wrapper -->
    </nav>
    <div
      :class="`main-panel ${
        [show ? 'visible' : 'hidden']
      } ${theme} ${align}`"
    >
      <b-nav class="container-fluid">
        <b-nav-item class="left" @click="onButtonClick">
          <span
            id="sidebarButton"
            class="sidebar-button"
            :class="[theme, !show ? 'visible' : 'hidden']"
            ><font-awesome-icon :icon="['fas', 'bars']" size="1x" />
          </span>
        </b-nav-item>
        <slot name="navbar" />
        <b-nav-item class="right" @click="onButtonClick">
          <span
            id="sidebarButton"
            class="sidebar-button"
            :class="[theme, !show ? 'visible' : 'hidden']"
            ><font-awesome-icon :icon="['fas', 'bars']" size="1x" />
          </span>
        </b-nav-item>
      </b-nav>

      <!-- Hamburger Menu -->
      <div
        id="content"
        :class="`content container-fluid ${[
          show ? 'visible' : 'hidden',
        ]} ${align}`"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

library.add(faBars);
library.add(faTimesCircle);

export default {
  name: "NuxtjsBootstrapSidebar",
  components: {},
  props: {
    links: {
      type: Array,
      default: null,
    },
    initialShow: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "default-theme",
    },
    header: {
      type: String,
      default: "",
    },
    align: {
      type: String,
      default: "left",
    },
  },
  data() {
    return {
      show: this.initialShow,
    };
  },
  beforeMount() {
    /*     this.$nextTick(function () {
      this.onResize();
    }); */

    window.addEventListener("resize", this.onResize);
    let width = window.document.documentElement.clientWidth;
    if (width <= 991.98) {
      this.show = false;
    } else {
      this.show = true;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onButtonClick() {
      this.show = !this.show;
      this.$emit("sidebar-changed", this.show);
    },
    onResize(windowResize) {
      let targetElement = windowResize.target || windowResize.srcElement;
      if (targetElement != undefined) {
        let width = targetElement.document.documentElement.clientWidth;
        if (width <= 991.98) {
          this.show = false;
        } else {
          this.show = true;
        }
      }
    },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/default-theme";
</style>
