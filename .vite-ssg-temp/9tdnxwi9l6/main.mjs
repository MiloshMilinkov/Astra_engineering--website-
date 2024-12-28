import { ViteSSG } from "vite-ssg";
import { ref, onMounted, onUnmounted, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, defineComponent, unref, createVNode, resolveDynamicComponent, Transition, openBlock, createBlock, computed, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { RouterView, useRouter, createRouter, createWebHistory } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";
import { useHead, createHead } from "@vueuse/head";
import "@fortawesome/fontawesome-free/js/all.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isScrolled = ref(false);
    const isMobile = ref(window.innerWidth <= 750);
    const showMobileNav = ref(false);
    const toggleMobileNav = () => {
      showMobileNav.value = !showMobileNav.value;
    };
    const updateViewport = () => {
      isMobile.value = window.innerWidth <= 750;
      if (!isMobile.value) {
        showMobileNav.value = false;
      }
    };
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 0;
    };
    onMounted(() => {
      window.addEventListener("resize", updateViewport);
      window.addEventListener("scroll", handleScroll);
      updateViewport();
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: { "scrolled-nav": isScrolled.value }
      }, _attrs))} data-v-9243d48d><nav data-v-9243d48d>`);
      if (!isMobile.value) {
        _push(`<ul class="navigation" data-v-9243d48d><li data-v-9243d48d>`);
        _push(ssrRenderComponent(_component_router_link, {
          class: "link",
          to: { name: "početna" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`POČETNA`);
            } else {
              return [
                createTextVNode("POČETNA")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-9243d48d>`);
        _push(ssrRenderComponent(_component_router_link, {
          class: "link",
          to: { name: "onama" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`O NAMA`);
            } else {
              return [
                createTextVNode("O NAMA")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-9243d48d>`);
        _push(ssrRenderComponent(_component_router_link, {
          class: "link",
          to: { name: "usluge" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`USLUGE`);
            } else {
              return [
                createTextVNode("USLUGE")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-9243d48d>`);
        _push(ssrRenderComponent(_component_router_link, {
          class: "link",
          to: { name: "galerija" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`GALERIJA`);
            } else {
              return [
                createTextVNode("GALERIJA")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-9243d48d>`);
        _push(ssrRenderComponent(_component_router_link, {
          class: "link",
          to: { name: "kontakt" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`KONTAKT`);
            } else {
              return [
                createTextVNode("KONTAKT")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (isMobile.value) {
        _push(`<div class="icon" data-v-9243d48d><button class="menu-button" data-v-9243d48d><i class="fas fa-bars" data-v-9243d48d></i></button>`);
        if (showMobileNav.value) {
          _push(`<ul class="dropdown-nav" data-v-9243d48d><li data-v-9243d48d>`);
          _push(ssrRenderComponent(_component_router_link, {
            onClick: toggleMobileNav,
            class: "link",
            to: { name: "početna" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`POČETNA`);
              } else {
                return [
                  createTextVNode("POČETNA")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li><li data-v-9243d48d>`);
          _push(ssrRenderComponent(_component_router_link, {
            onClick: toggleMobileNav,
            class: "link",
            to: { name: "onama" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`O NAMA`);
              } else {
                return [
                  createTextVNode("O NAMA")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li><li data-v-9243d48d>`);
          _push(ssrRenderComponent(_component_router_link, {
            onClick: toggleMobileNav,
            class: "link",
            to: { name: "usluge" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`USLUGE`);
              } else {
                return [
                  createTextVNode("USLUGE")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li><li data-v-9243d48d>`);
          _push(ssrRenderComponent(_component_router_link, {
            onClick: toggleMobileNav,
            class: "link",
            to: { name: "galerija" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`GALERIJA`);
              } else {
                return [
                  createTextVNode("GALERIJA")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li><li data-v-9243d48d>`);
          _push(ssrRenderComponent(_component_router_link, {
            onClick: toggleMobileNav,
            class: "link",
            to: { name: "kontakt" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`KONTAKT`);
              } else {
                return [
                  createTextVNode("KONTAKT")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav></header>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Navbar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-9243d48d"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(ssrRenderComponent(unref(RouterView), null, {
        default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(``);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
          } else {
            return [
              createVNode(Transition, {
                name: "fade",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "Slideshow",
  __ssrInlineRender: true,
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentIndex = ref(0);
    const showArrows = ref(true);
    const currentImage = computed(() => props.images[currentIndex.value]);
    const nextImage = () => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length;
    };
    const prevImage = () => {
      currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
    };
    const close = () => {
      emit("close");
    };
    const handleKeydown = (event) => {
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
      if (event.key === "Escape") close();
    };
    onMounted(() => {
      window.addEventListener("keydown", handleKeydown);
    });
    onUnmounted(() => {
      window.removeEventListener("keydown", handleKeydown);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "slideshow",
        tabindex: "0"
      }, _attrs))} data-v-9ed26642><div class="slideshow-overlay" data-v-9ed26642></div><div class="slideshow-content" data-v-9ed26642><span class="close-btn" data-v-9ed26642>×</span><img${ssrRenderAttr("src", currentImage.value)} alt="Slideshow Image" class="slideshow-image" data-v-9ed26642>`);
      if (showArrows.value) {
        _push(`<button class="arrow-btn left-arrow" data-v-9ed26642>«</button>`);
      } else {
        _push(`<!---->`);
      }
      if (showArrows.value) {
        _push(`<button class="arrow-btn right-arrow" data-v-9ed26642>»</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Slideshow.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Slideshow = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-9ed26642"]]);
const _sfc_main$5 = {
  __name: "Gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const imageModules = /* @__PURE__ */ Object.assign({ "/src/assets/Gallery/PROJEKAT - ENTERIJER/10_kupatilo.jpg": () => import("./assets/10_kupatilo-BEWMNT4V.js"), "/src/assets/Gallery/PROJEKAT - ENTERIJER/11_zidovi.jpg": () => import("./assets/11_zidovi-Bpcefz6i.js"), "/src/assets/Gallery/PROJEKAT - ENTERIJER/12_zidovi_parket.jpg": () => import("./assets/12_zidovi_parket-DjR6vCSg.js"), "/src/assets/Gallery/PROJEKAT - ENTERIJER/1_kuhinja.jpg": () => import("./assets/1_kuhinja-DdMF4y-X.js"), "/src/assets/Gallery/PROJEKAT - ENTERIJER/2_kuhinja.jpg": () => import("./assets/2_kuhinja-DYMA0Fwq.js"), "/src/assets/Gallery/PROJEKAT - ENTERIJER/3_kuhinja.jpg": () => import("./assets/3_kuhinja-qyQSqd2D.js"), "/src/assets/Gallery/PROJEKAT - ENTERIJER/4_kuhinja.jpg": () => import("./assets/4_kuhinja-BTX71Zpp.js"), "/src/assets/Gallery/PROJEKAT - ENTERIJER/5_kuhinja.jpg": () => import("./assets/5_kuhinja-BFabdNhF.js"), "/src/assets/Gallery/PROJEKAT - ENTERIJER/6_kupatilo.jpg": () => import("./assets/6_kupatilo-Dno3-M33.js"), "/src/assets/Gallery/PROJEKAT - ENTERIJER/7_kupatilo.jpg": () => import("./assets/7_kupatilo-C0s9Lhqv.js"), "/src/assets/Gallery/PROJEKAT - ENTERIJER/8_kupatilo.jpg": () => import("./assets/8_kupatilo-BYQtFxrc.js"), "/src/assets/Gallery/PROJEKAT - ENTERIJER/9_kupatilo.jpg": () => import("./assets/9_kupatilo-CjLDlp4S.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/1_kolaz.jpg": () => import("./assets/1_kolaz-D9OJQkZ4.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/2_kolaz.jpg": () => import("./assets/2_kolaz-DsbnNg8J.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0183.jpg": () => import("./assets/DSC_0183-CsLwBJrD.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0196.jpg": () => import("./assets/DSC_0196-Dg1py0es.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0197.jpg": () => import("./assets/DSC_0197-CbL4z89k.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0213.jpg": () => import("./assets/DSC_0213-CBlcfwoR.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0214.jpg": () => import("./assets/DSC_0214-IForUwPm.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0215.jpg": () => import("./assets/DSC_0215-tgi-_rKi.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0255.jpg": () => import("./assets/DSC_0255-D3Rhk8fF.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0258.jpg": () => import("./assets/DSC_0258-B2rINqQ4.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0264.jpg": () => import("./assets/DSC_0264-c5VlcP9M.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0269.jpg": () => import("./assets/DSC_0269-BkpuaOkU.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0276.jpg": () => import("./assets/DSC_0276-RPuYLx6U.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0281.jpg": () => import("./assets/DSC_0281-Be9DECSk.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0284.jpg": () => import("./assets/DSC_0284-r3iCZ0yf.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0290.jpg": () => import("./assets/DSC_0290-rj9C0KRT.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0295.jpg": () => import("./assets/DSC_0295-DTOKsEKZ.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0308.jpg": () => import("./assets/DSC_0308-CGocE9Mr.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0311.jpg": () => import("./assets/DSC_0311-DlESldJP.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0312.jpg": () => import("./assets/DSC_0312-DyLcD2TR.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0313.jpg": () => import("./assets/DSC_0313-BBM_vn0G.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0314.jpg": () => import("./assets/DSC_0314-Dq5qBOc4.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0315.jpg": () => import("./assets/DSC_0315-lMXnTOhy.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0318.jpg": () => import("./assets/DSC_0318-DCO_SzWT.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0319.jpg": () => import("./assets/DSC_0319-CrMR4JvS.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0337.jpg": () => import("./assets/DSC_0337-CiuUb7pn.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0338.jpg": () => import("./assets/DSC_0338-CC3edKhE.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0339.jpg": () => import("./assets/DSC_0339-4tf7qPUv.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0340.jpg": () => import("./assets/DSC_0340-Cn42HtqP.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0341.jpg": () => import("./assets/DSC_0341-CitWAjtO.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0342.jpg": () => import("./assets/DSC_0342-SmTpbtHa.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0343.jpg": () => import("./assets/DSC_0343-PaCxumCc.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0344.jpg": () => import("./assets/DSC_0344-TawKhnc5.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0347.jpg": () => import("./assets/DSC_0347-CFqg-TAC.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0348.jpg": () => import("./assets/DSC_0348-BXLxJk1m.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0349.jpg": () => import("./assets/DSC_0349-BWxFauTx.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0350.jpg": () => import("./assets/DSC_0350-yFBNfVzx.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0351.jpg": () => import("./assets/DSC_0351-DNyJ3lnj.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0352.jpg": () => import("./assets/DSC_0352-uHR_tBYi.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0353.jpg": () => import("./assets/DSC_0353-CSHW2UbZ.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0356.jpg": () => import("./assets/DSC_0356-C3xoL2uT.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0357.jpg": () => import("./assets/DSC_0357-NN4dz-Mq.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0358.jpg": () => import("./assets/DSC_0358-DfwO8R5q.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0359.jpg": () => import("./assets/DSC_0359-Dj9vA5f1.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0361.jpg": () => import("./assets/DSC_0361-p-tv4hs7.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0362.jpg": () => import("./assets/DSC_0362-PaqHgGFF.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0363.jpg": () => import("./assets/DSC_0363-pEfFKTlJ.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0364.jpg": () => import("./assets/DSC_0364-jGdSDsdu.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0365.jpg": () => import("./assets/DSC_0365-BxzfI4-U.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0366.jpg": () => import("./assets/DSC_0366-CIkuFRd0.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0368.jpg": () => import("./assets/DSC_0368-bsLyuLmk.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0375.jpg": () => import("./assets/DSC_0375-B4mdYhmt.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0378.jpg": () => import("./assets/DSC_0378-BmoL0H7H.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0388.jpg": () => import("./assets/DSC_0388-DSf7ECON.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0390.jpg": () => import("./assets/DSC_0390-CXUDEoiG.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0391.jpg": () => import("./assets/DSC_0391-CZyoAzaG.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0392.jpg": () => import("./assets/DSC_0392-BPhIdg7j.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0408.jpg": () => import("./assets/DSC_0408-Dv_FS8Ij.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0409.jpg": () => import("./assets/DSC_0409-C3D2Xtds.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0414.jpg": () => import("./assets/DSC_0414-B51a6CaR.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0415.jpg": () => import("./assets/DSC_0415-DgT3c2RC.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0416.jpg": () => import("./assets/DSC_0416-DVyboLlI.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0417.jpg": () => import("./assets/DSC_0417-rMbI38U9.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0418.jpg": () => import("./assets/DSC_0418-CM3notty.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0419.jpg": () => import("./assets/DSC_0419-eZtOHT--.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0420.jpg": () => import("./assets/DSC_0420-8B2-3sEt.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0421.jpg": () => import("./assets/DSC_0421-DN1AkWlg.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0422.jpg": () => import("./assets/DSC_0422-Bb0hDEy_.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0423.jpg": () => import("./assets/DSC_0423-CLQ4glid.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0424.jpg": () => import("./assets/DSC_0424-V0CpgnQ9.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0425.jpg": () => import("./assets/DSC_0425-YsVx96-Y.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0426.jpg": () => import("./assets/DSC_0426-BKLvpEe1.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0427.jpg": () => import("./assets/DSC_0427-y3_cYP0t.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0428.jpg": () => import("./assets/DSC_0428-DQ5DZgNj.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0429.jpg": () => import("./assets/DSC_0429-Du81Vpn9.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0430.jpg": () => import("./assets/DSC_0430-CgBnbv7x.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0431.jpg": () => import("./assets/DSC_0431-Cec-CYtX.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0432.jpg": () => import("./assets/DSC_0432-BHZUQzW6.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0433.jpg": () => import("./assets/DSC_0433-C18yGBID.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0434.jpg": () => import("./assets/DSC_0434-DafSCU-7.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0435.jpg": () => import("./assets/DSC_0435-Deee6UPr.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0436.jpg": () => import("./assets/DSC_0436-BQ1bCU2G.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0437.jpg": () => import("./assets/DSC_0437-hGgGRNLq.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0438.jpg": () => import("./assets/DSC_0438-NZwtSTpT.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0439.jpg": () => import("./assets/DSC_0439-D_fLWpYu.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0440.jpg": () => import("./assets/DSC_0440-sGbknIvi.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0441.jpg": () => import("./assets/DSC_0441-BZwaKeRn.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0442.jpg": () => import("./assets/DSC_0442-Dj91fEGe.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0443.jpg": () => import("./assets/DSC_0443-5ut9gXMA.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0445.jpg": () => import("./assets/DSC_0445-DqiGa6ii.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0446.jpg": () => import("./assets/DSC_0446-CdOWJ7yC.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0447.jpg": () => import("./assets/DSC_0447-DZtC64wY.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0448.jpg": () => import("./assets/DSC_0448-Cpwb0jR9.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0449.jpg": () => import("./assets/DSC_0449-Bt-8IdI9.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0450.jpg": () => import("./assets/DSC_0450-CPIolJvy.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0451.jpg": () => import("./assets/DSC_0451-C4mVpNjW.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0452.jpg": () => import("./assets/DSC_0452-BTpxjKRH.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0453.jpg": () => import("./assets/DSC_0453-D9Ozpj08.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0454.jpg": () => import("./assets/DSC_0454-4o-qh_3J.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0455.jpg": () => import("./assets/DSC_0455-Cfq_5YQ5.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0456.jpg": () => import("./assets/DSC_0456-FGVipjjE.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0457.jpg": () => import("./assets/DSC_0457-5-DmW1fE.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0458.jpg": () => import("./assets/DSC_0458-C5FTt8FN.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0459.jpg": () => import("./assets/DSC_0459-3Qh-LLbk.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0460.jpg": () => import("./assets/DSC_0460-DhimdRWK.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0461.jpg": () => import("./assets/DSC_0461-CAU1ZIK_.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0462.jpg": () => import("./assets/DSC_0462-DgHDB1ed.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0463.jpg": () => import("./assets/DSC_0463-DEvnR4Lf.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0464.jpg": () => import("./assets/DSC_0464-CAm53GGz.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0465.jpg": () => import("./assets/DSC_0465-nfGXBeLB.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0466.jpg": () => import("./assets/DSC_0466-ClUs2VD7.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0467.jpg": () => import("./assets/DSC_0467-Br5E13iJ.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0468.jpg": () => import("./assets/DSC_0468-3odTUkQK.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0469.jpg": () => import("./assets/DSC_0469--uQl_4Hn.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0470.jpg": () => import("./assets/DSC_0470-Cth1wW3R.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0471.jpg": () => import("./assets/DSC_0471-BGedTMma.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0472.jpg": () => import("./assets/DSC_0472-3n9xs1qz.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0473.jpg": () => import("./assets/DSC_0473-D04oX6aQ.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0474.jpg": () => import("./assets/DSC_0474-C4szhclR.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0490.jpg": () => import("./assets/DSC_0490-PSUvwF3l.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0491.jpg": () => import("./assets/DSC_0491-Cey00PGq.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0492.jpg": () => import("./assets/DSC_0492-wpBArN_d.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0493.jpg": () => import("./assets/DSC_0493-C7eaWvSU.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0494.jpg": () => import("./assets/DSC_0494-BO3wj1Er.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0495.jpg": () => import("./assets/DSC_0495-CudIdshH.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0498.jpg": () => import("./assets/DSC_0498-rZilN6Um.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0499.jpg": () => import("./assets/DSC_0499-DOgrSNGC.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0500.jpg": () => import("./assets/DSC_0500-CI8AXzWc.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0501.jpg": () => import("./assets/DSC_0501-BbZVzvZC.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0503.jpg": () => import("./assets/DSC_0503-DOGkOcPW.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0504.jpg": () => import("./assets/DSC_0504-Bp9Phhjf.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0506.jpg": () => import("./assets/DSC_0506-DTnYMzuP.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0507.jpg": () => import("./assets/DSC_0507-Zu7eHCy4.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0508.jpg": () => import("./assets/DSC_0508-HONLyjbu.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0509.jpg": () => import("./assets/DSC_0509-EOF1m5y-.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0510.jpg": () => import("./assets/DSC_0510-BMqRQ-Sh.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0511.jpg": () => import("./assets/DSC_0511-CTNao2Mg.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0512.jpg": () => import("./assets/DSC_0512-XPSbZ0xD.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0513.jpg": () => import("./assets/DSC_0513-DLUdwRDb.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0521.jpg": () => import("./assets/DSC_0521-lrrEu-ox.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0522.jpg": () => import("./assets/DSC_0522-DDMX0E7S.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0523.jpg": () => import("./assets/DSC_0523-sUS3lWhJ.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0524.jpg": () => import("./assets/DSC_0524-BZlPaD06.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0525.jpg": () => import("./assets/DSC_0525-HJaHst90.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0526.jpg": () => import("./assets/DSC_0526-jGEdsJzI.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0530.jpg": () => import("./assets/DSC_0530-CQCATFNx.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0531.jpg": () => import("./assets/DSC_0531-Byf6mmB0.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0532.jpg": () => import("./assets/DSC_0532-BhW-zmb6.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0542.jpg": () => import("./assets/DSC_0542-DI8CzRNy.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0548.jpg": () => import("./assets/DSC_0548-CLKAY3Bq.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0559.jpg": () => import("./assets/DSC_0559-YQAf-ofR.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0560.jpg": () => import("./assets/DSC_0560-bOsYWihL.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0566.jpg": () => import("./assets/DSC_0566-BhPCflXS.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0567.jpg": () => import("./assets/DSC_0567-DbCmi2RK.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0569.jpg": () => import("./assets/DSC_0569-Dr9PtvkB.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0570.jpg": () => import("./assets/DSC_0570-wthzxUxV.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0571.jpg": () => import("./assets/DSC_0571-Dcnu96j1.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0572.jpg": () => import("./assets/DSC_0572-DwDWNVBw.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0573.jpg": () => import("./assets/DSC_0573-oU479SOx.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0574.jpg": () => import("./assets/DSC_0574-BZy6aPxJ.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0575.jpg": () => import("./assets/DSC_0575-KPhbVHbZ.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0576.jpg": () => import("./assets/DSC_0576-DeghoQSo.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0577.jpg": () => import("./assets/DSC_0577-45EBH3r8.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0578.jpg": () => import("./assets/DSC_0578-CaufM46F.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0579.jpg": () => import("./assets/DSC_0579-ViBBWLDt.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0580.jpg": () => import("./assets/DSC_0580-DKOC8TdP.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0581.jpg": () => import("./assets/DSC_0581-B5Nf3wOz.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0582.jpg": () => import("./assets/DSC_0582-DjPnUiEc.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0583.jpg": () => import("./assets/DSC_0583-umGvGVLP.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0584.jpg": () => import("./assets/DSC_0584-XunhGfaX.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0585.jpg": () => import("./assets/DSC_0585-C4qQ7quy.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0590.jpg": () => import("./assets/DSC_0590-CkT94uDj.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0591.jpg": () => import("./assets/DSC_0591-dcY08AwW.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0592.jpg": () => import("./assets/DSC_0592-CqdXWQX-.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0593.jpg": () => import("./assets/DSC_0593-lK4OO1V9.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0594.jpg": () => import("./assets/DSC_0594-ZROxxoh7.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0595.jpg": () => import("./assets/DSC_0595-WpUq0r_b.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0596.jpg": () => import("./assets/DSC_0596-HE9DV0NO.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0598.jpg": () => import("./assets/DSC_0598-fj90hWfp.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0599.jpg": () => import("./assets/DSC_0599-B2cRa8B2.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0600.jpg": () => import("./assets/DSC_0600-BSOjNRGG.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0601.jpg": () => import("./assets/DSC_0601-eR4cGtYn.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0602.jpg": () => import("./assets/DSC_0602-D_yNzqSL.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0603.jpg": () => import("./assets/DSC_0603-DLur-DBU.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0604.jpg": () => import("./assets/DSC_0604-DYlMdEiV.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0605.jpg": () => import("./assets/DSC_0605-CT-wQtSN.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0606.jpg": () => import("./assets/DSC_0606-CbnoLdZP.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0607.jpg": () => import("./assets/DSC_0607-CNk22zfo.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0608.jpg": () => import("./assets/DSC_0608-C_3F3jRu.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0609.jpg": () => import("./assets/DSC_0609-Dxexh54h.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0610.jpg": () => import("./assets/DSC_0610-CtAWA0hu.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0618.jpg": () => import("./assets/DSC_0618-nUvjZmSk.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0628.jpg": () => import("./assets/DSC_0628--fEW54Je.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0629.jpg": () => import("./assets/DSC_0629-Cw7oG4f5.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0630.jpg": () => import("./assets/DSC_0630-C7fz8I_Q.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0636.jpg": () => import("./assets/DSC_0636-Csez7wp6.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0657.jpg": () => import("./assets/DSC_0657-DZ0MVyfb.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0658.jpg": () => import("./assets/DSC_0658-DGjKmkbz.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0662.jpg": () => import("./assets/DSC_0662-BXcWRhjW.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0663.jpg": () => import("./assets/DSC_0663-BidtQANX.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0664.jpg": () => import("./assets/DSC_0664-zdGeVwfW.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0665.jpg": () => import("./assets/DSC_0665-DsgeyxUz.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0666.jpg": () => import("./assets/DSC_0666-aBGe0n-n.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0667.jpg": () => import("./assets/DSC_0667-DDg1gjah.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0681.jpg": () => import("./assets/DSC_0681-CeBlfLzc.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0682.jpg": () => import("./assets/DSC_0682-D0OYpaPC.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0683.jpg": () => import("./assets/DSC_0683-CfXStAuM.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0684.jpg": () => import("./assets/DSC_0684-D0Cix60t.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0685.jpg": () => import("./assets/DSC_0685-Daak91la.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0695.jpg": () => import("./assets/DSC_0695-CGl355It.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0696.jpg": () => import("./assets/DSC_0696-etv9AAr3.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0697.jpg": () => import("./assets/DSC_0697-pAojZyWy.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0698.jpg": () => import("./assets/DSC_0698-B5CQATB6.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0699.jpg": () => import("./assets/DSC_0699-fqBKYmMU.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0719.jpg": () => import("./assets/DSC_0719-DvS-dFFq.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0726.jpg": () => import("./assets/DSC_0726-DC8bHVND.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0727.jpg": () => import("./assets/DSC_0727-Pv_tPS2o.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0732.jpg": () => import("./assets/DSC_0732-B1h0GQij.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0733.jpg": () => import("./assets/DSC_0733-q_wwCcN8.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0734.jpg": () => import("./assets/DSC_0734-DHjvfxqA.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0740.jpg": () => import("./assets/DSC_0740-zG8L0NtA.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0741.jpg": () => import("./assets/DSC_0741-B_-Zd3XB.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0742.jpg": () => import("./assets/DSC_0742-BOFJsV_J.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0743.jpg": () => import("./assets/DSC_0743-BzF07S3c.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0744.jpg": () => import("./assets/DSC_0744-yvuyYT6l.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0745.jpg": () => import("./assets/DSC_0745-DQfD1QWx.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0747.jpg": () => import("./assets/DSC_0747-Ba38IXdC.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0748.jpg": () => import("./assets/DSC_0748-B2XDh15n.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0750.jpg": () => import("./assets/DSC_0750-nmfj5UjW.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0752.jpg": () => import("./assets/DSC_0752-D7R8gTf5.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0753.jpg": () => import("./assets/DSC_0753-BCTaGKYK.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0754.jpg": () => import("./assets/DSC_0754-CIMGsVi1.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0755.jpg": () => import("./assets/DSC_0755-ChzzzDS9.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0756.jpg": () => import("./assets/DSC_0756-DcDXjgEm.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0757.jpg": () => import("./assets/DSC_0757-j5j5Fhcc.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0758.jpg": () => import("./assets/DSC_0758-DE1SliVf.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0759.jpg": () => import("./assets/DSC_0759-D0GYopab.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0764.jpg": () => import("./assets/DSC_0764-D7nXmdUU.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0765.jpg": () => import("./assets/DSC_0765-ByYm3RW0.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0766.jpg": () => import("./assets/DSC_0766-BQ0c2kn4.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0768.jpg": () => import("./assets/DSC_0768-Dk_m1ENj.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0769.jpg": () => import("./assets/DSC_0769-Ct87eVjn.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0770.jpg": () => import("./assets/DSC_0770-CEAHWudK.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0772.jpg": () => import("./assets/DSC_0772-CTfYd-Gn.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0773.jpg": () => import("./assets/DSC_0773-CQ7LBd9j.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0774.jpg": () => import("./assets/DSC_0774-DxG8MDSN.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0775.jpg": () => import("./assets/DSC_0775-Cpo2alGZ.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0776.jpg": () => import("./assets/DSC_0776-DHZLo7VK.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0777.jpg": () => import("./assets/DSC_0777-sKzTCHct.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0778.jpg": () => import("./assets/DSC_0778-CPkfx730.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0779.jpg": () => import("./assets/DSC_0779-P5k9ynzn.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0780.jpg": () => import("./assets/DSC_0780-ByWuQBVo.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0781.jpg": () => import("./assets/DSC_0781-w6trZaKe.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0782.jpg": () => import("./assets/DSC_0782-C57JNlJg.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0784.jpg": () => import("./assets/DSC_0784-BXDHEGPj.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0785.jpg": () => import("./assets/DSC_0785-rumOHQM1.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0786.jpg": () => import("./assets/DSC_0786-Bx7X-I0h.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0787.jpg": () => import("./assets/DSC_0787-Dt8Apafq.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0788.jpg": () => import("./assets/DSC_0788-yfaXYT7m.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0789.jpg": () => import("./assets/DSC_0789-DzNQuIBr.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0790.jpg": () => import("./assets/DSC_0790-CPKxkdMo.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0791.jpg": () => import("./assets/DSC_0791-BWE5a_kr.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0792.jpg": () => import("./assets/DSC_0792-CeXFOo2t.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0793.jpg": () => import("./assets/DSC_0793-3S0nHHxj.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0794.jpg": () => import("./assets/DSC_0794-Bexf4ChL.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0795.jpg": () => import("./assets/DSC_0795-AbgQ4Wc_.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0796.jpg": () => import("./assets/DSC_0796-Bl8bxkMK.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0797.jpg": () => import("./assets/DSC_0797-BN1fN4p2.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0798.jpg": () => import("./assets/DSC_0798-tYzSsV2v.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0799.jpg": () => import("./assets/DSC_0799-DPJ4UGF6.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0801.jpg": () => import("./assets/DSC_0801-DyNGYRkV.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0802.jpg": () => import("./assets/DSC_0802-BVyUEpPk.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0803.jpg": () => import("./assets/DSC_0803-C03fzFLH.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0804.jpg": () => import("./assets/DSC_0804-B8ry30B7.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0805.jpg": () => import("./assets/DSC_0805-CSiJUkX9.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0806.jpg": () => import("./assets/DSC_0806-tRq06V3a.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0807.jpg": () => import("./assets/DSC_0807-CiWE_sVd.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0808.jpg": () => import("./assets/DSC_0808-D60S1pey.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0810.jpg": () => import("./assets/DSC_0810-CAJTvIlc.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0811.jpg": () => import("./assets/DSC_0811-_nyZi5lu.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0813.jpg": () => import("./assets/DSC_0813-N_FZ7HKy.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0814.jpg": () => import("./assets/DSC_0814-DEF9iWkt.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0815.jpg": () => import("./assets/DSC_0815-QJRviaWO.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0816.jpg": () => import("./assets/DSC_0816-CQnvngRW.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0817.jpg": () => import("./assets/DSC_0817-BRbEss-9.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0818.jpg": () => import("./assets/DSC_0818-C2BMMS0V.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0819.jpg": () => import("./assets/DSC_0819-Bog2OMmp.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0820.jpg": () => import("./assets/DSC_0820-DI9lAXfr.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0821.jpg": () => import("./assets/DSC_0821-B8YjA9Il.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0822.jpg": () => import("./assets/DSC_0822-JLk5MNBA.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0823.jpg": () => import("./assets/DSC_0823-BHZnyyzn.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0824.jpg": () => import("./assets/DSC_0824-DaZynUHx.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0825.jpg": () => import("./assets/DSC_0825-Dg309zZ3.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0826.jpg": () => import("./assets/DSC_0826-DDwm_tL3.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0828.jpg": () => import("./assets/DSC_0828-CWm5QEVe.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0829.jpg": () => import("./assets/DSC_0829-BnWfpIu6.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0830.jpg": () => import("./assets/DSC_0830-BnZ6ryQf.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0831.jpg": () => import("./assets/DSC_0831-DyF-gI9h.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0832.jpg": () => import("./assets/DSC_0832-B6a99dqy.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0833.jpg": () => import("./assets/DSC_0833-DNn-RhUH.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0834.jpg": () => import("./assets/DSC_0834-Bx63YA4I.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0835.jpg": () => import("./assets/DSC_0835-D-lg3F1X.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0836.jpg": () => import("./assets/DSC_0836-cjgkXKsq.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0837.jpg": () => import("./assets/DSC_0837-DfjUp22N.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0838.jpg": () => import("./assets/DSC_0838-CezcxMns.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0839.jpg": () => import("./assets/DSC_0839-CzXgFEhG.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0840.jpg": () => import("./assets/DSC_0840-Ca9y3Arl.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0841.jpg": () => import("./assets/DSC_0841-vQ0bLjOf.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0842.jpg": () => import("./assets/DSC_0842-CJJ2Svo5.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0843.jpg": () => import("./assets/DSC_0843-C1gch0E4.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0844.jpg": () => import("./assets/DSC_0844-D1MsUFXt.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0845.jpg": () => import("./assets/DSC_0845-Ua2rM-Rf.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0846.jpg": () => import("./assets/DSC_0846-DBGXyMYa.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0847.jpg": () => import("./assets/DSC_0847-DAxZi2F7.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0848.jpg": () => import("./assets/DSC_0848-CctsoH7J.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0849.jpg": () => import("./assets/DSC_0849-DUz7sWsZ.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0850.jpg": () => import("./assets/DSC_0850-CR5Imuc9.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0851.jpg": () => import("./assets/DSC_0851-DTpUMocx.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0852.jpg": () => import("./assets/DSC_0852-CyyKjn0M.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0853.jpg": () => import("./assets/DSC_0853-BVS8CKVn.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0854.jpg": () => import("./assets/DSC_0854-DEmlk7pE.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0855.jpg": () => import("./assets/DSC_0855--ZmAGzkg.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0856.jpg": () => import("./assets/DSC_0856-h_uSUxTJ.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0857.jpg": () => import("./assets/DSC_0857-7zJXIZ5_.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0858.jpg": () => import("./assets/DSC_0858-CH7FKAd9.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0917.jpg": () => import("./assets/DSC_0917-Q63P1N_e.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0920.jpg": () => import("./assets/DSC_0920-BnBj9chv.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0928.jpg": () => import("./assets/DSC_0928-9KZw0iQm.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0935.jpg": () => import("./assets/DSC_0935-aw3LYGgw.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0936.jpg": () => import("./assets/DSC_0936-DHtIIqdr.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0954.jpg": () => import("./assets/DSC_0954-CoGIZt87.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0955.jpg": () => import("./assets/DSC_0955-uCVmSzDc.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0956.jpg": () => import("./assets/DSC_0956-DBDS4RpS.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0957.jpg": () => import("./assets/DSC_0957-ZOx3_O6x.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0958.jpg": () => import("./assets/DSC_0958-BmgZ4Ezk.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0959.jpg": () => import("./assets/DSC_0959-DGAdmWeg.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0960.jpg": () => import("./assets/DSC_0960-CEIKME2e.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0961.jpg": () => import("./assets/DSC_0961-DpJvnsLy.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0962.jpg": () => import("./assets/DSC_0962-GSdSmCSA.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0963.jpg": () => import("./assets/DSC_0963-CeD512kx.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0964.jpg": () => import("./assets/DSC_0964-Ckp8mk-G.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0965.jpg": () => import("./assets/DSC_0965-Bb1pabWu.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_0966.jpg": () => import("./assets/DSC_0966-C1yPk8vE.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1020.jpg": () => import("./assets/DSC_1020-GYSyu38d.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1038.jpg": () => import("./assets/DSC_1038-CTx4GUDE.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1085.jpg": () => import("./assets/DSC_1085-BjpmUBXR.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1087.jpg": () => import("./assets/DSC_1087-C-zmu5rd.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1098.jpg": () => import("./assets/DSC_1098-DHbGoBuY.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1099.jpg": () => import("./assets/DSC_1099-DWch_spV.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1100.jpg": () => import("./assets/DSC_1100-BQfE8H6P.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1101.jpg": () => import("./assets/DSC_1101-D3GvGt7V.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1102.jpg": () => import("./assets/DSC_1102-UIx4scHz.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1104.jpg": () => import("./assets/DSC_1104-CNzWZJY1.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1121.jpg": () => import("./assets/DSC_1121-fBkmMoAr.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1122.jpg": () => import("./assets/DSC_1122-CH7r8K9l.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1123.jpg": () => import("./assets/DSC_1123-B6TUwgzW.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1129.jpg": () => import("./assets/DSC_1129-DhLoS7qk.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/DSC_1130.jpg": () => import("./assets/DSC_1130-C_ndUao8.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/WhatsApp Image 2024-10-15 at 20.34.10_88ce62fc.jpg": () => import("./assets/WhatsApp Image 2024-10-15 at 20.34.10_88ce62fc-DeaOrlPv.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/WhatsApp Image 2024-10-15 at 20.34.11_1dd3715b.jpg": () => import("./assets/WhatsApp Image 2024-10-15 at 20.34.11_1dd3715b-qT9rd9--.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/WhatsApp Image 2024-10-15 at 20.34.11_734bed50.jpg": () => import("./assets/WhatsApp Image 2024-10-15 at 20.34.11_734bed50-BYiDqqLB.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/WhatsApp Image 2024-10-15 at 20.34.12_25efa673.jpg": () => import("./assets/WhatsApp Image 2024-10-15 at 20.34.12_25efa673-DI_SV2XK.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/WhatsApp Image 2024-10-15 at 20.34.12_3aba9e12.jpg": () => import("./assets/WhatsApp Image 2024-10-15 at 20.34.12_3aba9e12-DbBMo3B4.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/WhatsApp Image 2024-10-15 at 20.34.13_24f95861.jpg": () => import("./assets/WhatsApp Image 2024-10-15 at 20.34.13_24f95861-CgajhAhz.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/WhatsApp Image 2024-10-15 at 20.34.13_52568242.jpg": () => import("./assets/WhatsApp Image 2024-10-15 at 20.34.13_52568242-Fj8mKIhe.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/WhatsApp Image 2024-10-15 at 20.34.13_5c086a99.jpg": () => import("./assets/WhatsApp Image 2024-10-15 at 20.34.13_5c086a99-ecQoBM2h.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/WhatsApp Image 2024-10-15 at 20.34.13_9eb78a71.jpg": () => import("./assets/WhatsApp Image 2024-10-15 at 20.34.13_9eb78a71-CC1CqMBz.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/WhatsApp Image 2024-10-15 at 20.34.14_5455fa69.jpg": () => import("./assets/WhatsApp Image 2024-10-15 at 20.34.14_5455fa69-7n5YpoJz.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/WhatsApp Image 2024-10-15 at 20.34.14_8ddc0543.jpg": () => import("./assets/WhatsApp Image 2024-10-15 at 20.34.14_8ddc0543-bfSlifPr.js"), "/src/assets/Gallery/PROJEKAT - MODERNA KUĆA/WhatsApp Image 2024-10-15 at 20.34.15_28b44043.jpg": () => import("./assets/WhatsApp Image 2024-10-15 at 20.34.15_28b44043-Bw7DDfxK.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/10_zid.jpg": () => import("./assets/10_zid-Olh52tnK.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/11_krov.jpg": () => import("./assets/11_krov-C6YGJtge.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/12_krov.jpg": () => import("./assets/12_krov-wtTkT1DA.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/13_krov.jpg": () => import("./assets/13_krov-DsaYTier.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/14_krov.jpg": () => import("./assets/14_krov-D8uMPX11.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/15_krov.jpg": () => import("./assets/15_krov-C9l2Ypev.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/16_krov.jpg": () => import("./assets/16_krov-BNSF8OzK.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/1_kuca_grubi.jpg": () => import("./assets/1_kuca_grubi-njWGBuPg.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/2_temelj_grubi.jpg": () => import("./assets/2_temelj_grubi-0Abr7RK7.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/3_temelj.jpg": () => import("./assets/3_temelj-D02gUg5K.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/4_temelj.jpg": () => import("./assets/4_temelj-JRhoexof.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/5_temelj.jpg": () => import("./assets/5_temelj-DZqDKTNw.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/6_temelj.jpg": () => import("./assets/6_temelj-DXr-dmeT.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/7_zid.jpg": () => import("./assets/7_zid--ailW5PH.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/8_zid.jpg": () => import("./assets/8_zid-B4CGKIPl.js"), "/src/assets/Gallery/PROJEKAT - PANČEVO KUĆA/9_zid.jpg": () => import("./assets/9_zid-D9hXYQKE.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791910172.jpg": () => import("./assets/1540791910172-B-lhnUu5.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791913347.jpg": () => import("./assets/1540791913347-BOsm0OLR.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791917431.jpg": () => import("./assets/1540791917431-D-orXwsl.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791924028.jpg": () => import("./assets/1540791924028-PhgxCwRB.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791937250.jpg": () => import("./assets/1540791937250-C4Sj0SZx.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791940255.jpg": () => import("./assets/1540791940255-CvPaPM96.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791940882.jpg": () => import("./assets/1540791940882-C8h42Plh.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791943818.jpg": () => import("./assets/1540791943818-Dh-Y4ywN.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791944159.jpg": () => import("./assets/1540791944159-B_wVFaCy.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791944495.jpg": () => import("./assets/1540791944495-BY6iPSGw.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791945234.jpg": () => import("./assets/1540791945234-DuIAnHHa.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791945523.jpg": () => import("./assets/1540791945523-C8ZsoMQL.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791947153.jpg": () => import("./assets/1540791947153-CHwNmYMo.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791949101.jpg": () => import("./assets/1540791949101-kdjEdMnJ.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791951208.jpg": () => import("./assets/1540791951208-CKcvT6G8.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791965491.jpg": () => import("./assets/1540791965491-DEDziTpl.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791966060.jpg": () => import("./assets/1540791966060-CjAZUsuW.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791966565.jpg": () => import("./assets/1540791966565-B5fqFw6b.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791969058.jpg": () => import("./assets/1540791969058-B50rJKRq.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791969323.jpg": () => import("./assets/1540791969323-wx_otsFD.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791972110.jpg": () => import("./assets/1540791972110-BlQPB1ly.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791972445.jpg": () => import("./assets/1540791972445-Bs4zmpcL.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791978162.jpg": () => import("./assets/1540791978162-DfhVKVgV.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791993468.jpg": () => import("./assets/1540791993468-D50hgWAm.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791993776.jpg": () => import("./assets/1540791993776-BkMlK5iE.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791995004.jpg": () => import("./assets/1540791995004-DIxKMP6k.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791997765.jpg": () => import("./assets/1540791997765-BQ6gZLd-.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791998604.jpg": () => import("./assets/1540791998604-g7sMoKfk.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540791999152.jpg": () => import("./assets/1540791999152-O-3ASWcW.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540792057624.jpg": () => import("./assets/1540792057624-Ci5ikc8r.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540792067340.jpg": () => import("./assets/1540792067340-D5xSOweB.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540792067875.jpg": () => import("./assets/1540792067875-MxjoStem.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540792068234.jpg": () => import("./assets/1540792068234-IJnzbwCL.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540792068593.jpg": () => import("./assets/1540792068593-DBgz3KFd.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540792068905.jpg": () => import("./assets/1540792068905-BA9CnJwX.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540792069288.jpg": () => import("./assets/1540792069288-C0V_J329.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540792069612.jpg": () => import("./assets/1540792069612-BJgEGKsm.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540792070194.jpg": () => import("./assets/1540792070194-BZ00m_kd.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1540792073857.jpg": () => import("./assets/1540792073857-Dl0mYM9J.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/1_kolaz.jpg": () => import("./assets/1_kolaz-DVPLQZs1.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA 2/2_kolaž.jpg": () => import("./assets/2_kolaž-LdRFXbtG.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/10_temelj.jpg": () => import("./assets/10_temelj-DNyPgOAY.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/11_temelj.jpg": () => import("./assets/11_temelj-DsdQx3Z4.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/12_temelj.jpg": () => import("./assets/12_temelj-o9D8DvHf.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/13_temelj.jpg": () => import("./assets/13_temelj-DgegjHDC.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/14_temelj.jpg": () => import("./assets/14_temelj-BCiOJ_6z.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/15_temelj.jpg": () => import("./assets/15_temelj-oyRePUje.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/16_temelj.jpg": () => import("./assets/16_temelj-Iv-6STZQ.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/1_finale.jpg": () => import("./assets/1_finale-BKjx3dpq.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/2_finale.jpg": () => import("./assets/2_finale-BCtFYDv6.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/3_temelj.jpg": () => import("./assets/3_temelj-DW-Wpipx.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/4_temelj.jpg": () => import("./assets/4_temelj-DDfvNwEz.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/5_temelj.jpg": () => import("./assets/5_temelj-Bvc60ezs.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/6_temelj.jpg": () => import("./assets/6_temelj-BFd8FYec.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/7_temelj.jpg": () => import("./assets/7_temelj-DZyLuzHI.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/8_temelj.jpg": () => import("./assets/8_temelj-B1SGTQGC.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/9_temelj.jpg": () => import("./assets/9_temelj-BrsZjePu.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0345.jpg": () => import("./assets/DSC_0345-CEacly27.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0355.jpg": () => import("./assets/DSC_0355-SeibFURO.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0376.jpg": () => import("./assets/DSC_0376-CeC8FquW.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0379.jpg": () => import("./assets/DSC_0379-TSYkX8RT.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0381.jpg": () => import("./assets/DSC_0381-DmA36Rgq.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0384.jpg": () => import("./assets/DSC_0384-ZnTM8-wJ.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0394.jpg": () => import("./assets/DSC_0394-BA9nymHW.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0403.jpg": () => import("./assets/DSC_0403-BoYSA3Sy.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0406.jpg": () => import("./assets/DSC_0406--vDl15pe.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0410.jpg": () => import("./assets/DSC_0410-DURY-zHE.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0411.jpg": () => import("./assets/DSC_0411-BKD60Lhh.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0413.jpg": () => import("./assets/DSC_0413-BF3nc2i0.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0444.jpg": () => import("./assets/DSC_0444-jUMLuJuG.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0478.jpg": () => import("./assets/DSC_0478-BziFgyDv.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0480.jpg": () => import("./assets/DSC_0480-CwPN2jiy.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0483.jpg": () => import("./assets/DSC_0483-4TbQgg-m.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0516.jpg": () => import("./assets/DSC_0516-BgoZgg8G.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0518.jpg": () => import("./assets/DSC_0518-BwjqNnpz.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0534.jpg": () => import("./assets/DSC_0534-QZ9-6dCE.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0535.jpg": () => import("./assets/DSC_0535-BlDEEt7l.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0537.jpg": () => import("./assets/DSC_0537-DFw21DD7.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0540.jpg": () => import("./assets/DSC_0540-BJdZn7-H.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0541.jpg": () => import("./assets/DSC_0541-DCH-1R4y.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0561.jpg": () => import("./assets/DSC_0561-Cpie1Kt3.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0564.jpg": () => import("./assets/DSC_0564-C5aIr7Dw.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0586.jpg": () => import("./assets/DSC_0586-DdVySckj.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0587.jpg": () => import("./assets/DSC_0587-D5-nUNb2.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0588.jpg": () => import("./assets/DSC_0588-OUu-0TcN.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0611.jpg": () => import("./assets/DSC_0611-D9vxKXqi.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0612.jpg": () => import("./assets/DSC_0612-CgSQjIUs.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0613.jpg": () => import("./assets/DSC_0613-D6FCtJFr.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0614.jpg": () => import("./assets/DSC_0614-BKfK7dRM.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0615.jpg": () => import("./assets/DSC_0615-DS3JQ4xQ.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0616.jpg": () => import("./assets/DSC_0616-CXKzscYv.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0619.jpg": () => import("./assets/DSC_0619-Blcjy2MW.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0622.jpg": () => import("./assets/DSC_0622-CNIqUfeC.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0623.jpg": () => import("./assets/DSC_0623-9Xa9YwHJ.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0625.jpg": () => import("./assets/DSC_0625-yyZbZ20u.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0631.jpg": () => import("./assets/DSC_0631-DWPYT42m.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0634.jpg": () => import("./assets/DSC_0634-CTEX0i8W.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0655.jpg": () => import("./assets/DSC_0655-CIiZ6kS0.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0671.jpg": () => import("./assets/DSC_0671-DNUTog5M.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0691.jpg": () => import("./assets/DSC_0691-uwhEiksB.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0702.jpg": () => import("./assets/DSC_0702-C7QeWijY.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0703.jpg": () => import("./assets/DSC_0703-SUOvbccj.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0714.jpg": () => import("./assets/DSC_0714-DDG8anKA.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0728.jpg": () => import("./assets/DSC_0728-C39bwAYF.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0731.jpg": () => import("./assets/DSC_0731-BYRdzHgL.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0736.jpg": () => import("./assets/DSC_0736-CjX2xKDj.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_0738.jpg": () => import("./assets/DSC_0738-DSWZa7RQ.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_1019.jpg": () => import("./assets/DSC_1019-JmZu6A-z.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_1115.jpg": () => import("./assets/DSC_1115-DKqIG_Rc.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_1118.jpg": () => import("./assets/DSC_1118-B7saWhVQ.js"), "/src/assets/Gallery/PROJEKAT - PRIZEMNA KUĆA/DSC_1131.jpg": () => import("./assets/DSC_1131-CUl1mrec.js"), "/src/assets/Gallery/PROJEKAT - REKONSTRUKCIJA KUĆE/10_pod.jpg": () => import("./assets/10_pod-n63j2k7G.js"), "/src/assets/Gallery/PROJEKAT - REKONSTRUKCIJA KUĆE/11_zid.jpg": () => import("./assets/11_zid-DgOQpROH.js"), "/src/assets/Gallery/PROJEKAT - REKONSTRUKCIJA KUĆE/12_zid.jpg": () => import("./assets/12_zid-BIfdMx0H.js"), "/src/assets/Gallery/PROJEKAT - REKONSTRUKCIJA KUĆE/13_zid.jpg": () => import("./assets/13_zid-CQ_bMKw7.js"), "/src/assets/Gallery/PROJEKAT - REKONSTRUKCIJA KUĆE/1_fasada_pre_prosle.jpg": () => import("./assets/1_fasada_pre_prosle-Z9fJnUD6.js"), "/src/assets/Gallery/PROJEKAT - REKONSTRUKCIJA KUĆE/2_fasada.jpg": () => import("./assets/2_fasada-P1hGHnI2.js"), "/src/assets/Gallery/PROJEKAT - REKONSTRUKCIJA KUĆE/3_fasada.jpg": () => import("./assets/3_fasada-bZFw_UmE.js"), "/src/assets/Gallery/PROJEKAT - REKONSTRUKCIJA KUĆE/4_dvoriste.jpg": () => import("./assets/4_dvoriste-y0cMlo0b.js"), "/src/assets/Gallery/PROJEKAT - REKONSTRUKCIJA KUĆE/5_dvoriste.jpg": () => import("./assets/5_dvoriste-Dl1UaGo_.js"), "/src/assets/Gallery/PROJEKAT - REKONSTRUKCIJA KUĆE/6_kupatilo.jpg": () => import("./assets/6_kupatilo-CmVmg4mx.js"), "/src/assets/Gallery/PROJEKAT - REKONSTRUKCIJA KUĆE/7_pod.jpg": () => import("./assets/7_pod-Ck95VsMs.js"), "/src/assets/Gallery/PROJEKAT - REKONSTRUKCIJA KUĆE/8_pod.jpg": () => import("./assets/8_pod-G9y9RA1E.js"), "/src/assets/Gallery/PROJEKAT - REKONSTRUKCIJA KUĆE/9_pod.jpg": () => import("./assets/9_pod-D7zX45I2.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/10_dvoriste.jpg": () => import("./assets/10_dvoriste-BhAEjgrU.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/11_dvoriste.jpg": () => import("./assets/11_dvoriste-Sf9sFauj.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/12_dvoriste.jpg": () => import("./assets/12_dvoriste-zcQF3X3u.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/13_sank.jpg": () => import("./assets/13_sank-DB0b0hOw.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/14_sank.jpg": () => import("./assets/14_sank-nAb3gD-9.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/15_sank.jpg": () => import("./assets/15_sank-BhU6j7p_.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/16_sank.jpg": () => import("./assets/16_sank-CqfvXkI8.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/17_zid.jpg": () => import("./assets/17_zid-BG3-zUCF.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/18_zid.jpg": () => import("./assets/18_zid-CK09wD_i.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/1_KOLAZ.jpg": () => import("./assets/1_KOLAZ-CJm7wPgq.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/2_KOLAZ.jpg": () => import("./assets/2_KOLAZ-Bhjf1qOZ.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/3_KOLAZ.jpg": () => import("./assets/3_KOLAZ-B3hIqhIO.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/4_KOLAZ.jpg": () => import("./assets/4_KOLAZ-CHTkDtTw.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/5_KOLAZ.jpg": () => import("./assets/5_KOLAZ-DlM7_L4g.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/6_KOLAZ.jpg": () => import("./assets/6_KOLAZ-BCdpA2Wf.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/7_KOLAZ.jpg": () => import("./assets/7_KOLAZ-B7kt9B9Z.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/8_KOLAZ.jpg": () => import("./assets/8_KOLAZ-BnQnSjqR.js"), "/src/assets/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/9_dvoriste.jpg": () => import("./assets/9_dvoriste-B5376MqJ.js") });
    const locations = ref([]);
    const showSlideshow = ref(false);
    const currentImages = ref([]);
    const currentLocationName = ref("");
    const getFolderAndPrefix = (path) => {
      const parts = path.split("/");
      const folderName = parts[4];
      const prefix = parseInt(parts.pop().split("_")[0], 10);
      return { folderName, prefix };
    };
    const loadImages = async () => {
      const locationMap = {};
      for (const path of Object.keys(imageModules)) {
        const { folderName, prefix } = getFolderAndPrefix(path);
        if (!locationMap[folderName]) {
          locationMap[folderName] = { displayName: folderName, cover: "", images: [], paths: [] };
        }
        locationMap[folderName].paths.push({ prefix, path });
      }
      for (const folder of Object.values(locationMap)) {
        folder.paths.sort((a, b) => a.prefix - b.prefix);
        const firstImageModule = await imageModules[folder.paths[0].path]();
        folder.cover = firstImageModule.default;
        folder.images = folder.paths.map((file) => file.path);
      }
      locations.value = Object.values(locationMap);
    };
    const closeSlideshow = () => {
      showSlideshow.value = false;
      currentImages.value = [];
    };
    onMounted(loadImages);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gallery" }, _attrs))} data-v-dfd08b64><h2 data-v-dfd08b64>NAŠI PROJEKTI</h2><div class="gallery-grid" data-v-dfd08b64><!--[-->`);
      ssrRenderList(locations.value, (location) => {
        _push(`<div class="gallery-item" data-v-dfd08b64><img${ssrRenderAttr("src", location.cover)}${ssrRenderAttr("alt", location.displayName)} class="gallery-image" loading="lazy" data-v-dfd08b64><div class="location-name" data-v-dfd08b64>${ssrInterpolate(location.displayName)}</div></div>`);
      });
      _push(`<!--]--></div>`);
      if (showSlideshow.value) {
        _push(ssrRenderComponent(Slideshow, {
          images: currentImages.value,
          title: currentLocationName.value,
          onClose: closeSlideshow
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Gallery.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-dfd08b64"]]);
const _imports_0 = "/assets/logo-GyZ7rySq.jpeg";
const _sfc_main$4 = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const photos = ref([]);
    onMounted(() => {
      const imageFiles = /* @__PURE__ */ Object.assign({ "/src/assets/SlideShow/SlideShow/placeholder1.jpeg": () => import("./assets/placeholder1-4NVjPGpA.js"), "/src/assets/SlideShow/SlideShow/placeholder2.jpeg": () => import("./assets/placeholder2-C-yPvMo3.js"), "/src/assets/SlideShow/SlideShow/placeholder3.jpeg": () => import("./assets/placeholder3-D0MBs_Ap.js") });
      for (const path in imageFiles) {
        imageFiles[path]().then((mod) => {
          photos.value.push(mod.default);
        });
      }
    });
    const swiperRef = ref(null);
    const onSwiperInit = (swiper) => {
      swiperRef.value = swiper;
    };
    const onSwiperResize = () => {
      var _a;
      (_a = swiperRef.value) == null ? void 0 : _a.update();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))} data-v-d8e5a646><div class="banner-content" data-v-d8e5a646><img${ssrRenderAttr("src", _imports_0)} alt="Company Logo" class="banner-logo" data-v-d8e5a646></div><div class="banner-slideshow" data-v-d8e5a646>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Autoplay), unref(EffectFade)],
        autoplay: { delay: 5e3 },
        loop: photos.value.length > 1,
        effect: "fade",
        fadeEffect: { crossFade: true },
        speed: 1e3,
        onSwiper: onSwiperInit,
        onResize: onSwiperResize,
        class: "swiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(photos.value, (photo, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", photo)} alt="Slideshow Image" class="swiper-slide-img" data-v-d8e5a646${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: photo,
                        alt: "Slideshow Image",
                        class: "swiper-slide-img"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(photos.value, (photo, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: photo,
                      alt: "Slideshow Image",
                      class: "swiper-slide-img"
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="scroll-pointer" data-v-d8e5a646><p data-v-d8e5a646>GALERIJA</p><span class="fas fa-arrow-down arrow-icon" data-v-d8e5a646></span></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Banner.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d8e5a646"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  __ssrInlineRender: true,
  setup(__props) {
    const router2 = useRouter();
    useHead({
      title: "ASTRA INŽENJERING",
      meta: [
        { name: "description", content: "Welcome to astra-engineering - Explore our gallery and discover more about us!" },
        { name: "keywords", content: "home, astra-engineering, welcome, početna, galerija, dobrodošli, astra inženjering, astra inzenjering" },
        { property: "og:title", content: "astra inženjering, astra inzenjering" },
        { property: "og:description", content: "Welcome to astra inženjering - Explore our gallery and discover more about us!" }
      ],
      link: [
        { rel: "canonical", href: "https://astra-engineering.vercel.app" }
        // Update with your actual URL
      ]
    });
    const handleScroll = () => {
      const galleryElement = document.getElementById("gallery");
      if (galleryElement) {
        const rect = galleryElement.getBoundingClientRect();
        const triggerTrashold = 300;
        if (rect.top < window.innerHeight - triggerTrashold && rect.bottom >= triggerTrashold) {
          router2.push("/galerija");
        }
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><main>`);
      _push(ssrRenderComponent(Banner, null, null, _parent));
      _push(`<div id="gallery">`);
      _push(ssrRenderComponent(Gallery, null, null, _parent));
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/HomeView.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const subject = ref("");
    const message = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact" }, _attrs))} data-v-899d0624><div class="container" data-v-899d0624><div class="info-wrapper" data-v-899d0624><div class="info-box" data-v-899d0624><i class="fas fa-phone-alt" data-v-899d0624></i><h3 data-v-899d0624>Telefon</h3><div class="phone-wrapper" data-v-899d0624><p id="phoneNumber" data-v-899d0624>+381 61/2700-432</p><button class="copy-button" data-v-899d0624><i class="fas fa-copy" data-v-899d0624></i></button></div></div><div class="info-box" data-v-899d0624><i class="fas fa-envelope" data-v-899d0624></i><h3 data-v-899d0624>Email</h3><p data-v-899d0624><a href="mailto:goran@astraing.com" class="mail" data-v-899d0624>goran@astraing.com</a></p></div><div class="info-box" data-v-899d0624><i class="fas fa-map-marker-alt" data-v-899d0624></i><h3 data-v-899d0624>Adresa</h3><p data-v-899d0624>Vojni put 210/II</p><p data-v-899d0624>Zemun, Beograd</p></div></div></div><div class="contact-box" data-v-899d0624><i class="fas fa-paper-plane" data-v-899d0624></i><form data-v-899d0624><h3 data-v-899d0624>Pošaljite nam poruku</h3><div data-v-899d0624><label for="email" data-v-899d0624>Vaš mail: </label><input type="email" id="email"${ssrRenderAttr("value", email.value)} required disabled data-v-899d0624></div><div data-v-899d0624><label for="subject" data-v-899d0624>Naslov: </label><input type="text" id="subject"${ssrRenderAttr("value", subject.value)} required disabled data-v-899d0624></div><div data-v-899d0624><label for="message" data-v-899d0624>Poruka: </label><textarea id="message" required disabled data-v-899d0624>${ssrInterpolate(message.value)}</textarea></div><button type="submit" class="btn-submit" disabled data-v-899d0624>OPCIJA KONTAKTIRANJA U IZRADI!</button></form></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Contact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-899d0624"]]);
const _sfc_main$1 = {
  __name: "ContactView",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "KONTAKT",
      meta: [
        { name: "description", content: "Contact astra-engineering." },
        { name: "keywords", content: "contact, astra-engineering, kontakt, astra inženjering kontakt, astra inzenjering kontakt" },
        { property: "og:title", content: "astra inženjering" },
        { property: "og:description", content: "Contact astra-engineering.,astra inzenjering kontakt." }
      ],
      link: [
        { rel: "canonical", href: "https://astra-engineering.vercel.app/contact" }
        // Update with your actual URL
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Contact, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ContactView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Offers",
  __ssrInlineRender: true,
  setup(__props) {
    const offers = [
      {
        title: "Rekonstrukcija objekata",
        description: "Obnavljanje i modernizacija postojećih objekata, sa posebnim akcentom na poboljšanje funkcionalnosti i estetike.",
        image: "/Images/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/1_KOLAZ.jpg"
      },
      {
        title: "Izgradnja novih objekata",
        description: "Kompleksni građevinski projekti za stambene, poslovne i industrijske objekte, sa detaljnim planiranjem i izvođenjem svih faza radova.",
        image: "/Images/Gallery/PROJEKAT - MODERNA KUĆA/1_kolaz.jpg"
      },
      {
        title: "Grubi građevinski radovi",
        description: "Temeljni i osnovni radovi potrebni za postavljanje strukture objekta, uključujući pripremu, temeljenje i zidanje.",
        image: "/Images/Gallery/PROJEKAT - TOZA/11_temelj.jpg"
      },
      {
        title: "Ornament gipsarski radovi",
        description: "Kreiranje dekorativnih gipsanih elemenata za unutrašnje i spoljašnje prostore.",
        image: "https://via.placeholder.com/300x200"
      },
      {
        title: "Elektro radovi",
        description: "Instalacija električnih sistema i održavanje elektroinstalacija.",
        image: "https://via.placeholder.com/300x200"
      },
      {
        title: "Spušten plafon, zidarski radovi",
        description: "Montaža spuštenih plafona i profesionalni zidarski radovi.",
        image: "https://via.placeholder.com/300x200"
      },
      {
        title: "Molersko-farbarski radovi",
        description: "Krečenje, farbanje i završni radovi na uređenju enterijera i eksterijera.",
        image: "https://via.placeholder.com/300x200"
      },
      {
        title: "Limarski radovi",
        description: "Izrada i montaža limenih elemenata, uključujući oluke, opšave i druge krovne elemente.",
        image: "https://via.placeholder.com/300x200"
      },
      {
        title: "Krovopokrivački radovi",
        description: "Postavljanje novih krovova i obnova postojećih krovnih konstrukcija.",
        image: "/Images/Gallery/PROJEKAT - TOZA/DSC_0736.jpg"
      },
      {
        title: "Hidroizolaterski radovi",
        description: "Primena visokokvalitetnih materijala za zaštitu objekata od vlage i vode.",
        image: "https://via.placeholder.com/300x200"
      },
      {
        title: "Keramičarski radovi",
        description: "Postavljanje i oblaganje pločicama, sa posebnom pažnjom na preciznost i estetiku.",
        image: "/Images/Gallery/PROJEKAT - VAVIJANA/13_plocice.jpg"
      },
      {
        title: "Tesarski radovi",
        description: "Izvođenje tesarskih radova, uključujući izradu i postavljanje drvenih konstrukcija.",
        image: "https://via.placeholder.com/300x200"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "offers-container" }, _attrs))} data-v-ab37d23f><h1 data-v-ab37d23f>NAŠE USLUGE</h1><div class="offers-grid" data-v-ab37d23f><!--[-->`);
      ssrRenderList(offers, (offer, index) => {
        _push(`<div class="offer-card" data-v-ab37d23f><div class="offer-image" data-v-ab37d23f><img${ssrRenderAttr("src", offer.image)} alt="Offer Image" data-v-ab37d23f></div><div class="offer-details" data-v-ab37d23f><h3 data-v-ab37d23f>${ssrInterpolate(offer.title)}</h3><p data-v-ab37d23f>${ssrInterpolate(offer.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Offers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Offers = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab37d23f"]]);
const routes = [
  {
    path: "/",
    name: "početna",
    component: _sfc_main$3,
    meta: {
      title: "ASTRA INŽENJERING"
    }
  },
  {
    path: "/onama",
    name: "onama",
    component: () => import("./assets/AboutView-c-6jPNKC.js"),
    meta: {
      title: "O NAMA"
    }
  },
  {
    path: "/kontakt",
    name: "kontakt",
    component: _sfc_main$1,
    meta: {
      title: "KONTAKT"
    }
  },
  {
    path: "/galerija",
    name: "galerija",
    component: Gallery,
    meta: {
      title: "GALERIJA"
    }
  },
  {
    path: "/usluge",
    name: "usluge",
    component: Offers,
    meta: {
      title: "USLUGE"
    }
  }
];
const router = createRouter({
  history: createWebHistory("/"),
  routes
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});
const createApp = ViteSSG(
  _sfc_main$7,
  { routes: router.options.routes },
  // Pass the router's routes
  (ctx) => {
    const head = createHead();
    ctx.app.use(head);
  }
);
export {
  _export_sfc as _,
  createApp
};
