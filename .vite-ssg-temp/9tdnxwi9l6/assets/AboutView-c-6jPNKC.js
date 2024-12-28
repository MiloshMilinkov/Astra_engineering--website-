import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useHead } from "@vueuse/head";
import { _ as _export_sfc } from "../main.mjs";
import "vite-ssg";
import "vue-router";
import "swiper/vue";
import "swiper/modules";
import "@fortawesome/fontawesome-free/js/all.js";
const _imports_0 = "/assets/logo2-RRDR0ITK.png";
const documentFilePath = "/Files/Referenc lista, Astra Inženjering.doc";
const documentFileName = "LISTA REFERENCI, Astra Inženjering.";
const _sfc_main = {
  __name: "AboutView",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "O NAMA",
      meta: [
        { name: "description", content: "About astra-engineering." },
        { name: "keywords", content: "about, astra-engineering, o nama, galerija, astra inženjering o nama, astra inzenjering o nama" },
        { property: "og:title", content: "About, O NAMA" },
        { property: "og:description", content: "About astra-engineering." }
      ],
      link: [
        { rel: "canonical", href: "https://astra-engineering.vercel.app/about" }
        // Update with your actual URL
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-6cdde345><div class="container" data-v-6cdde345><div class="content" data-v-6cdde345><div class="description-box" data-v-6cdde345><div class="div-logo" data-v-6cdde345><img${ssrRenderAttr("src", _imports_0)} alt="Company Logo" class="logo" data-v-6cdde345></div><div class="description" data-v-6cdde345><p data-v-6cdde345>Preduzeće ASTRA-inženjering se bavi izvođenjem građevinskih i građevinsko-zanatskih radova, kako na izgradnji novih, tako i na rekonstrukciji i adaptaciji postojećih objekata. Preduzeće je osnovano 1992. godine prerastanjem postojeće građevinsko-zanatske radnje (osnovana 1983. godine) u Preduzeće. Ključni inženjeri i tehničari su i pre osnivanja Preduzeća radili na poslovima u okviru zanatske radnje ili drugih preduzeća kao podizvođači.</p><p data-v-6cdde345>Mi smo vodeća građevinska firma sa čvrstom reputacijom za pružanje izuzetnog kvaliteta i usluge. Naš iskusni tim profesionalaca posvećen je obezbeđivanju najviših standarda majstorski rad, bezbednosti i pouzdanosti. Od stambenih do komercijalnih projekata, obrađujemo svaki detalj sa preciznošću i pažnjom.</p><p data-v-6cdde345> Naš cilj je da prevaziđemo očekivanja naših klijenata pružanjem inovativnih rešenja i održavanjem najvišeg nivoa zadovoljstva korisnika.</p></div><div data-v-6cdde345><i id="icon1" class="fas fa-file-word" data-v-6cdde345></i><a${ssrRenderAttr("href", documentFilePath)} download data-v-6cdde345><span data-v-6cdde345>${ssrInterpolate(documentFileName)}</span><i id="icon2" class="fas fa-download" data-v-6cdde345></i></a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/AboutView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6cdde345"]]);
export {
  AboutView as default
};
