import { createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext, createTextVNode, toDisplayString, openBlock, createBlock, ref, withModifiers, withDirectives, vModelText, vModelSelect, onBeforeUpdate, onMounted, nextTick, onUnmounted, Fragment, renderList, createCommentVNode, createSSRApp, h } from "vue";
import { ssrRenderVNode, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import { Link, useForm, Head, router, createInertiaApp } from "@inertiajs/vue3";
import { PhSquaresFour, PhStack, PhSignOut, PhTrafficCone, PhCheckCircle, PhList, PhX, PhEnvelopeSimple, PhMapPin, PhPaperPlaneTilt, PhArrowRight, PhGraph, PhChartBar, PhCloudArrowUp, PhDeviceMobile, PhCode, PhMegaphone, PhLightbulb, PhPaintBrush, PhRocketLaunch, PhHandshake, PhArticle, PhTimer, PhLifebuoy, PhShieldCheck, PhCpu, PhArrowsClockwise, PhDatabase, PhQuestion, PhCheck, PhFigmaLogo, PhNotionLogo, PhSlackLogo, PhGithubLogo, PhTerminalWindow } from "@phosphor-icons/vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { ZiggyVue } from "ziggy-js";
const _sfc_main$9 = {
  __name: "PrimaryButton",
  __ssrInlineRender: true,
  props: {
    href: { type: String, default: null },
    type: { type: String, default: "submit" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.href ? unref(Link) : "button"), mergeProps({
        href: __props.href,
        type: !__props.href ? __props.type : void 0,
        class: "inline-flex items-center justify-center px-8 py-3 bg-brand-indigo text-white font-bold tracking-wide rounded-lg transition-all duration-300 hover:bg-brand-indigo-dark hover:shadow-indigo-glow hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-indigo focus:ring-offset-2"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/PrimaryButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Admin Login" }, null, _parent));
      _push(`<div class="min-h-screen flex items-center justify-center bg-bg-light relative overflow-hidden"><div class="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"></div><div class="max-w-md w-full bg-white p-10 rounded-3xl shadow-premium border border-slate-100 relative z-10"><div class="text-center mb-10"><h1 class="text-4xl font-black text-brand-obsidian tracking-tight mb-2">VELT</h1><p class="text-brand-gray font-medium">Accès sécurisé administration</p></div>`);
      if (__props.status) {
        _push(`<div class="mb-4 font-medium text-sm text-green-600">${ssrInterpolate(__props.status)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-6"><div><label class="block text-sm font-bold text-brand-obsidian mb-2">Email</label><input type="email"${ssrRenderAttr("value", unref(form).email)} required autofocus class="w-full px-5 py-3 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian font-medium">`);
      if (unref(form).errors.email) {
        _push(`<div class="text-red-500 text-sm mt-2">${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block text-sm font-bold text-brand-obsidian mb-2">Mot de passe</label><input type="password"${ssrRenderAttr("value", unref(form).password)} required class="w-full px-5 py-3 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian font-medium"></div><div class="block"><label class="flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).remember) ? ssrLooseContain(unref(form).remember, null) : unref(form).remember) ? " checked" : ""} class="rounded border-gray-300 text-brand-indigo shadow-sm focus:ring-brand-indigo"><span class="ml-2 text-sm text-brand-gray font-medium">Se souvenir de moi</span></label></div>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        class: "w-full justify-center py-4 text-lg font-bold",
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Connexion `);
          } else {
            return [
              createTextVNode(" Connexion ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Auth/Login.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __name: "AdminLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-bg-light flex font-sans" }, _attrs))}><aside class="w-72 bg-brand-obsidian text-white flex flex-col relative z-20 shadow-2xl"><div class="p-8 pl-10">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "text-2xl font-black tracking-tight text-white hover:text-brand-indigo transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`VELT`);
          } else {
            return [
              createTextVNode("VELT")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav class="flex-1 px-6 space-y-2 py-8">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.dashboard"),
        class: ["flex items-center px-4 py-3 rounded-xl font-bold transition-all duration-200", _ctx.route().current("admin.dashboard") ? "bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20" : "text-slate-400 hover:text-white hover:bg-white/5"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PhSquaresFour), {
              size: 22,
              class: "mr-4",
              weight: "fill"
            }, null, _parent2, _scopeId));
            _push2(` Dashboard `);
          } else {
            return [
              createVNode(unref(PhSquaresFour), {
                size: 22,
                class: "mr-4",
                weight: "fill"
              }),
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "flex items-center px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-bold transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PhStack), {
              size: 22,
              class: "mr-4",
              weight: "bold"
            }, null, _parent2, _scopeId));
            _push2(` Projets `);
          } else {
            return [
              createVNode(unref(PhStack), {
                size: 22,
                class: "mr-4",
                weight: "bold"
              }),
              createTextVNode(" Projets ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="p-6 m-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm"><div class="text-white font-bold mb-4 flex items-center"><div class="w-8 h-8 bg-brand-indigo rounded-lg flex items-center justify-center mr-3 text-sm font-black shadow-inner">A</div><span class="truncate">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</span></div><button class="w-full flex items-center px-3 py-2 text-slate-400 hover:text-red-400 hover:bg-white/5 rounded-lg transition-all font-medium text-sm group">`);
      _push(ssrRenderComponent(unref(PhSignOut), {
        size: 18,
        class: "mr-3 group-hover:translate-x-1 transition-transform"
      }, null, _parent));
      _push(` Déconnexion </button></div></aside><main class="flex-1 h-screen overflow-y-auto bg-bg-light relative"><div class="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none fixed"></div><div class="p-12 relative z-10">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AdminLayout.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    isMaintenanceMode: Boolean
  },
  setup(__props) {
    const toggleMaintenance = () => {
      router.post(route("admin.maintenance.toggle"), {}, {
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Admin Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4"${_scopeId}><div${_scopeId}><h1 class="text-4xl font-black text-brand-obsidian tracking-tight mb-2"${_scopeId}>Dashboard</h1><p class="text-brand-gray font-medium text-lg"${_scopeId}>Vue d&#39;ensemble et contrôle du système.</p></div><div class="flex items-center bg-white p-3 pr-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"${_scopeId}><div class="mr-4 text-right"${_scopeId}><p class="text-xs font-bold uppercase tracking-wider text-slate-400"${_scopeId}>Mode Maintenance</p><p class="${ssrRenderClass([__props.isMaintenanceMode ? "text-brand-indigo" : "text-green-600", "text-sm font-bold"])}"${_scopeId}>${ssrInterpolate(__props.isMaintenanceMode ? "Activé" : "Désactivé")}</p></div><button class="${ssrRenderClass([__props.isMaintenanceMode ? "bg-brand-indigo" : "bg-slate-200", "relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-indigo focus:ring-offset-2"])}"${_scopeId}><span class="sr-only"${_scopeId}>Activer la maintenance</span><span class="${ssrRenderClass([__props.isMaintenanceMode ? "translate-x-7" : "translate-x-1", "inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-200 ease-in-out"])}"${_scopeId}></span></button></div></div>`);
            if (__props.isMaintenanceMode) {
              _push2(`<div class="mb-8 p-6 bg-brand-indigo/10 border border-brand-indigo/20 rounded-2xl flex items-center text-brand-indigo shadow-inner"${_scopeId}><div class="w-12 h-12 bg-brand-indigo rounded-xl flex items-center justify-center mr-5 flex-shrink-0 animate-pulse"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(PhTrafficCone), {
                size: 24,
                weight: "fill",
                class: "text-white"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><h3 class="font-bold text-xl mb-1"${_scopeId}>Le site est en maintenance</h3><p class="text-brand-indigo/80 font-medium"${_scopeId}>Le site public affiche la page d&#39;attente. Vous seul avez accès au site normal.</p></div></div>`);
            } else {
              _push2(`<div class="mb-8 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center text-emerald-800 shadow-sm"${_scopeId}><div class="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mr-5 flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(PhCheckCircle), {
                size: 24,
                weight: "fill",
                class: "text-white"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><h3 class="font-bold text-xl mb-1"${_scopeId}>Système opérationnel</h3><p class="text-emerald-700/80 font-medium"${_scopeId}>Le site est accessible à tous les visiteurs.</p></div></div>`);
            }
            _push2(`<div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><div class="bg-white border border-slate-100 rounded-3xl p-8 shadow-premium col-span-2"${_scopeId}><h2 class="text-xl font-bold text-brand-obsidian mb-4"${_scopeId}>Activité récente</h2><div class="h-48 bg-bg-light rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 font-medium"${_scopeId}> Graphique d&#39;activité (Bientôt) </div></div><div class="bg-white border border-slate-100 rounded-3xl p-8 shadow-premium"${_scopeId}><h2 class="text-xl font-bold text-brand-obsidian mb-4"${_scopeId}>Statistiques</h2><div class="space-y-4"${_scopeId}><div class="flex justify-between items-center p-3 bg-bg-light rounded-xl"${_scopeId}><span class="font-bold text-brand-gray"${_scopeId}>Projets</span><span class="text-brand-obsidian font-black text-lg"${_scopeId}>12</span></div><div class="flex justify-between items-center p-3 bg-bg-light rounded-xl"${_scopeId}><span class="font-bold text-brand-gray"${_scopeId}>Articles</span><span class="text-brand-obsidian font-black text-lg"${_scopeId}>3</span></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4" }, [
                createVNode("div", null, [
                  createVNode("h1", { class: "text-4xl font-black text-brand-obsidian tracking-tight mb-2" }, "Dashboard"),
                  createVNode("p", { class: "text-brand-gray font-medium text-lg" }, "Vue d'ensemble et contrôle du système.")
                ]),
                createVNode("div", { class: "flex items-center bg-white p-3 pr-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow" }, [
                  createVNode("div", { class: "mr-4 text-right" }, [
                    createVNode("p", { class: "text-xs font-bold uppercase tracking-wider text-slate-400" }, "Mode Maintenance"),
                    createVNode("p", {
                      class: ["text-sm font-bold", __props.isMaintenanceMode ? "text-brand-indigo" : "text-green-600"]
                    }, toDisplayString(__props.isMaintenanceMode ? "Activé" : "Désactivé"), 3)
                  ]),
                  createVNode("button", {
                    onClick: toggleMaintenance,
                    class: ["relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-indigo focus:ring-offset-2", __props.isMaintenanceMode ? "bg-brand-indigo" : "bg-slate-200"]
                  }, [
                    createVNode("span", { class: "sr-only" }, "Activer la maintenance"),
                    createVNode("span", {
                      class: ["inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-200 ease-in-out", __props.isMaintenanceMode ? "translate-x-7" : "translate-x-1"]
                    }, null, 2)
                  ], 2)
                ])
              ]),
              __props.isMaintenanceMode ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-8 p-6 bg-brand-indigo/10 border border-brand-indigo/20 rounded-2xl flex items-center text-brand-indigo shadow-inner"
              }, [
                createVNode("div", { class: "w-12 h-12 bg-brand-indigo rounded-xl flex items-center justify-center mr-5 flex-shrink-0 animate-pulse" }, [
                  createVNode(unref(PhTrafficCone), {
                    size: 24,
                    weight: "fill",
                    class: "text-white"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("h3", { class: "font-bold text-xl mb-1" }, "Le site est en maintenance"),
                  createVNode("p", { class: "text-brand-indigo/80 font-medium" }, "Le site public affiche la page d'attente. Vous seul avez accès au site normal.")
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "mb-8 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center text-emerald-800 shadow-sm"
              }, [
                createVNode("div", { class: "w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mr-5 flex-shrink-0" }, [
                  createVNode(unref(PhCheckCircle), {
                    size: 24,
                    weight: "fill",
                    class: "text-white"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("h3", { class: "font-bold text-xl mb-1" }, "Système opérationnel"),
                  createVNode("p", { class: "text-emerald-700/80 font-medium" }, "Le site est accessible à tous les visiteurs.")
                ])
              ])),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                createVNode("div", { class: "bg-white border border-slate-100 rounded-3xl p-8 shadow-premium col-span-2" }, [
                  createVNode("h2", { class: "text-xl font-bold text-brand-obsidian mb-4" }, "Activité récente"),
                  createVNode("div", { class: "h-48 bg-bg-light rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 font-medium" }, " Graphique d'activité (Bientôt) ")
                ]),
                createVNode("div", { class: "bg-white border border-slate-100 rounded-3xl p-8 shadow-premium" }, [
                  createVNode("h2", { class: "text-xl font-bold text-brand-obsidian mb-4" }, "Statistiques"),
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "flex justify-between items-center p-3 bg-bg-light rounded-xl" }, [
                      createVNode("span", { class: "font-bold text-brand-gray" }, "Projets"),
                      createVNode("span", { class: "text-brand-obsidian font-black text-lg" }, "12")
                    ]),
                    createVNode("div", { class: "flex justify-between items-center p-3 bg-bg-light rounded-xl" }, [
                      createVNode("span", { class: "font-bold text-brand-gray" }, "Articles"),
                      createVNode("span", { class: "text-brand-obsidian font-black text-lg" }, "3")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0 = "/build/assets/logo-DQBvSblT.svg";
const _sfc_main$5 = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-white relative font-sans" }, _attrs))}><nav class="sticky top-0 py-5 px-8 flex items-center justify-between z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "flex items-center group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Identité visuelle de Velt" width="150"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Identité visuelle de Velt",
                width: "150"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center space-x-12 font-semibold text-sm text-brand-obsidian/80">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("studio"),
        class: "hover:text-brand-indigo transition duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projets`);
          } else {
            return [
              createTextVNode("Projets")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("saas"),
        class: "hover:text-brand-indigo transition duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SaaS Products`);
          } else {
            return [
              createTextVNode("SaaS Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("studio"),
        class: "hover:text-brand-indigo transition duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Studio`);
          } else {
            return [
              createTextVNode("Studio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("contact"),
        class: "px-5 py-2.5 bg-brand-indigo text-white rounded-lg hover:bg-brand-indigo-dark hover:shadow-indigo-glow transition-all duration-300 font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="md:hidden text-brand-obsidian focus:outline-none">`);
      if (!showingNavigationDropdown.value) {
        _push(ssrRenderComponent(unref(PhList), {
          size: 28,
          weight: "bold"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(PhX), {
          size: 28,
          weight: "bold"
        }, null, _parent));
      }
      _push(`</button></nav>`);
      if (showingNavigationDropdown.value) {
        _push(`<div class="md:hidden fixed inset-0 bg-white z-40 flex flex-col p-8 space-y-8 mt-20">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("studio"),
          class: "text-2xl font-bold text-brand-obsidian hover:text-brand-indigo transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Projets`);
            } else {
              return [
                createTextVNode("Projets")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("saas"),
          class: "text-2xl font-bold text-brand-obsidian hover:text-brand-indigo transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`SaaS Products`);
            } else {
              return [
                createTextVNode("SaaS Products")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("studio"),
          class: "text-2xl font-bold text-brand-obsidian hover:text-brand-indigo transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Studio`);
            } else {
              return [
                createTextVNode("Studio")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("contact"),
          class: "text-2xl font-bold text-brand-indigo transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contact`);
            } else {
              return [
                createTextVNode("Contact")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main class="flex-grow relative z-10">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="py-16 px-8 bg-brand-obsidian text-slate-400 text-sm relative z-10"><div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12"><div class="col-span-1 md:col-span-2"><svg width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-6"><text x="0" y="24" fill="white" font-size="24" font-weight="900" style="${ssrRenderStyle({ "font-family": "Inter", "letter-spacing": "-0.02em" })}">VELT</text></svg><p class="max-w-xs leading-relaxed"> Studio digital et créateur de produits SaaS basé à La Réunion. Where Digital Takes Form. </p></div><div><h3 class="text-white font-bold mb-6 uppercase tracking-wider text-xs">Studio</h3><ul class="space-y-3 font-medium"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "hover:text-brand-indigo transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`UX/UI Design`);
          } else {
            return [
              createTextVNode("UX/UI Design")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "hover:text-brand-indigo transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Développement`);
          } else {
            return [
              createTextVNode("Développement")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "hover:text-brand-indigo transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Branding`);
          } else {
            return [
              createTextVNode("Branding")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-white font-bold mb-6 uppercase tracking-wider text-xs">Contact</h3><ul class="space-y-3 font-medium"><li>Saint-Denis, La Réunion</li><li><a href="mailto:hello@velt.re" class="hover:text-brand-indigo transition">hello@velt.re</a></li></ul></div></div><div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center"><p>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} VELT. Tous droits réservés.</p><div class="flex space-x-6 mt-4 md:mt-0 font-medium"><a href="#" class="hover:text-brand-indigo transition">Mentions légales</a><a href="#" class="hover:text-brand-indigo transition">Confidentialité</a></div></div></footer></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainLayout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      subject: "",
      // Valeur par défaut vide pour le select
      message: ""
    });
    const submit = () => {
      console.log("Formulaire soumis avec les données :", form.data());
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Contactez Velt Studio" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="max-w-7xl mx-auto my-12 lg:my-20 px-4 md:px-8"${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] shadow-premium rounded-3xl overflow-hidden border border-slate-100"${_scopeId}><div class="bg-brand-obsidian p-12 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden"${_scopeId}><div class="absolute bottom-0 left-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-brand-indigo/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"${_scopeId}></div><div class="absolute inset-0 bg-[url(&#39;/images/grid-pattern.svg&#39;)] opacity-5 pointer-events-none"${_scopeId}></div><div class="relative z-10"${_scopeId}><h1 class="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight"${_scopeId}> Parlons de votre <span class="text-brand-indigo"${_scopeId}>futur projet.</span></h1><p class="text-xl text-slate-300 leading-relaxed mb-12 font-medium"${_scopeId}> Que ce soit pour une idée de SaaS ou une refonte complète, notre équipe est prête à vous écouter. Réponses sous 24h ouvrées. </p><div class="space-y-8 font-medium"${_scopeId}><div class="flex items-start"${_scopeId}><div class="w-12 h-12 bg-brand-indigo/20 rounded-xl flex items-center justify-center text-brand-indigo mr-5 flex-shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhEnvelopeSimple), {
              size: 24,
              weight: "fill"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="text-lg font-bold mb-1 text-white"${_scopeId}>Email</h3><p class="text-slate-300"${_scopeId}>hello@velt.re</p><p class="text-slate-400 text-sm"${_scopeId}>Pour toute demande commerciale ou générale.</p></div></div><div class="flex items-start"${_scopeId}><div class="w-12 h-12 bg-brand-indigo/20 rounded-xl flex items-center justify-center text-brand-indigo mr-5 flex-shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhMapPin), {
              size: 24,
              weight: "fill"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="text-lg font-bold mb-1 text-white"${_scopeId}>Studio</h3><p class="text-slate-300"${_scopeId}>Saint-Denis, La Réunion</p><p class="text-slate-400 text-sm"${_scopeId}>Sur rendez-vous uniquement.</p></div></div></div></div></div><div class="bg-white p-12 lg:p-20 flex flex-col justify-center"${_scopeId}><h2 class="text-3xl font-bold text-brand-obsidian mb-10 tracking-tight"${_scopeId}>Envoyez-nous un message</h2><form class="space-y-6"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label for="name" class="block text-sm font-bold text-brand-obsidian mb-2"${_scopeId}>Votre Nom <span class="text-brand-indigo"${_scopeId}>*</span></label><input type="text" id="name"${ssrRenderAttr("value", unref(form).name)} required class="w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian placeholder-slate-400 font-medium" placeholder="John Doe"${_scopeId}></div><div${_scopeId}><label for="email" class="block text-sm font-bold text-brand-obsidian mb-2"${_scopeId}>Email Professionnel <span class="text-brand-indigo"${_scopeId}>*</span></label><input type="email" id="email"${ssrRenderAttr("value", unref(form).email)} required class="w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian placeholder-slate-400 font-medium" placeholder="john@company.com"${_scopeId}></div></div><div${_scopeId}><label for="subject" class="block text-sm font-bold text-brand-obsidian mb-2"${_scopeId}>Sujet de votre demande <span class="text-brand-indigo"${_scopeId}>*</span></label><select id="subject" required class="w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian font-medium appearance-none bg-[url(&#39;data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E&#39;)] bg-[length:1.25rem_1.25rem] bg-no-repeat bg-[right_1rem_center] pr-10"${_scopeId}><option value="" disabled selected${_scopeId}>Sélectionnez un sujet...</option><option value="saas_project"${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "saas_project") : ssrLooseEqual(unref(form).subject, "saas_project")) ? " selected" : ""}${_scopeId}>Nouveau projet SaaS / Web App</option><option value="website_redesign"${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "website_redesign") : ssrLooseEqual(unref(form).subject, "website_redesign")) ? " selected" : ""}${_scopeId}>Refonte de site / UX/UI Design</option><option value="branding"${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "branding") : ssrLooseEqual(unref(form).subject, "branding")) ? " selected" : ""}${_scopeId}>Identité visuelle &amp; Branding</option><option value="partnership"${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "partnership") : ssrLooseEqual(unref(form).subject, "partnership")) ? " selected" : ""}${_scopeId}>Partenariat / Autre</option></select></div><div${_scopeId}><label for="message" class="block text-sm font-bold text-brand-obsidian mb-2"${_scopeId}>Votre Message <span class="text-brand-indigo"${_scopeId}>*</span></label><textarea id="message" rows="5" required class="w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian placeholder-slate-400 font-medium resize-none" placeholder="Décrivez votre projet, vos objectifs et votre budget estimé si possible..."${_scopeId}>${ssrInterpolate(unref(form).message)}</textarea></div><div class="pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$9, {
              type: "submit",
              class: "w-full justify-center py-5 text-lg font-bold",
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(PhPaperPlaneTilt), {
                    class: "mr-3",
                    weight: "bold",
                    size: 20
                  }, null, _parent3, _scopeId2));
                  _push3(` Envoyer la demande `);
                } else {
                  return [
                    createVNode(unref(PhPaperPlaneTilt), {
                      class: "mr-3",
                      weight: "bold",
                      size: 20
                    }),
                    createTextVNode(" Envoyer la demande ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-xs text-slate-500 mt-4 text-center font-medium"${_scopeId}> En envoyant ce formulaire, vous acceptez notre politique de confidentialité. Vos données sont sécurisées. </p></div></form></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "max-w-7xl mx-auto my-12 lg:my-20 px-4 md:px-8" }, [
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 min-h-[600px] shadow-premium rounded-3xl overflow-hidden border border-slate-100" }, [
                  createVNode("div", { class: "bg-brand-obsidian p-12 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden" }, [
                    createVNode("div", { class: "absolute bottom-0 left-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-brand-indigo/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" }),
                    createVNode("div", { class: "absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none" }),
                    createVNode("div", { class: "relative z-10" }, [
                      createVNode("h1", { class: "text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight" }, [
                        createTextVNode(" Parlons de votre "),
                        createVNode("span", { class: "text-brand-indigo" }, "futur projet.")
                      ]),
                      createVNode("p", { class: "text-xl text-slate-300 leading-relaxed mb-12 font-medium" }, " Que ce soit pour une idée de SaaS ou une refonte complète, notre équipe est prête à vous écouter. Réponses sous 24h ouvrées. "),
                      createVNode("div", { class: "space-y-8 font-medium" }, [
                        createVNode("div", { class: "flex items-start" }, [
                          createVNode("div", { class: "w-12 h-12 bg-brand-indigo/20 rounded-xl flex items-center justify-center text-brand-indigo mr-5 flex-shrink-0" }, [
                            createVNode(unref(PhEnvelopeSimple), {
                              size: 24,
                              weight: "fill"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode("h3", { class: "text-lg font-bold mb-1 text-white" }, "Email"),
                            createVNode("p", { class: "text-slate-300" }, "hello@velt.re"),
                            createVNode("p", { class: "text-slate-400 text-sm" }, "Pour toute demande commerciale ou générale.")
                          ])
                        ]),
                        createVNode("div", { class: "flex items-start" }, [
                          createVNode("div", { class: "w-12 h-12 bg-brand-indigo/20 rounded-xl flex items-center justify-center text-brand-indigo mr-5 flex-shrink-0" }, [
                            createVNode(unref(PhMapPin), {
                              size: 24,
                              weight: "fill"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode("h3", { class: "text-lg font-bold mb-1 text-white" }, "Studio"),
                            createVNode("p", { class: "text-slate-300" }, "Saint-Denis, La Réunion"),
                            createVNode("p", { class: "text-slate-400 text-sm" }, "Sur rendez-vous uniquement.")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-white p-12 lg:p-20 flex flex-col justify-center" }, [
                    createVNode("h2", { class: "text-3xl font-bold text-brand-obsidian mb-10 tracking-tight" }, "Envoyez-nous un message"),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      class: "space-y-6"
                    }, [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "name",
                            class: "block text-sm font-bold text-brand-obsidian mb-2"
                          }, [
                            createTextVNode("Votre Nom "),
                            createVNode("span", { class: "text-brand-indigo" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "name",
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            required: "",
                            class: "w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian placeholder-slate-400 font-medium",
                            placeholder: "John Doe"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).name]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "email",
                            class: "block text-sm font-bold text-brand-obsidian mb-2"
                          }, [
                            createTextVNode("Email Professionnel "),
                            createVNode("span", { class: "text-brand-indigo" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "email",
                            id: "email",
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            required: "",
                            class: "w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian placeholder-slate-400 font-medium",
                            placeholder: "john@company.com"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).email]
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "subject",
                          class: "block text-sm font-bold text-brand-obsidian mb-2"
                        }, [
                          createTextVNode("Sujet de votre demande "),
                          createVNode("span", { class: "text-brand-indigo" }, "*")
                        ]),
                        withDirectives(createVNode("select", {
                          id: "subject",
                          "onUpdate:modelValue": ($event) => unref(form).subject = $event,
                          required: "",
                          class: "w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian font-medium appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E')] bg-[length:1.25rem_1.25rem] bg-no-repeat bg-[right_1rem_center] pr-10"
                        }, [
                          createVNode("option", {
                            value: "",
                            disabled: "",
                            selected: ""
                          }, "Sélectionnez un sujet..."),
                          createVNode("option", { value: "saas_project" }, "Nouveau projet SaaS / Web App"),
                          createVNode("option", { value: "website_redesign" }, "Refonte de site / UX/UI Design"),
                          createVNode("option", { value: "branding" }, "Identité visuelle & Branding"),
                          createVNode("option", { value: "partnership" }, "Partenariat / Autre")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).subject]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "message",
                          class: "block text-sm font-bold text-brand-obsidian mb-2"
                        }, [
                          createTextVNode("Votre Message "),
                          createVNode("span", { class: "text-brand-indigo" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "message",
                          rows: "5",
                          "onUpdate:modelValue": ($event) => unref(form).message = $event,
                          required: "",
                          class: "w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian placeholder-slate-400 font-medium resize-none",
                          placeholder: "Décrivez votre projet, vos objectifs et votre budget estimé si possible..."
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).message]
                        ])
                      ]),
                      createVNode("div", { class: "pt-4" }, [
                        createVNode(_sfc_main$9, {
                          type: "submit",
                          class: "w-full justify-center py-5 text-lg font-bold",
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(PhPaperPlaneTilt), {
                              class: "mr-3",
                              weight: "bold",
                              size: 20
                            }),
                            createTextVNode(" Envoyer la demande ")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode("p", { class: "text-xs text-slate-500 mt-4 text-center font-medium" }, " En envoyant ce formulaire, vous acceptez notre politique de confidentialité. Vos données sont sécurisées. ")
                      ])
                    ], 32)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "Home",
  __ssrInlineRender: true,
  props: { featuredProjects: Array },
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    const iconMap = {
      "cloud": PhCloudArrowUp,
      "chart": PhChartBar,
      "graph": PhGraph
    };
    const saasProducts = [
      { title: "ReunionFlow", description: "Plateforme de gestion de flux pour les entreprises locales.", icon: "cloud" },
      { title: "VolcanoMetrics", description: "Outil d'analyse de données temps réel IA.", icon: "chart" },
      { title: "PrimaryRouting", description: "Optimisation de trajets et logistique insulaire.", icon: "graph" }
    ];
    const processSteps = [
      { icon: PhLightbulb, title: "1. Immersion & Stratégie", description: "Nous plongeons dans votre business pour définir les objectifs, les personas et la feuille de route produit." },
      { icon: PhPaintBrush, title: "2. Design & Prototypage", description: "Création de wireframes UX et de maquettes UI haute-fidélité interactives sur Figma." },
      { icon: PhCode, title: "3. Développement Agile", description: "Codage en sprints avec des points d'étape réguliers. Stack moderne, tests et revue de code." },
      { icon: PhRocketLaunch, title: "4. Lancement & Itération", description: "Mise en production sécurisée, suivi des analytics et améliorations continues basées sur la data." }
    ];
    const testimonials = [
      { name: "Marie Dubois", role: "CEO, TechRun", content: "Velt a transformé notre vision en un produit SaaS exceptionnel. Leur expertise technique et leur sens du design sont inégalés." },
      { name: "Thomas Payet", role: "Fondateur, EcoLogistics", content: "Une équipe à l'écoute, réactive et force de proposition. Notre plateforme logistique n'a jamais été aussi performante." }
    ];
    const latestArticles = [
      { title: "L'importance de l'UX dans les produits SaaS", date: "15 Mai 2024", image: "https://placehold.co/400x250/F8FAFC/6366F1?text=Article+UX" },
      { title: "Laravel et Vue.js : le duo gagnant pour votre web app", date: "28 Avril 2024", image: "https://placehold.co/400x250/F8FAFC/6366F1?text=Article+Tech" },
      { title: "Comment réussir le lancement de votre startup à La Réunion", date: "10 Avril 2024", image: "https://placehold.co/400x250/F8FAFC/6366F1?text=Article+Startup" }
    ];
    const mainContainer = ref(null);
    const floatingIconsRefs = ref([]);
    onBeforeUpdate(() => {
      floatingIconsRefs.value = [];
    });
    const setFloatingIconRef = (el) => {
      if (el) floatingIconsRefs.value.push(el);
    };
    let ctx;
    onMounted(async () => {
      await nextTick();
      ctx = gsap.context(() => {
        const heroTl = gsap.timeline();
        heroTl.from(".hero-text-anim", {
          y: 50,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }).from(".hero-img-anim", {
          x: 50,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.6");
        gsap.to(".bg-tech-grid-parallax", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
        ScrollTrigger.batch(".saas-card", {
          onEnter: (batch) => gsap.fromTo(
            batch,
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15, overwrite: true, ease: "power3.out" }
          ),
          start: "top 85%"
        });
        gsap.from(".studio-card-left", {
          x: -50,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".studio-card-left", start: "top 85%" }
        });
        gsap.from(".studio-card-right", {
          x: 50,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".studio-card-right", start: "top 85%" }
        });
        const fadeElements = gsap.utils.toArray(".fade-up-trigger");
        fadeElements.forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: el, start: "top 90%" } }
          );
        });
        if (floatingIconsRefs.value.length) {
          floatingIconsRefs.value.forEach((icon, i) => {
            gsap.to(icon, {
              y: 15,
              duration: 2 + i * 0.2,
              // Légère variation pour chaque icône
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut"
            });
          });
        }
      }, mainContainer.value);
    });
    onUnmounted(() => {
      if (ctx) ctx.revert();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Studio Digital & SaaS Producter à La Réunion" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><section class="px-8 pt-28 pb-32 max-w-7xl mx-auto relative overflow-hidden w-full"${_scopeId}><div class="bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"${_scopeId}></div><div class="flex flex-col lg:flex-row items-center relative z-10"${_scopeId}><div class="lg:w-1/2 lg:pr-20"${_scopeId}><div class="hero-text-anim"${_scopeId}><div class="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold bg-brand-indigo/10 text-brand-indigo mb-8 ring-1 ring-inset ring-brand-indigo/20"${_scopeId}><span class="relative flex h-2.5 w-2.5 mr-3"${_scopeId}><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-indigo opacity-75"${_scopeId}></span><span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-indigo"${_scopeId}></span></span> Basé à La Réunion </div></div><h1 class="hero-text-anim text-6xl md:text-7xl font-black text-brand-obsidian leading-tight mb-8 tracking-tight"${_scopeId}> Where Digital <br${_scopeId}><span class="text-brand-indigo"${_scopeId}>Takes Form.</span></h1><p class="hero-text-anim text-xl text-brand-gray max-w-lg mb-12 leading-relaxed font-medium"${_scopeId}> Studio hybride : nous concevons des produits SaaS innovants et créons des expériences digitales sur-mesure pour les entreprises ambitieuses. </p><div class="hero-text-anim flex flex-wrap gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$9, {
              href: _ctx.route("saas"),
              class: "px-10 py-4 text-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Découvrir nos SaaS `);
                  _push3(ssrRenderComponent(unref(PhArrowRight), {
                    class: "ml-2",
                    weight: "bold"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Découvrir nos SaaS "),
                    createVNode(unref(PhArrowRight), {
                      class: "ml-2",
                      weight: "bold"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("contact"),
              class: "inline-flex items-center px-10 py-4 bg-white border-2 border-slate-200 rounded-lg font-bold text-brand-obsidian hover:border-brand-obsidian transition-all duration-300 text-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Discuter d&#39;un projet `);
                } else {
                  return [
                    createTextVNode(" Discuter d'un projet ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="hero-img-anim lg:w-1/2 mt-20 lg:mt-0 relative perspective-1000"${_scopeId}><img src="https://placehold.co/800x600/F8FAFC/6366F1?text=Velt+SaaS+Analytics" alt="Velt SaaS Dashboard" class="rounded-2xl shadow-premium border border-slate-100 relative z-10 transform md:rotateY(-5deg) md:rotateX(5deg) hover:rotate-0 transition-all duration-700 ease-out bg-white p-2"${_scopeId}><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-brand-indigo/20 blur-[100px] -z-10 rounded-full opacity-60"${_scopeId}></div></div></div></section><section class="bg-brand-obsidian py-20 px-8"${_scopeId}><div class="fade-up-trigger max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between"${_scopeId}><h2 class="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-0 max-w-xl leading-tight"${_scopeId}> La technologie au service de votre croissance. </h2><div class="flex flex-col sm:flex-row gap-6 md:gap-12 text-white font-bold text-lg"${_scopeId}><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCheckCircle), {
              class: "text-brand-indigo mr-3",
              weight: "fill",
              size: 24
            }, null, _parent2, _scopeId));
            _push2(` Architecture Moderne</div><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCheckCircle), {
              class: "text-brand-indigo mr-3",
              weight: "fill",
              size: 24
            }, null, _parent2, _scopeId));
            _push2(` Performance SEO</div></div></div></section><section class="px-8 py-32 bg-bg-light relative overflow-hidden"${_scopeId}><div class="bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"${_scopeId}></div><div class="max-w-7xl mx-auto relative z-10"${_scopeId}><div class="fade-up-trigger text-center mb-20"${_scopeId}><h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm"${_scopeId}>Nos Produits</h2><p class="text-5xl font-black text-brand-obsidian tracking-tight"${_scopeId}>Solutions SaaS natives</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(saasProducts, (product, index) => {
              _push2(`<div class="saas-card group p-10 bg-white rounded-2xl shadow-premium hover:shadow-indigo-glow hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border border-slate-100"${_scopeId}><div class="w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-indigo group-hover:text-white transition-colors duration-300"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(iconMap[product.icon]), {
                size: 32,
                weight: "fill"
              }, null), _parent2, _scopeId);
              _push2(`</div><h3 class="text-2xl font-bold mb-4 text-brand-obsidian"${_scopeId}>${ssrInterpolate(product.title)}</h3><p class="text-brand-gray leading-relaxed mb-8 font-medium"${_scopeId}>${ssrInterpolate(product.description)}</p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("saas"),
                class: "inline-flex items-center font-bold text-brand-indigo hover:text-brand-indigo-dark transition items-center group/link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` En savoir plus `);
                    _push3(ssrRenderComponent(unref(PhArrowRight), {
                      class: "ml-2 group-hover/link:translate-x-1 transition-transform",
                      weight: "bold"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createTextVNode(" En savoir plus "),
                      createVNode(unref(PhArrowRight), {
                        class: "ml-2 group-hover/link:translate-x-1 transition-transform",
                        weight: "bold"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></section><section class="px-8 py-32 max-w-7xl mx-auto"${_scopeId}><div class="fade-up-trigger flex flex-col md:flex-row justify-between items-end mb-20"${_scopeId}><div${_scopeId}><h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm"${_scopeId}>Le Studio</h2><p class="text-5xl font-black text-brand-obsidian tracking-tight"${_scopeId}>Expertise sur-mesure.</p></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("studio"),
              class: "inline-flex items-center font-bold text-brand-obsidian hover:text-brand-indigo transition mt-8 md:mt-0 text-lg group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Voir tous nos services `);
                  _push3(ssrRenderComponent(unref(PhArrowRight), {
                    class: "ml-2 group-hover:translate-x-1 transition-transform",
                    weight: "bold"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Voir tous nos services "),
                    createVNode(unref(PhArrowRight), {
                      class: "ml-2 group-hover:translate-x-1 transition-transform",
                      weight: "bold"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><div class="studio-card-left md:col-span-2 p-12 bg-brand-obsidian rounded-3xl text-white relative overflow-hidden flex flex-col justify-between min-h-[450px] group shadow-premium"${_scopeId}><div class="absolute top-0 right-0 w-[80%] md:w-[400px] h-[80%] md:h-[400px] bg-brand-indigo/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"${_scopeId}></div><div class="relative z-10"${_scopeId}><div class="w-14 h-14 bg-white/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhDeviceMobile), {
              size: 32,
              weight: "fill"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-3xl font-bold mb-4"${_scopeId}>UX/UI &amp; Product Design</h3><p class="text-slate-300 text-lg max-w-md font-medium leading-relaxed"${_scopeId}> Nous transformons des problèmes complexes en interfaces intuitives. Recherche, wireframing, design systems. </p></div><div class="relative z-10 mt-12 ml-12"${_scopeId}><img src="https://placehold.co/600x400/0f172a/ffffff?text=UX+Wireframes+Premium" alt="UX Design" class="rounded-tl-2xl shadow-2xl border-t border-l border-white/10 transform group-hover:scale-105 transition-transform duration-500"${_scopeId}></div></div><div class="studio-card-right p-10 bg-white rounded-3xl border border-slate-100 shadow-premium relative overflow-hidden group hover:border-brand-indigo/30 transition-colors"${_scopeId}><div class="w-14 h-14 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCode), {
              size: 32,
              weight: "fill"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-2xl font-bold text-brand-obsidian mb-4"${_scopeId}>Développement Tech</h3><p class="text-brand-gray mb-8 font-medium leading-relaxed"${_scopeId}>Stack moderne : Laravel, Vue.js, Inertia. Code robuste, scalable et performant.</p><div class="absolute -bottom-8 -right-8"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhStack), {
              size: 120,
              class: "text-brand-indigo/5 group-hover:scale-110 transition-transform duration-500",
              weight: "duotone"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="studio-card-right p-10 bg-white rounded-3xl border border-slate-100 shadow-premium relative overflow-hidden group hover:border-brand-indigo/30 transition-colors"${_scopeId}><div class="w-14 h-14 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhMegaphone), {
              size: 32,
              weight: "fill"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-2xl font-bold text-brand-obsidian mb-4"${_scopeId}>Branding &amp; Identité</h3><p class="text-brand-gray mb-8 font-medium leading-relaxed"${_scopeId}>Création de marques fortes qui résonnent dans l&#39;écosystème tech et digital.</p><div class="absolute -bottom-8 -right-8"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhMegaphone), {
              size: 120,
              class: "text-brand-indigo/5 group-hover:scale-110 transition-transform duration-500",
              weight: "duotone"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></section><section class="px-8 py-32 bg-bg-light relative overflow-hidden"${_scopeId}><div class="bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"${_scopeId}></div><div class="max-w-7xl mx-auto relative z-10"${_scopeId}><div class="fade-up-trigger text-center mb-20"${_scopeId}><h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm"${_scopeId}>Notre Méthodologie</h2><p class="text-5xl font-black text-brand-obsidian tracking-tight"${_scopeId}>Un processus clair, de l&#39;idée au produit</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(processSteps, (step, index) => {
              _push2(`<div class="fade-up-trigger process-step relative group"${_scopeId}><div class="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 h-full relative z-10 hover:shadow-premium hover:border-brand-indigo/30 transition-all duration-300"${_scopeId}><div class="w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-indigo group-hover:text-white transition-colors"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(step.icon), {
                size: 32,
                weight: "fill"
              }, null), _parent2, _scopeId);
              _push2(`</div><h3 class="text-xl font-bold text-brand-obsidian mb-4 leading-tight"${_scopeId}>${ssrInterpolate(step.title)}</h3><p class="text-brand-gray font-medium leading-relaxed"${_scopeId}>${ssrInterpolate(step.description)}</p></div>`);
              if (index < processSteps.length - 1) {
                _push2(`<div class="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0 -ml-4"${_scopeId}><div class="absolute right-0 top-1/2 w-3 h-3 bg-white border-2 border-brand-indigo rounded-full -translate-y-1/2 translate-x-1/2"${_scopeId}></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></section><section class="px-8 py-32 max-w-7xl mx-auto"${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"${_scopeId}><div class="fade-up-trigger"${_scopeId}><h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm"${_scopeId}>Pourquoi Velt ?</h2><p class="text-5xl font-black text-brand-obsidian tracking-tight mb-8 leading-tight"${_scopeId}>Plus qu&#39;un studio, un partenaire de croissance.</p><p class="text-xl text-brand-gray mb-12 font-medium leading-relaxed"${_scopeId}> Nous ne nous contentons pas de livrer du code. Nous nous immergeons dans votre business pour créer des solutions qui ont un impact réel et mesurable. </p><ul class="space-y-6 text-brand-obsidian font-bold text-lg"${_scopeId}><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCheckCircle), {
              class: "text-brand-indigo mr-4 flex-shrink-0",
              weight: "fill",
              size: 28
            }, null, _parent2, _scopeId));
            _push2(` Expertise Technique &amp; Produit</li><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCheckCircle), {
              class: "text-brand-indigo mr-4 flex-shrink-0",
              weight: "fill",
              size: 28
            }, null, _parent2, _scopeId));
            _push2(` Approche Agile &amp; Itérative</li><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCheckCircle), {
              class: "text-brand-indigo mr-4 flex-shrink-0",
              weight: "fill",
              size: 28
            }, null, _parent2, _scopeId));
            _push2(` Ancrage Local &amp; Vision Globale</li><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCheckCircle), {
              class: "text-brand-indigo mr-4 flex-shrink-0",
              weight: "fill",
              size: 28
            }, null, _parent2, _scopeId));
            _push2(` Transparence &amp; Collaboration</li></ul></div><div class="fade-up-trigger relative"${_scopeId}><div class="absolute top-0 right-0 w-[80%] h-[80%] bg-brand-indigo/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"${_scopeId}></div><img src="https://placehold.co/600x700/0f172a/ffffff?text=Team+Collaboration" alt="Velt Team" class="rounded-3xl shadow-2xl border border-slate-100 relative z-10 bg-white p-2 transform lg:rotate-3 hover:rotate-0 transition-all duration-500"${_scopeId}></div></div></section><section class="px-8 py-32 bg-brand-obsidian relative overflow-hidden"${_scopeId}><div class="testimonials-bg-parallax absolute inset-0 bg-[url(&#39;/images/grid-pattern.svg&#39;)] opacity-5 pointer-events-none"${_scopeId}></div><div class="testimonials-bg-parallax absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-indigo/10 rounded-full blur-[150px] pointer-events-none"${_scopeId}></div><div class="max-w-7xl mx-auto relative z-10 text-center"${_scopeId}><div class="fade-up-trigger"${_scopeId}><h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm"${_scopeId}>Témoignages</h2><p class="text-5xl font-black text-white tracking-tight mb-20"${_scopeId}>Ils nous font confiance</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(testimonials, (testimonial, index) => {
              _push2(`<div class="fade-up-trigger testimonial-card p-10 bg-white/5 border border-white/10 rounded-3xl text-left relative"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(PhHandshake), {
                class: "text-brand-indigo mb-8",
                size: 48,
                weight: "duotone"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-xl text-slate-300 italic mb-8 leading-relaxed"${_scopeId}>&quot;${ssrInterpolate(testimonial.content)}&quot;</p><div${_scopeId}><p class="text-white font-bold text-lg"${_scopeId}>${ssrInterpolate(testimonial.name)}</p><p class="text-brand-indigo"${_scopeId}>${ssrInterpolate(testimonial.role)}</p></div></div>`);
            });
            _push2(`<!--]--></div></div></section><section class="px-8 py-32 bg-bg-light relative overflow-hidden"${_scopeId}><div class="bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"${_scopeId}></div><div class="max-w-7xl mx-auto relative z-10"${_scopeId}><div class="fade-up-trigger flex flex-col md:flex-row justify-between items-end mb-20"${_scopeId}><div${_scopeId}><h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm"${_scopeId}>Blog</h2><p class="text-5xl font-black text-brand-obsidian tracking-tight"${_scopeId}>Insights &amp; Actualités</p></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "#",
              class: "inline-flex items-center font-bold text-brand-obsidian hover:text-brand-indigo transition mt-8 md:mt-0 text-lg group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Voir tous les articles `);
                  _push3(ssrRenderComponent(unref(PhArrowRight), {
                    class: "ml-2 group-hover:translate-x-1 transition-transform",
                    weight: "bold"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Voir tous les articles "),
                    createVNode(unref(PhArrowRight), {
                      class: "ml-2 group-hover:translate-x-1 transition-transform",
                      weight: "bold"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(latestArticles, (article, index) => {
              _push2(ssrRenderComponent(unref(Link), {
                href: "#",
                key: index,
                class: "fade-up-trigger group bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden hover:-translate-y-1 transition-all duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative overflow-hidden h-56"${_scopeId2}><img${ssrRenderAttr("src", article.image)}${ssrRenderAttr("alt", article.title)} class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"${_scopeId2}><div class="absolute top-4 left-4 bg-brand-indigo text-white text-xs font-bold px-3 py-1.5 rounded-full"${_scopeId2}>Blog</div></div><div class="p-8"${_scopeId2}><p class="text-sm text-brand-gray font-medium mb-3 flex items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(PhArticle), { class: "mr-2" }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(article.date)}</p><h3 class="text-xl font-bold text-brand-obsidian leading-tight group-hover:text-brand-indigo transition-colors"${_scopeId2}>${ssrInterpolate(article.title)}</h3></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative overflow-hidden h-56" }, [
                        createVNode("img", {
                          src: article.image,
                          alt: article.title,
                          class: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", { class: "absolute top-4 left-4 bg-brand-indigo text-white text-xs font-bold px-3 py-1.5 rounded-full" }, "Blog")
                      ]),
                      createVNode("div", { class: "p-8" }, [
                        createVNode("p", { class: "text-sm text-brand-gray font-medium mb-3 flex items-center" }, [
                          createVNode(unref(PhArticle), { class: "mr-2" }),
                          createTextVNode(" " + toDisplayString(article.date), 1)
                        ]),
                        createVNode("h3", { class: "text-xl font-bold text-brand-obsidian leading-tight group-hover:text-brand-indigo transition-colors" }, toDisplayString(article.title), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></section><section class="px-8 py-40 text-center bg-white relative overflow-hidden"${_scopeId}><div class="bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"${_scopeId}></div><div class="fade-up-trigger relative z-10 max-w-4xl mx-auto"${_scopeId}><h2 class="text-6xl font-black text-brand-obsidian mb-10 tracking-tight leading-tight"${_scopeId}>Prêt à donner vie à votre <span class="text-brand-indigo"${_scopeId}>vision digitale</span> ?</h2><p class="text-xl text-brand-gray mb-12 font-medium max-w-2xl mx-auto leading-relaxed"${_scopeId}> Discutons de vos objectifs et voyons comment nous pouvons vous aider à les atteindre. </p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("contact"),
              class: "inline-flex items-center px-12 py-5 bg-brand-indigo rounded-xl font-bold text-white hover:bg-brand-indigo-dark hover:shadow-indigo-glow transition-all group text-xl"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Démarrer une conversation `);
                  _push3(ssrRenderComponent(unref(PhArrowRight), {
                    class: "ml-4 group-hover:translate-x-1 transition-transform",
                    weight: "bold"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Démarrer une conversation "),
                    createVNode(unref(PhArrowRight), {
                      class: "ml-4 group-hover:translate-x-1 transition-transform",
                      weight: "bold"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></section></div>`);
          } else {
            return [
              createVNode("div", {
                ref_key: "mainContainer",
                ref: mainContainer
              }, [
                createVNode("section", { class: "px-8 pt-28 pb-32 max-w-7xl mx-auto relative overflow-hidden w-full" }, [
                  createVNode("div", { class: "bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" }),
                  createVNode("div", { class: "flex flex-col lg:flex-row items-center relative z-10" }, [
                    createVNode("div", { class: "lg:w-1/2 lg:pr-20" }, [
                      createVNode("div", { class: "hero-text-anim" }, [
                        createVNode("div", { class: "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold bg-brand-indigo/10 text-brand-indigo mb-8 ring-1 ring-inset ring-brand-indigo/20" }, [
                          createVNode("span", { class: "relative flex h-2.5 w-2.5 mr-3" }, [
                            createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-indigo opacity-75" }),
                            createVNode("span", { class: "relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-indigo" })
                          ]),
                          createTextVNode(" Basé à La Réunion ")
                        ])
                      ]),
                      createVNode("h1", { class: "hero-text-anim text-6xl md:text-7xl font-black text-brand-obsidian leading-tight mb-8 tracking-tight" }, [
                        createTextVNode(" Where Digital "),
                        createVNode("br"),
                        createVNode("span", { class: "text-brand-indigo" }, "Takes Form.")
                      ]),
                      createVNode("p", { class: "hero-text-anim text-xl text-brand-gray max-w-lg mb-12 leading-relaxed font-medium" }, " Studio hybride : nous concevons des produits SaaS innovants et créons des expériences digitales sur-mesure pour les entreprises ambitieuses. "),
                      createVNode("div", { class: "hero-text-anim flex flex-wrap gap-4" }, [
                        createVNode(_sfc_main$9, {
                          href: _ctx.route("saas"),
                          class: "px-10 py-4 text-lg"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Découvrir nos SaaS "),
                            createVNode(unref(PhArrowRight), {
                              class: "ml-2",
                              weight: "bold"
                            })
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("contact"),
                          class: "inline-flex items-center px-10 py-4 bg-white border-2 border-slate-200 rounded-lg font-bold text-brand-obsidian hover:border-brand-obsidian transition-all duration-300 text-lg"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Discuter d'un projet ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ]),
                    createVNode("div", { class: "hero-img-anim lg:w-1/2 mt-20 lg:mt-0 relative perspective-1000" }, [
                      createVNode("img", {
                        src: "https://placehold.co/800x600/F8FAFC/6366F1?text=Velt+SaaS+Analytics",
                        alt: "Velt SaaS Dashboard",
                        class: "rounded-2xl shadow-premium border border-slate-100 relative z-10 transform md:rotateY(-5deg) md:rotateX(5deg) hover:rotate-0 transition-all duration-700 ease-out bg-white p-2"
                      }),
                      createVNode("div", { class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-brand-indigo/20 blur-[100px] -z-10 rounded-full opacity-60" })
                    ])
                  ])
                ]),
                createVNode("section", { class: "bg-brand-obsidian py-20 px-8" }, [
                  createVNode("div", { class: "fade-up-trigger max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between" }, [
                    createVNode("h2", { class: "text-3xl md:text-4xl font-bold text-white mb-8 md:mb-0 max-w-xl leading-tight" }, " La technologie au service de votre croissance. "),
                    createVNode("div", { class: "flex flex-col sm:flex-row gap-6 md:gap-12 text-white font-bold text-lg" }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(unref(PhCheckCircle), {
                          class: "text-brand-indigo mr-3",
                          weight: "fill",
                          size: 24
                        }),
                        createTextVNode(" Architecture Moderne")
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(unref(PhCheckCircle), {
                          class: "text-brand-indigo mr-3",
                          weight: "fill",
                          size: 24
                        }),
                        createTextVNode(" Performance SEO")
                      ])
                    ])
                  ])
                ]),
                createVNode("section", { class: "px-8 py-32 bg-bg-light relative overflow-hidden" }, [
                  createVNode("div", { class: "bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" }),
                  createVNode("div", { class: "max-w-7xl mx-auto relative z-10" }, [
                    createVNode("div", { class: "fade-up-trigger text-center mb-20" }, [
                      createVNode("h2", { class: "text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm" }, "Nos Produits"),
                      createVNode("p", { class: "text-5xl font-black text-brand-obsidian tracking-tight" }, "Solutions SaaS natives")
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(saasProducts, (product, index) => {
                        return createVNode("div", {
                          key: index,
                          class: "saas-card group p-10 bg-white rounded-2xl shadow-premium hover:shadow-indigo-glow hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border border-slate-100"
                        }, [
                          createVNode("div", { class: "w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-indigo group-hover:text-white transition-colors duration-300" }, [
                            (openBlock(), createBlock(resolveDynamicComponent(iconMap[product.icon]), {
                              size: 32,
                              weight: "fill"
                            }))
                          ]),
                          createVNode("h3", { class: "text-2xl font-bold mb-4 text-brand-obsidian" }, toDisplayString(product.title), 1),
                          createVNode("p", { class: "text-brand-gray leading-relaxed mb-8 font-medium" }, toDisplayString(product.description), 1),
                          createVNode(unref(Link), {
                            href: _ctx.route("saas"),
                            class: "inline-flex items-center font-bold text-brand-indigo hover:text-brand-indigo-dark transition items-center group/link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" En savoir plus "),
                              createVNode(unref(PhArrowRight), {
                                class: "ml-2 group-hover/link:translate-x-1 transition-transform",
                                weight: "bold"
                              })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]);
                      }), 64))
                    ])
                  ])
                ]),
                createVNode("section", { class: "px-8 py-32 max-w-7xl mx-auto" }, [
                  createVNode("div", { class: "fade-up-trigger flex flex-col md:flex-row justify-between items-end mb-20" }, [
                    createVNode("div", null, [
                      createVNode("h2", { class: "text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm" }, "Le Studio"),
                      createVNode("p", { class: "text-5xl font-black text-brand-obsidian tracking-tight" }, "Expertise sur-mesure.")
                    ]),
                    createVNode(unref(Link), {
                      href: _ctx.route("studio"),
                      class: "inline-flex items-center font-bold text-brand-obsidian hover:text-brand-indigo transition mt-8 md:mt-0 text-lg group"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Voir tous nos services "),
                        createVNode(unref(PhArrowRight), {
                          class: "ml-2 group-hover:translate-x-1 transition-transform",
                          weight: "bold"
                        })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                    createVNode("div", { class: "studio-card-left md:col-span-2 p-12 bg-brand-obsidian rounded-3xl text-white relative overflow-hidden flex flex-col justify-between min-h-[450px] group shadow-premium" }, [
                      createVNode("div", { class: "absolute top-0 right-0 w-[80%] md:w-[400px] h-[80%] md:h-[400px] bg-brand-indigo/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" }),
                      createVNode("div", { class: "relative z-10" }, [
                        createVNode("div", { class: "w-14 h-14 bg-white/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6" }, [
                          createVNode(unref(PhDeviceMobile), {
                            size: 32,
                            weight: "fill"
                          })
                        ]),
                        createVNode("h3", { class: "text-3xl font-bold mb-4" }, "UX/UI & Product Design"),
                        createVNode("p", { class: "text-slate-300 text-lg max-w-md font-medium leading-relaxed" }, " Nous transformons des problèmes complexes en interfaces intuitives. Recherche, wireframing, design systems. ")
                      ]),
                      createVNode("div", { class: "relative z-10 mt-12 ml-12" }, [
                        createVNode("img", {
                          src: "https://placehold.co/600x400/0f172a/ffffff?text=UX+Wireframes+Premium",
                          alt: "UX Design",
                          class: "rounded-tl-2xl shadow-2xl border-t border-l border-white/10 transform group-hover:scale-105 transition-transform duration-500"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "studio-card-right p-10 bg-white rounded-3xl border border-slate-100 shadow-premium relative overflow-hidden group hover:border-brand-indigo/30 transition-colors" }, [
                      createVNode("div", { class: "w-14 h-14 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6" }, [
                        createVNode(unref(PhCode), {
                          size: 32,
                          weight: "fill"
                        })
                      ]),
                      createVNode("h3", { class: "text-2xl font-bold text-brand-obsidian mb-4" }, "Développement Tech"),
                      createVNode("p", { class: "text-brand-gray mb-8 font-medium leading-relaxed" }, "Stack moderne : Laravel, Vue.js, Inertia. Code robuste, scalable et performant."),
                      createVNode("div", {
                        ref: setFloatingIconRef,
                        class: "absolute -bottom-8 -right-8"
                      }, [
                        createVNode(unref(PhStack), {
                          size: 120,
                          class: "text-brand-indigo/5 group-hover:scale-110 transition-transform duration-500",
                          weight: "duotone"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "studio-card-right p-10 bg-white rounded-3xl border border-slate-100 shadow-premium relative overflow-hidden group hover:border-brand-indigo/30 transition-colors" }, [
                      createVNode("div", { class: "w-14 h-14 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6" }, [
                        createVNode(unref(PhMegaphone), {
                          size: 32,
                          weight: "fill"
                        })
                      ]),
                      createVNode("h3", { class: "text-2xl font-bold text-brand-obsidian mb-4" }, "Branding & Identité"),
                      createVNode("p", { class: "text-brand-gray mb-8 font-medium leading-relaxed" }, "Création de marques fortes qui résonnent dans l'écosystème tech et digital."),
                      createVNode("div", {
                        ref: setFloatingIconRef,
                        class: "absolute -bottom-8 -right-8"
                      }, [
                        createVNode(unref(PhMegaphone), {
                          size: 120,
                          class: "text-brand-indigo/5 group-hover:scale-110 transition-transform duration-500",
                          weight: "duotone"
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("section", { class: "px-8 py-32 bg-bg-light relative overflow-hidden" }, [
                  createVNode("div", { class: "bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" }),
                  createVNode("div", { class: "max-w-7xl mx-auto relative z-10" }, [
                    createVNode("div", { class: "fade-up-trigger text-center mb-20" }, [
                      createVNode("h2", { class: "text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm" }, "Notre Méthodologie"),
                      createVNode("p", { class: "text-5xl font-black text-brand-obsidian tracking-tight" }, "Un processus clair, de l'idée au produit")
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(processSteps, (step, index) => {
                        return createVNode("div", {
                          key: index,
                          class: "fade-up-trigger process-step relative group"
                        }, [
                          createVNode("div", { class: "p-8 bg-white rounded-3xl shadow-sm border border-slate-100 h-full relative z-10 hover:shadow-premium hover:border-brand-indigo/30 transition-all duration-300" }, [
                            createVNode("div", { class: "w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-indigo group-hover:text-white transition-colors" }, [
                              (openBlock(), createBlock(resolveDynamicComponent(step.icon), {
                                size: 32,
                                weight: "fill"
                              }))
                            ]),
                            createVNode("h3", { class: "text-xl font-bold text-brand-obsidian mb-4 leading-tight" }, toDisplayString(step.title), 1),
                            createVNode("p", { class: "text-brand-gray font-medium leading-relaxed" }, toDisplayString(step.description), 1)
                          ]),
                          index < processSteps.length - 1 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0 -ml-4"
                          }, [
                            createVNode("div", { class: "absolute right-0 top-1/2 w-3 h-3 bg-white border-2 border-brand-indigo rounded-full -translate-y-1/2 translate-x-1/2" })
                          ])) : createCommentVNode("", true)
                        ]);
                      }), 64))
                    ])
                  ])
                ]),
                createVNode("section", { class: "px-8 py-32 max-w-7xl mx-auto" }, [
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center" }, [
                    createVNode("div", { class: "fade-up-trigger" }, [
                      createVNode("h2", { class: "text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm" }, "Pourquoi Velt ?"),
                      createVNode("p", { class: "text-5xl font-black text-brand-obsidian tracking-tight mb-8 leading-tight" }, "Plus qu'un studio, un partenaire de croissance."),
                      createVNode("p", { class: "text-xl text-brand-gray mb-12 font-medium leading-relaxed" }, " Nous ne nous contentons pas de livrer du code. Nous nous immergeons dans votre business pour créer des solutions qui ont un impact réel et mesurable. "),
                      createVNode("ul", { class: "space-y-6 text-brand-obsidian font-bold text-lg" }, [
                        createVNode("li", { class: "flex items-center" }, [
                          createVNode(unref(PhCheckCircle), {
                            class: "text-brand-indigo mr-4 flex-shrink-0",
                            weight: "fill",
                            size: 28
                          }),
                          createTextVNode(" Expertise Technique & Produit")
                        ]),
                        createVNode("li", { class: "flex items-center" }, [
                          createVNode(unref(PhCheckCircle), {
                            class: "text-brand-indigo mr-4 flex-shrink-0",
                            weight: "fill",
                            size: 28
                          }),
                          createTextVNode(" Approche Agile & Itérative")
                        ]),
                        createVNode("li", { class: "flex items-center" }, [
                          createVNode(unref(PhCheckCircle), {
                            class: "text-brand-indigo mr-4 flex-shrink-0",
                            weight: "fill",
                            size: 28
                          }),
                          createTextVNode(" Ancrage Local & Vision Globale")
                        ]),
                        createVNode("li", { class: "flex items-center" }, [
                          createVNode(unref(PhCheckCircle), {
                            class: "text-brand-indigo mr-4 flex-shrink-0",
                            weight: "fill",
                            size: 28
                          }),
                          createTextVNode(" Transparence & Collaboration")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "fade-up-trigger relative" }, [
                      createVNode("div", { class: "absolute top-0 right-0 w-[80%] h-[80%] bg-brand-indigo/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" }),
                      createVNode("img", {
                        src: "https://placehold.co/600x700/0f172a/ffffff?text=Team+Collaboration",
                        alt: "Velt Team",
                        class: "rounded-3xl shadow-2xl border border-slate-100 relative z-10 bg-white p-2 transform lg:rotate-3 hover:rotate-0 transition-all duration-500"
                      })
                    ])
                  ])
                ]),
                createVNode("section", { class: "px-8 py-32 bg-brand-obsidian relative overflow-hidden" }, [
                  createVNode("div", { class: "testimonials-bg-parallax absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none" }),
                  createVNode("div", { class: "testimonials-bg-parallax absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-indigo/10 rounded-full blur-[150px] pointer-events-none" }),
                  createVNode("div", { class: "max-w-7xl mx-auto relative z-10 text-center" }, [
                    createVNode("div", { class: "fade-up-trigger" }, [
                      createVNode("h2", { class: "text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm" }, "Témoignages"),
                      createVNode("p", { class: "text-5xl font-black text-white tracking-tight mb-20" }, "Ils nous font confiance")
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(testimonials, (testimonial, index) => {
                        return createVNode("div", {
                          key: index,
                          class: "fade-up-trigger testimonial-card p-10 bg-white/5 border border-white/10 rounded-3xl text-left relative"
                        }, [
                          createVNode(unref(PhHandshake), {
                            class: "text-brand-indigo mb-8",
                            size: 48,
                            weight: "duotone"
                          }),
                          createVNode("p", { class: "text-xl text-slate-300 italic mb-8 leading-relaxed" }, '"' + toDisplayString(testimonial.content) + '"', 1),
                          createVNode("div", null, [
                            createVNode("p", { class: "text-white font-bold text-lg" }, toDisplayString(testimonial.name), 1),
                            createVNode("p", { class: "text-brand-indigo" }, toDisplayString(testimonial.role), 1)
                          ])
                        ]);
                      }), 64))
                    ])
                  ])
                ]),
                createVNode("section", { class: "px-8 py-32 bg-bg-light relative overflow-hidden" }, [
                  createVNode("div", { class: "bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" }),
                  createVNode("div", { class: "max-w-7xl mx-auto relative z-10" }, [
                    createVNode("div", { class: "fade-up-trigger flex flex-col md:flex-row justify-between items-end mb-20" }, [
                      createVNode("div", null, [
                        createVNode("h2", { class: "text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm" }, "Blog"),
                        createVNode("p", { class: "text-5xl font-black text-brand-obsidian tracking-tight" }, "Insights & Actualités")
                      ]),
                      createVNode(unref(Link), {
                        href: "#",
                        class: "inline-flex items-center font-bold text-brand-obsidian hover:text-brand-indigo transition mt-8 md:mt-0 text-lg group"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Voir tous les articles "),
                          createVNode(unref(PhArrowRight), {
                            class: "ml-2 group-hover:translate-x-1 transition-transform",
                            weight: "bold"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(latestArticles, (article, index) => {
                        return createVNode(unref(Link), {
                          href: "#",
                          key: index,
                          class: "fade-up-trigger group bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden hover:-translate-y-1 transition-all duration-300"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "relative overflow-hidden h-56" }, [
                              createVNode("img", {
                                src: article.image,
                                alt: article.title,
                                class: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                              }, null, 8, ["src", "alt"]),
                              createVNode("div", { class: "absolute top-4 left-4 bg-brand-indigo text-white text-xs font-bold px-3 py-1.5 rounded-full" }, "Blog")
                            ]),
                            createVNode("div", { class: "p-8" }, [
                              createVNode("p", { class: "text-sm text-brand-gray font-medium mb-3 flex items-center" }, [
                                createVNode(unref(PhArticle), { class: "mr-2" }),
                                createTextVNode(" " + toDisplayString(article.date), 1)
                              ]),
                              createVNode("h3", { class: "text-xl font-bold text-brand-obsidian leading-tight group-hover:text-brand-indigo transition-colors" }, toDisplayString(article.title), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ])
                  ])
                ]),
                createVNode("section", { class: "px-8 py-40 text-center bg-white relative overflow-hidden" }, [
                  createVNode("div", { class: "bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" }),
                  createVNode("div", { class: "fade-up-trigger relative z-10 max-w-4xl mx-auto" }, [
                    createVNode("h2", { class: "text-6xl font-black text-brand-obsidian mb-10 tracking-tight leading-tight" }, [
                      createTextVNode("Prêt à donner vie à votre "),
                      createVNode("span", { class: "text-brand-indigo" }, "vision digitale"),
                      createTextVNode(" ?")
                    ]),
                    createVNode("p", { class: "text-xl text-brand-gray mb-12 font-medium max-w-2xl mx-auto leading-relaxed" }, " Discutons de vos objectifs et voyons comment nous pouvons vous aider à les atteindre. "),
                    createVNode(unref(Link), {
                      href: _ctx.route("contact"),
                      class: "inline-flex items-center px-12 py-5 bg-brand-indigo rounded-xl font-bold text-white hover:bg-brand-indigo-dark hover:shadow-indigo-glow transition-all group text-xl"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Démarrer une conversation "),
                        createVNode(unref(PhArrowRight), {
                          class: "ml-4 group-hover:translate-x-1 transition-transform",
                          weight: "bold"
                        })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ], 512)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "Maintenance",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Maintenance en cours" }, null, _parent));
      _push(`<div class="min-h-screen bg-brand-obsidian flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans text-white"><div class="absolute inset-0 bg-[url(&#39;/images/grid-pattern.svg&#39;)] opacity-5 pointer-events-none"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[120px] pointer-events-none"></div><div class="relative z-10 text-center max-w-2xl"><div class="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-premium backdrop-blur-sm animate-pulse">`);
      _push(ssrRenderComponent(unref(PhTrafficCone), {
        size: 48,
        weight: "fill",
        class: "text-brand-indigo"
      }, null, _parent));
      _push(`</div><h1 class="text-4xl md:text-6xl font-black mb-6 tracking-tight"> Mise à jour <span class="text-brand-indigo">Système.</span></h1><p class="text-xl text-slate-400 mb-12 leading-relaxed font-medium"> Nous déployons actuellement une nouvelle version de la plateforme pour améliorer votre expérience. L&#39;accès sera rétabli dans quelques instants. </p><div class="flex flex-col md:flex-row justify-center gap-6"><div class="flex items-center justify-center space-x-3 px-6 py-3 bg-white/5 rounded-xl border border-white/10">`);
      _push(ssrRenderComponent(unref(PhTimer), {
        size: 24,
        class: "text-brand-indigo"
      }, null, _parent));
      _push(`<span class="font-bold">Retour estimé : &lt; 1h</span></div><a href="mailto:hello@velt.re" class="flex items-center justify-center space-x-3 px-6 py-3 bg-white/5 rounded-xl border border-white/10 hover:bg-brand-indigo hover:border-brand-indigo transition-all duration-300">`);
      _push(ssrRenderComponent(unref(PhEnvelopeSimple), { size: 24 }, null, _parent));
      _push(`<span class="font-bold">Contacter le support</span></a></div></div><div class="absolute bottom-8 text-slate-500 text-sm font-mono"> System Status: <span class="text-brand-indigo">MAINTENANCE_MODE</span></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Maintenance.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "Saas",
  __ssrInlineRender: true,
  setup(__props) {
    const products = [
      {
        id: "reunionflow",
        title: "ReunionFlow",
        subtitle: "Gestion de flux opérationnels.",
        description: "Une plateforme complète pour optimiser les processus opérationnels spécifiques au marché réunionnais. Connectez vos équipes, suivez vos indicateurs et gagnez en productivité.",
        features: ["Tableaux de bord temps réel", "Automatisations locales", "Support prioritaire 974", "Conformité RGPD"],
        icon: PhCloudArrowUp,
        // Remplacement par une image placeholder plus "SaaS" pour la démo
        image: "https://placehold.co/800x500/F8FAFC/6366F1?text=ReunionFlow+Dashboard"
      },
      {
        id: "volcanometrics",
        title: "VolcanoMetrics",
        subtitle: "Analyse de données temps réel IA.",
        description: "Transformez vos données brutes en insights exploitables. VolcanoMetrics utilise des algorithmes avancés pour prédire les tendances et identifier les opportunités de croissance.",
        features: ["Prédictions par IA", "Connecteurs API multiples", "Rapports personnalisables", "Sécurité de niveau bancaire"],
        icon: PhChartBar,
        image: "https://placehold.co/800x500/F8FAFC/6366F1?text=VolcanoMetrics+Analytics"
      },
      {
        id: "primaryrouting",
        title: "PrimaryRouting",
        subtitle: "Optimisation logistique et trajets.",
        description: "La solution ultime pour la logistique sur l'île. Réduisez vos coûts de carburant et améliorez vos temps de livraison grâce à notre moteur de calcul d'itinéraires intelligent.",
        features: ["Calcul d'itinéraires complexe", "Prise en compte du trafic", "Application mobile chauffeurs", "Tracking en direct"],
        icon: PhGraph,
        image: "https://placehold.co/800x500/F8FAFC/6366F1?text=PrimaryRouting+Map"
      }
    ];
    const saasBenefits = [
      { icon: PhLifebuoy, title: "Support Local 974", description: "Une équipe basée à La Réunion, qui comprend vos contraintes et disponible sur votre fuseau horaire." },
      { icon: PhShieldCheck, title: "Sécurité & Conformité", description: "Données hébergées en France ou en UE, conformes RGPD, avec des standards de sécurité bancaires." },
      { icon: PhCpu, title: "Performance & Scalabilité", description: "Architectures cloud-native capables de gérer votre croissance sans ralentissement." },
      { icon: PhArrowsClockwise, title: "Mises à jour continues", description: "Profitez des dernières fonctionnalités et améliorations de sécurité sans intervention de votre part." }
    ];
    const infraStats = [
      { value: "99.99%", label: "Uptime Garanti" },
      { value: "<100ms", label: "Temps de latence moyen" },
      { value: "24/7", label: "Monitoring proactif" },
      { value: "Daily", label: "Backups automatisés" }
    ];
    const faqs = [
      { question: "Proposez-vous des démos personnalisées ?", answer: "Oui, absolument. Contactez-nous pour planifier une démonstration adaptée à votre secteur d'activité et vos cas d'usage spécifiques." },
      { question: "Comment se passe l'intégration avec nos outils existants ?", answer: "Nos produits SaaS disposent d'API RESTful documentées et de connecteurs natifs pour les CRM et ERP les plus courants du marché." },
      { question: "Vos solutions sont-elles adaptées aux PME ?", answer: "Tout à fait. Nos modèles tarifaires sont flexibles et conçus pour s'adapter aux entreprises de toutes tailles, de la startup au grand groupe." },
      { question: "Où sont hébergées les données ?", answer: "Nous privilégions des hébergeurs certifiés (AWS, Scaleway) avec des datacenters situés en France ou en Europe pour garantir la souveraineté des données." },
      { question: "Quel est le niveau de support inclus ?", answer: "Tous nos plans incluent un support par email et chat. Les plans Entreprise bénéficient d'un Account Manager dédié et d'un support téléphonique prioritaire." },
      { question: "Puis-je migrer mes données actuelles ?", answer: "Oui, nous proposons des services d'accompagnement à la migration pour importer vos données historiques en toute sécurité." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Nos Produits SaaS Innovants" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="pt-32 pb-24 px-8 bg-brand-obsidian text-center relative overflow-hidden"${_scopeId}><div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-indigo/10 blur-[120px] rounded-full pointer-events-none"${_scopeId}></div><div class="relative z-10 max-w-4xl mx-auto"${_scopeId}><h1 class="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight"${_scopeId}>Nos Produits SaaS</h1><p class="text-2xl text-slate-300 leading-relaxed font-medium"${_scopeId}> Des solutions logicielles natives, puissantes et sécurisées, conçues pour accélérer votre croissance. </p></div></section><section class="relative z-10"${_scopeId}><!--[-->`);
            ssrRenderList(products, (product, index) => {
              _push2(`<div class="${ssrRenderClass([index % 2 === 0 ? "bg-white" : "bg-bg-light bg-tech-grid", "py-28 px-8"])}"${_scopeId}><div class="${ssrRenderClass([{ "lg:flex-row-reverse": index % 2 !== 0 }, "max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20"])}"${_scopeId}><div class="flex-1 space-y-8"${_scopeId}><div class="flex items-center space-x-6"${_scopeId}><div class="w-16 h-16 bg-brand-indigo text-white rounded-2xl flex items-center justify-center shadow-indigo-glow"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(product.icon), {
                size: 36,
                weight: "fill"
              }, null), _parent2, _scopeId);
              _push2(`</div><h2 class="text-4xl font-black text-brand-obsidian tracking-tight"${_scopeId}>${ssrInterpolate(product.title)}</h2></div><p class="text-2xl text-brand-indigo font-bold"${_scopeId}>${ssrInterpolate(product.subtitle)}</p><p class="text-brand-gray leading-relaxed text-xl font-medium"${_scopeId}>${ssrInterpolate(product.description)}</p><ul class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10"${_scopeId}><!--[-->`);
              ssrRenderList(product.features, (feature) => {
                _push2(`<li class="flex items-center space-x-3 font-bold text-brand-obsidian"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(PhCheckCircle), {
                  size: 24,
                  weight: "fill",
                  class: "text-brand-indigo flex-shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(feature)}</span></li>`);
              });
              _push2(`<!--]--></ul><div class="pt-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$9, { class: "px-8 py-4 text-lg" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Demander une démo `);
                    _push3(ssrRenderComponent(unref(PhArrowRight), {
                      class: "ml-3",
                      weight: "bold"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createTextVNode(" Demander une démo "),
                      createVNode(unref(PhArrowRight), {
                        class: "ml-3",
                        weight: "bold"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="flex-1 relative perspective-1000"${_scopeId}><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.title + " Dashboard")} class="${ssrRenderClass([index % 2 === 0 ? "lg:rotateY(5deg)" : "lg:rotateY(-5deg)", "rounded-2xl border border-slate-200 shadow-premium w-full h-auto bg-white p-2 transform transition-all duration-700 hover:rotate-0"])}"${_scopeId}></div></div></div>`);
            });
            _push2(`<!--]--></section><section class="px-8 py-32 bg-white relative overflow-hidden"${_scopeId}><div class="max-w-7xl mx-auto relative z-10"${_scopeId}><div class="text-center mb-20"${_scopeId}><h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm"${_scopeId}>L&#39;avantage Velt</h2><p class="text-5xl font-black text-brand-obsidian tracking-tight"${_scopeId}>Pourquoi choisir nos solutions ?</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"${_scopeId}><!--[-->`);
            ssrRenderList(saasBenefits, (benefit, index) => {
              _push2(`<div class="p-8 bg-bg-light rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium transition-all duration-300 group"${_scopeId}><div class="w-14 h-14 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-indigo group-hover:text-white transition-colors"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(benefit.icon), {
                size: 32,
                weight: "fill"
              }, null), _parent2, _scopeId);
              _push2(`</div><h3 class="text-xl font-bold text-brand-obsidian mb-4"${_scopeId}>${ssrInterpolate(benefit.title)}</h3><p class="text-brand-gray font-medium leading-relaxed"${_scopeId}>${ssrInterpolate(benefit.description)}</p></div>`);
            });
            _push2(`<!--]--></div></div></section><section class="bg-brand-obsidian py-24 px-8 relative overflow-hidden"${_scopeId}><div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[150px] translate-y-1/2 translate-x-1/3 pointer-events-none"${_scopeId}></div><div class="absolute inset-0 bg-[url(&#39;/images/grid-pattern.svg&#39;)] opacity-5 pointer-events-none"${_scopeId}></div><div class="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16"${_scopeId}><div class="lg:w-1/2"${_scopeId}><div class="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold bg-brand-indigo/20 text-brand-indigo mb-8 ring-1 ring-inset ring-brand-indigo/30"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhDatabase), {
              class: "mr-2",
              weight: "bold"
            }, null, _parent2, _scopeId));
            _push2(` Infrastructure Cloud-Native </div><h2 class="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight"${_scopeId}> Robustesse, Sécurité et <span class="text-brand-indigo"${_scopeId}>Performance.</span></h2><p class="text-xl text-slate-300 leading-relaxed font-medium mb-10"${_scopeId}> Nos SaaS ne sont pas seulement de belles interfaces. Ils reposent sur une infrastructure cloud de pointe, conçue pour la résilience, la sécurité des données et une scalabilité infinie. </p><ul class="space-y-4 text-white font-bold text-lg"${_scopeId}><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhShieldCheck), {
              class: "text-brand-indigo mr-4 flex-shrink-0",
              weight: "fill",
              size: 24
            }, null, _parent2, _scopeId));
            _push2(` Chiffrement de bout en bout</li><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhShieldCheck), {
              class: "text-brand-indigo mr-4 flex-shrink-0",
              weight: "fill",
              size: 24
            }, null, _parent2, _scopeId));
            _push2(` Conformité RGPD &amp; Hébergement UE</li><li class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhShieldCheck), {
              class: "text-brand-indigo mr-4 flex-shrink-0",
              weight: "fill",
              size: 24
            }, null, _parent2, _scopeId));
            _push2(` Architecture Haute Disponibilité</li></ul></div><div class="lg:w-1/2 grid grid-cols-2 gap-6 w-full"${_scopeId}><!--[-->`);
            ssrRenderList(infraStats, (stat, index) => {
              _push2(`<div class="p-8 bg-white/5 border border-white/10 rounded-3xl text-center backdrop-blur-sm hover:bg-white/10 transition-colors"${_scopeId}><p class="text-4xl md:text-5xl font-black text-brand-indigo mb-2 tracking-tight"${_scopeId}>${ssrInterpolate(stat.value)}</p><p class="text-slate-300 font-medium"${_scopeId}>${ssrInterpolate(stat.label)}</p></div>`);
            });
            _push2(`<!--]--></div></div></section><section class="px-8 py-32 bg-bg-light relative overflow-hidden bg-tech-grid"${_scopeId}><div class="max-w-4xl mx-auto relative z-10"${_scopeId}><div class="text-center mb-20"${_scopeId}><h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm"${_scopeId}>FAQ</h2><p class="text-5xl font-black text-brand-obsidian tracking-tight"${_scopeId}>Questions fréquentes</p></div><div class="space-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(faqs, (faq, index) => {
              _push2(`<div class="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden hover:border-brand-indigo/30 transition-colors"${_scopeId}><div class="p-6 flex items-start"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(PhQuestion), {
                size: 28,
                weight: "bold",
                class: "text-brand-indigo mr-4 flex-shrink-0 mt-1"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><h3 class="text-xl font-bold text-brand-obsidian mb-3"${_scopeId}>${ssrInterpolate(faq.question)}</h3><p class="text-brand-gray font-medium leading-relaxed"${_scopeId}>${ssrInterpolate(faq.answer)}</p></div></div></div>`);
            });
            _push2(`<!--]--></div></div></section><section class="px-8 py-40 text-center bg-white relative overflow-hidden"${_scopeId}><div class="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"${_scopeId}></div><div class="relative z-10 max-w-4xl mx-auto"${_scopeId}><h2 class="text-6xl font-black text-brand-obsidian mb-10 tracking-tight leading-tight"${_scopeId}>Prêt à moderniser <br${_scopeId}> vos <span class="text-brand-indigo"${_scopeId}>opérations ?</span></h2><p class="text-xl text-brand-gray mb-12 font-medium max-w-2xl mx-auto leading-relaxed"${_scopeId}> Planifiez une démonstration personnalisée de nos solutions et découvrez comment nous pouvons vous aider à atteindre vos objectifs. </p><div class="flex flex-col sm:flex-row justify-center items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$9, { class: "px-12 py-5 text-xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Réserver une démo `);
                  _push3(ssrRenderComponent(unref(PhArrowRight), {
                    class: "ml-4",
                    weight: "bold"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Réserver une démo "),
                    createVNode(unref(PhArrowRight), {
                      class: "ml-4",
                      weight: "bold"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("contact"),
              class: "inline-flex items-center px-12 py-5 bg-white border-2 border-slate-200 rounded-xl font-bold text-brand-obsidian hover:border-brand-obsidian transition-all duration-300 text-xl"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Contacter l&#39;équipe commerciale `);
                } else {
                  return [
                    createTextVNode(" Contacter l'équipe commerciale ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "pt-32 pb-24 px-8 bg-brand-obsidian text-center relative overflow-hidden" }, [
                createVNode("div", { class: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-indigo/10 blur-[120px] rounded-full pointer-events-none" }),
                createVNode("div", { class: "relative z-10 max-w-4xl mx-auto" }, [
                  createVNode("h1", { class: "text-5xl md:text-7xl font-black text-white mb-8 tracking-tight" }, "Nos Produits SaaS"),
                  createVNode("p", { class: "text-2xl text-slate-300 leading-relaxed font-medium" }, " Des solutions logicielles natives, puissantes et sécurisées, conçues pour accélérer votre croissance. ")
                ])
              ]),
              createVNode("section", { class: "relative z-10" }, [
                (openBlock(), createBlock(Fragment, null, renderList(products, (product, index) => {
                  return createVNode("div", {
                    key: product.id,
                    class: ["py-28 px-8", index % 2 === 0 ? "bg-white" : "bg-bg-light bg-tech-grid"]
                  }, [
                    createVNode("div", {
                      class: ["max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20", { "lg:flex-row-reverse": index % 2 !== 0 }]
                    }, [
                      createVNode("div", { class: "flex-1 space-y-8" }, [
                        createVNode("div", { class: "flex items-center space-x-6" }, [
                          createVNode("div", { class: "w-16 h-16 bg-brand-indigo text-white rounded-2xl flex items-center justify-center shadow-indigo-glow" }, [
                            (openBlock(), createBlock(resolveDynamicComponent(product.icon), {
                              size: 36,
                              weight: "fill"
                            }))
                          ]),
                          createVNode("h2", { class: "text-4xl font-black text-brand-obsidian tracking-tight" }, toDisplayString(product.title), 1)
                        ]),
                        createVNode("p", { class: "text-2xl text-brand-indigo font-bold" }, toDisplayString(product.subtitle), 1),
                        createVNode("p", { class: "text-brand-gray leading-relaxed text-xl font-medium" }, toDisplayString(product.description), 1),
                        createVNode("ul", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(product.features, (feature) => {
                            return openBlock(), createBlock("li", {
                              key: feature,
                              class: "flex items-center space-x-3 font-bold text-brand-obsidian"
                            }, [
                              createVNode(unref(PhCheckCircle), {
                                size: 24,
                                weight: "fill",
                                class: "text-brand-indigo flex-shrink-0"
                              }),
                              createVNode("span", null, toDisplayString(feature), 1)
                            ]);
                          }), 128))
                        ]),
                        createVNode("div", { class: "pt-8" }, [
                          createVNode(_sfc_main$9, { class: "px-8 py-4 text-lg" }, {
                            default: withCtx(() => [
                              createTextVNode(" Demander une démo "),
                              createVNode(unref(PhArrowRight), {
                                class: "ml-3",
                                weight: "bold"
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex-1 relative perspective-1000" }, [
                        createVNode("img", {
                          src: product.image,
                          alt: product.title + " Dashboard",
                          class: ["rounded-2xl border border-slate-200 shadow-premium w-full h-auto bg-white p-2 transform transition-all duration-700 hover:rotate-0", index % 2 === 0 ? "lg:rotateY(5deg)" : "lg:rotateY(-5deg)"]
                        }, null, 10, ["src", "alt"])
                      ])
                    ], 2)
                  ], 2);
                }), 64))
              ]),
              createVNode("section", { class: "px-8 py-32 bg-white relative overflow-hidden" }, [
                createVNode("div", { class: "max-w-7xl mx-auto relative z-10" }, [
                  createVNode("div", { class: "text-center mb-20" }, [
                    createVNode("h2", { class: "text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm" }, "L'avantage Velt"),
                    createVNode("p", { class: "text-5xl font-black text-brand-obsidian tracking-tight" }, "Pourquoi choisir nos solutions ?")
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(saasBenefits, (benefit, index) => {
                      return createVNode("div", {
                        key: index,
                        class: "p-8 bg-bg-light rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium transition-all duration-300 group"
                      }, [
                        createVNode("div", { class: "w-14 h-14 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-indigo group-hover:text-white transition-colors" }, [
                          (openBlock(), createBlock(resolveDynamicComponent(benefit.icon), {
                            size: 32,
                            weight: "fill"
                          }))
                        ]),
                        createVNode("h3", { class: "text-xl font-bold text-brand-obsidian mb-4" }, toDisplayString(benefit.title), 1),
                        createVNode("p", { class: "text-brand-gray font-medium leading-relaxed" }, toDisplayString(benefit.description), 1)
                      ]);
                    }), 64))
                  ])
                ])
              ]),
              createVNode("section", { class: "bg-brand-obsidian py-24 px-8 relative overflow-hidden" }, [
                createVNode("div", { class: "absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[150px] translate-y-1/2 translate-x-1/3 pointer-events-none" }),
                createVNode("div", { class: "absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none" }),
                createVNode("div", { class: "max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16" }, [
                  createVNode("div", { class: "lg:w-1/2" }, [
                    createVNode("div", { class: "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold bg-brand-indigo/20 text-brand-indigo mb-8 ring-1 ring-inset ring-brand-indigo/30" }, [
                      createVNode(unref(PhDatabase), {
                        class: "mr-2",
                        weight: "bold"
                      }),
                      createTextVNode(" Infrastructure Cloud-Native ")
                    ]),
                    createVNode("h2", { class: "text-4xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight" }, [
                      createTextVNode(" Robustesse, Sécurité et "),
                      createVNode("span", { class: "text-brand-indigo" }, "Performance.")
                    ]),
                    createVNode("p", { class: "text-xl text-slate-300 leading-relaxed font-medium mb-10" }, " Nos SaaS ne sont pas seulement de belles interfaces. Ils reposent sur une infrastructure cloud de pointe, conçue pour la résilience, la sécurité des données et une scalabilité infinie. "),
                    createVNode("ul", { class: "space-y-4 text-white font-bold text-lg" }, [
                      createVNode("li", { class: "flex items-center" }, [
                        createVNode(unref(PhShieldCheck), {
                          class: "text-brand-indigo mr-4 flex-shrink-0",
                          weight: "fill",
                          size: 24
                        }),
                        createTextVNode(" Chiffrement de bout en bout")
                      ]),
                      createVNode("li", { class: "flex items-center" }, [
                        createVNode(unref(PhShieldCheck), {
                          class: "text-brand-indigo mr-4 flex-shrink-0",
                          weight: "fill",
                          size: 24
                        }),
                        createTextVNode(" Conformité RGPD & Hébergement UE")
                      ]),
                      createVNode("li", { class: "flex items-center" }, [
                        createVNode(unref(PhShieldCheck), {
                          class: "text-brand-indigo mr-4 flex-shrink-0",
                          weight: "fill",
                          size: 24
                        }),
                        createTextVNode(" Architecture Haute Disponibilité")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "lg:w-1/2 grid grid-cols-2 gap-6 w-full" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(infraStats, (stat, index) => {
                      return createVNode("div", {
                        key: index,
                        class: "p-8 bg-white/5 border border-white/10 rounded-3xl text-center backdrop-blur-sm hover:bg-white/10 transition-colors"
                      }, [
                        createVNode("p", { class: "text-4xl md:text-5xl font-black text-brand-indigo mb-2 tracking-tight" }, toDisplayString(stat.value), 1),
                        createVNode("p", { class: "text-slate-300 font-medium" }, toDisplayString(stat.label), 1)
                      ]);
                    }), 64))
                  ])
                ])
              ]),
              createVNode("section", { class: "px-8 py-32 bg-bg-light relative overflow-hidden bg-tech-grid" }, [
                createVNode("div", { class: "max-w-4xl mx-auto relative z-10" }, [
                  createVNode("div", { class: "text-center mb-20" }, [
                    createVNode("h2", { class: "text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm" }, "FAQ"),
                    createVNode("p", { class: "text-5xl font-black text-brand-obsidian tracking-tight" }, "Questions fréquentes")
                  ]),
                  createVNode("div", { class: "space-y-6" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq, index) => {
                      return createVNode("div", {
                        key: index,
                        class: "bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden hover:border-brand-indigo/30 transition-colors"
                      }, [
                        createVNode("div", { class: "p-6 flex items-start" }, [
                          createVNode(unref(PhQuestion), {
                            size: 28,
                            weight: "bold",
                            class: "text-brand-indigo mr-4 flex-shrink-0 mt-1"
                          }),
                          createVNode("div", null, [
                            createVNode("h3", { class: "text-xl font-bold text-brand-obsidian mb-3" }, toDisplayString(faq.question), 1),
                            createVNode("p", { class: "text-brand-gray font-medium leading-relaxed" }, toDisplayString(faq.answer), 1)
                          ])
                        ])
                      ]);
                    }), 64))
                  ])
                ])
              ]),
              createVNode("section", { class: "px-8 py-40 text-center bg-white relative overflow-hidden" }, [
                createVNode("div", { class: "absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" }),
                createVNode("div", { class: "relative z-10 max-w-4xl mx-auto" }, [
                  createVNode("h2", { class: "text-6xl font-black text-brand-obsidian mb-10 tracking-tight leading-tight" }, [
                    createTextVNode("Prêt à moderniser "),
                    createVNode("br"),
                    createTextVNode(" vos "),
                    createVNode("span", { class: "text-brand-indigo" }, "opérations ?")
                  ]),
                  createVNode("p", { class: "text-xl text-brand-gray mb-12 font-medium max-w-2xl mx-auto leading-relaxed" }, " Planifiez une démonstration personnalisée de nos solutions et découvrez comment nous pouvons vous aider à atteindre vos objectifs. "),
                  createVNode("div", { class: "flex flex-col sm:flex-row justify-center items-center gap-4" }, [
                    createVNode(_sfc_main$9, { class: "px-12 py-5 text-xl" }, {
                      default: withCtx(() => [
                        createTextVNode(" Réserver une démo "),
                        createVNode(unref(PhArrowRight), {
                          class: "ml-4",
                          weight: "bold"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      href: _ctx.route("contact"),
                      class: "inline-flex items-center px-12 py-5 bg-white border-2 border-slate-200 rounded-xl font-bold text-brand-obsidian hover:border-brand-obsidian transition-all duration-300 text-xl"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Contacter l'équipe commerciale ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Saas.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Studio",
  __ssrInlineRender: true,
  setup(__props) {
    const processSteps = [
      { icon: PhLightbulb, title: "1. Immersion & Stratégie", description: "Nous plongeons dans votre business pour définir les objectifs, les personas et la feuille de route produit." },
      { icon: PhPaintBrush, title: "2. Design & Prototypage", description: "Création de wireframes UX et de maquettes UI haute-fidélité interactives sur Figma." },
      { icon: PhCode, title: "3. Développement Agile", description: "Codage en sprints avec des points d'étape réguliers. Stack moderne, tests et revue de code." },
      { icon: PhRocketLaunch, title: "4. Lancement & Itération", description: "Mise en production sécurisée, suivi des analytics et améliorations continues basées sur la data." }
    ];
    const toolkit = [
      { icon: PhFigmaLogo, name: "Figma", category: "Design & Prototypage" },
      { icon: PhNotionLogo, name: "Notion", category: "Documentation & Gestion" },
      { icon: PhSlackLogo, name: "Slack", category: "Communication" },
      // Note: Remplacement d'icônes spécifiques non dispos dans Phosphor basic par des génériques ou proches
      { icon: PhArrowsClockwise, name: "Linear", category: "Gestion de projet Agile" },
      { icon: PhGithubLogo, name: "GitHub", category: "Versionning & CI/CD" },
      { icon: PhTerminalWindow, name: "VS Code", category: "Développement" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Nos Services Studio - Design & Développement" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="pt-32 pb-24 px-8 bg-bg-light text-center relative overflow-hidden bg-tech-grid"${_scopeId}><div class="relative z-10 max-w-4xl mx-auto"${_scopeId}><div class="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold bg-white text-brand-indigo mb-8 shadow-sm border border-brand-indigo/10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhStack), {
              class: "mr-2",
              weight: "bold"
            }, null, _parent2, _scopeId));
            _push2(` Studio Digital Hybride </div><h1 class="text-5xl md:text-7xl font-black text-brand-obsidian mb-8 tracking-tight"${_scopeId}>Nos expertises</h1><p class="text-2xl text-brand-gray leading-relaxed max-w-3xl mx-auto font-medium"${_scopeId}> Nous combinons design, technologie et stratégie pour construire des produits digitaux qui durent et scalent. </p></div></section><section class="px-8 py-32 max-w-7xl mx-auto relative z-10 space-y-40"${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center"${_scopeId}><div class="lg:col-span-2"${_scopeId}><div class="w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhDeviceMobile), {
              size: 40,
              weight: "fill"
            }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-4xl font-bold text-brand-obsidian mb-8 tracking-tight"${_scopeId}>UX/UI Design</h2><p class="text-brand-gray text-xl leading-relaxed mb-10 font-medium"${_scopeId}> Nous concevons des interfaces intuitives et élégantes, basées sur la donnée et centrées sur l&#39;utilisateur final. </p><ul class="space-y-4 text-brand-obsidian mb-10 font-bold"${_scopeId}><li class="flex items-center"${_scopeId}><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCheck), {
              weight: "bold",
              size: "14"
            }, null, _parent2, _scopeId));
            _push2(`</div>User Research &amp; Personas</li><li class="flex items-center"${_scopeId}><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCheck), {
              weight: "bold",
              size: "14"
            }, null, _parent2, _scopeId));
            _push2(`</div>Wireframing &amp; Prototypage (Figma)</li><li class="flex items-center"${_scopeId}><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCheck), {
              weight: "bold",
              size: "14"
            }, null, _parent2, _scopeId));
            _push2(`</div>Design Systems scalables</li></ul></div><div class="lg:col-span-3 grid grid-cols-2 gap-8 p-8 bg-bg-light rounded-3xl border border-slate-100 shadow-premium bg-tech-grid"${_scopeId}><img src="/images/studio/ux-project-1.jpg" class="rounded-2xl shadow-sm border border-white object-cover h-full w-full bg-white" alt="UX Project 1"${_scopeId}><img src="/images/studio/ui-project-2.jpg" class="rounded-2xl shadow-sm border border-white object-cover h-full w-full mt-16 bg-white" alt="UX Project 2"${_scopeId}></div></div><div class="rounded-3xl bg-brand-obsidian p-12 lg:p-20 text-white grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative overflow-hidden shadow-premium"${_scopeId}><div class="absolute top-1/2 right-0 w-[80%] md:w-[500px] h-[80%] md:h-[500px] bg-brand-indigo/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"${_scopeId}></div><div class="lg:order-2 relative z-10"${_scopeId}><div class="w-16 h-16 bg-white/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCode), {
              size: 40,
              weight: "fill"
            }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-4xl font-bold mb-8 tracking-tight"${_scopeId}>Développement Tech</h2><p class="text-slate-300 text-xl leading-relaxed mb-10 font-medium"${_scopeId}> Applications sur-mesure avec une stack moderne pour une performance maximale. Pas de CMS lourds, du code propre et maintenable. </p><h3 class="text-lg font-bold mb-6 text-white uppercase tracking-wider"${_scopeId}>Notre Stack Principale</h3><div class="flex flex-wrap gap-4 font-bold"${_scopeId}><span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCode), { class: "mr-2 text-brand-indigo" }, null, _parent2, _scopeId));
            _push2(` Laravel 12</span><span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhDeviceMobile), { class: "mr-2 text-brand-indigo" }, null, _parent2, _scopeId));
            _push2(` Vue.js 3</span><span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhArrowsClockwise), { class: "mr-2 text-brand-indigo" }, null, _parent2, _scopeId));
            _push2(` Inertia SSR</span><span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhPaintBrush), { class: "mr-2 text-brand-indigo" }, null, _parent2, _scopeId));
            _push2(` Tailwind v4</span></div></div><div class="lg:order-1 relative z-10"${_scopeId}><img src="/images/studio/dev-dashboard.jpg" class="rounded-2xl shadow-2xl border border-white/10 w-full h-auto" alt="Dev Project"${_scopeId}></div></div><div class="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center md:flex-row-reverse"${_scopeId}><div class="lg:col-span-2 lg:order-2"${_scopeId}><div class="w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhMegaphone), {
              size: 40,
              weight: "fill"
            }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-4xl font-bold text-brand-obsidian mb-8 tracking-tight"${_scopeId}>Branding &amp; Identité</h2><p class="text-brand-gray text-xl leading-relaxed mb-10 font-medium"${_scopeId}> Création de marques fortes qui résonnent dans l&#39;écosystème tech et digital. Nous définissons votre voix visuelle et verbale. </p><ul class="space-y-4 text-brand-obsidian mb-10 font-bold"${_scopeId}><li class="flex items-center"${_scopeId}><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCheck), {
              weight: "bold",
              size: "14"
            }, null, _parent2, _scopeId));
            _push2(`</div>Stratégie de marque &amp; Positionnement</li><li class="flex items-center"${_scopeId}><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCheck), {
              weight: "bold",
              size: "14"
            }, null, _parent2, _scopeId));
            _push2(`</div>Identité visuelle &amp; Logotype</li><li class="flex items-center"${_scopeId}><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCheck), {
              weight: "bold",
              size: "14"
            }, null, _parent2, _scopeId));
            _push2(`</div>Brand Guidelines &amp; Tone of Voice</li></ul></div><div class="lg:col-span-3 lg:order-1 grid grid-cols-2 gap-8 p-8 bg-bg-light rounded-3xl border border-slate-100 shadow-premium bg-tech-grid relative overflow-hidden"${_scopeId}><div class="col-span-2 relative group z-10"${_scopeId}><img src="/images/studio/branding-book.jpg" class="rounded-2xl shadow-sm border border-white object-cover w-full h-auto bg-white" alt="Branding Highlight"${_scopeId}></div><img src="/images/studio/logofolio.jpg" class="rounded-2xl shadow-sm border border-white object-cover h-full w-full bg-white" alt="Brand Project 1"${_scopeId}><img src="/images/studio/stationery.jpg" class="rounded-2xl shadow-sm border border-white object-cover h-full w-full bg-white" alt="Brand Project 2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhMegaphone), {
              size: 200,
              class: "text-brand-indigo/5 absolute -bottom-10 -left-10 pointer-events-none",
              weight: "duotone"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></section><section class="px-8 py-32 bg-white relative overflow-hidden border-t border-slate-100"${_scopeId}><div class="max-w-7xl mx-auto relative z-10"${_scopeId}><div class="text-center mb-20"${_scopeId}><h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm"${_scopeId}>Notre Méthodologie</h2><p class="text-5xl font-black text-brand-obsidian tracking-tight"${_scopeId}>Un processus clair, de l&#39;idée au produit</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(processSteps, (step, index) => {
              _push2(`<div class="relative group"${_scopeId}><div class="p-8 bg-bg-light rounded-3xl shadow-sm border border-slate-100 h-full relative z-10 hover:shadow-premium hover:border-brand-indigo/30 transition-all duration-300"${_scopeId}><div class="w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-indigo group-hover:text-white transition-colors"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(step.icon), {
                size: 32,
                weight: "fill"
              }, null), _parent2, _scopeId);
              _push2(`</div><h3 class="text-xl font-bold text-brand-obsidian mb-4 leading-tight"${_scopeId}>${ssrInterpolate(step.title)}</h3><p class="text-brand-gray font-medium leading-relaxed"${_scopeId}>${ssrInterpolate(step.description)}</p></div>`);
              if (index < processSteps.length - 1) {
                _push2(`<div class="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0 -ml-4"${_scopeId}><div class="absolute right-0 top-1/2 w-3 h-3 bg-white border-2 border-brand-indigo rounded-full -translate-y-1/2 translate-x-1/2"${_scopeId}></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></section><section class="px-8 py-32 bg-brand-obsidian relative overflow-hidden"${_scopeId}><div class="absolute inset-0 bg-[url(&#39;/images/grid-pattern.svg&#39;)] opacity-5 pointer-events-none"${_scopeId}></div><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-indigo/10 rounded-full blur-[150px] pointer-events-none translate-y-1/2"${_scopeId}></div><div class="max-w-7xl mx-auto relative z-10 text-center"${_scopeId}><h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm"${_scopeId}>Notre Toolkit</h2><p class="text-5xl font-black text-white tracking-tight mb-12"${_scopeId}>Les meilleurs outils pour un travail de qualité</p><p class="text-xl text-slate-300 max-w-2xl mx-auto mb-20 font-medium"${_scopeId}>Nous utilisons des outils modernes et collaboratifs pour assurer fluidité et transparence tout au long du projet.</p><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(toolkit, (tool, index) => {
              _push2(`<div class="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors group"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(tool.icon), {
                size: 48,
                class: "text-slate-300 group-hover:text-brand-indigo transition-colors mb-4",
                weight: "duotone"
              }, null), _parent2, _scopeId);
              _push2(`<p class="text-white font-bold text-lg mb-1"${_scopeId}>${ssrInterpolate(tool.name)}</p><p class="text-slate-400 text-xs font-medium"${_scopeId}>${ssrInterpolate(tool.category)}</p></div>`);
            });
            _push2(`<!--]--></div></div></section><section class="px-8 py-32 text-center bg-bg-light relative overflow-hidden bg-tech-grid border-t border-slate-100"${_scopeId}><div class="relative z-10 max-w-3xl mx-auto"${_scopeId}><h2 class="text-5xl font-black text-brand-obsidian mb-10 tracking-tight"${_scopeId}>Prêt à lancer votre projet ?</h2><p class="text-xl text-brand-gray mb-12 font-medium leading-relaxed"${_scopeId}>Que ce soit pour un MVP, une refonte ou un produit complexe, nous sommes prêts à relever le défi.</p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("contact"),
              class: "inline-flex items-center px-10 py-5 bg-brand-indigo rounded-lg font-bold text-white hover:bg-brand-indigo-dark hover:shadow-indigo-glow transition-all group text-xl"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Démarrer une conversation `);
                  _push3(ssrRenderComponent(unref(PhArrowRight), {
                    class: "ml-4 group-hover:translate-x-1 transition-transform",
                    weight: "bold"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Démarrer une conversation "),
                    createVNode(unref(PhArrowRight), {
                      class: "ml-4 group-hover:translate-x-1 transition-transform",
                      weight: "bold"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></section>`);
          } else {
            return [
              createVNode("section", { class: "pt-32 pb-24 px-8 bg-bg-light text-center relative overflow-hidden bg-tech-grid" }, [
                createVNode("div", { class: "relative z-10 max-w-4xl mx-auto" }, [
                  createVNode("div", { class: "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold bg-white text-brand-indigo mb-8 shadow-sm border border-brand-indigo/10" }, [
                    createVNode(unref(PhStack), {
                      class: "mr-2",
                      weight: "bold"
                    }),
                    createTextVNode(" Studio Digital Hybride ")
                  ]),
                  createVNode("h1", { class: "text-5xl md:text-7xl font-black text-brand-obsidian mb-8 tracking-tight" }, "Nos expertises"),
                  createVNode("p", { class: "text-2xl text-brand-gray leading-relaxed max-w-3xl mx-auto font-medium" }, " Nous combinons design, technologie et stratégie pour construire des produits digitaux qui durent et scalent. ")
                ])
              ]),
              createVNode("section", { class: "px-8 py-32 max-w-7xl mx-auto relative z-10 space-y-40" }, [
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-5 gap-20 items-center" }, [
                  createVNode("div", { class: "lg:col-span-2" }, [
                    createVNode("div", { class: "w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-10" }, [
                      createVNode(unref(PhDeviceMobile), {
                        size: 40,
                        weight: "fill"
                      })
                    ]),
                    createVNode("h2", { class: "text-4xl font-bold text-brand-obsidian mb-8 tracking-tight" }, "UX/UI Design"),
                    createVNode("p", { class: "text-brand-gray text-xl leading-relaxed mb-10 font-medium" }, " Nous concevons des interfaces intuitives et élégantes, basées sur la donnée et centrées sur l'utilisateur final. "),
                    createVNode("ul", { class: "space-y-4 text-brand-obsidian mb-10 font-bold" }, [
                      createVNode("li", { class: "flex items-center" }, [
                        createVNode("div", { class: "w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4" }, [
                          createVNode(unref(PhCheck), {
                            weight: "bold",
                            size: "14"
                          })
                        ]),
                        createTextVNode("User Research & Personas")
                      ]),
                      createVNode("li", { class: "flex items-center" }, [
                        createVNode("div", { class: "w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4" }, [
                          createVNode(unref(PhCheck), {
                            weight: "bold",
                            size: "14"
                          })
                        ]),
                        createTextVNode("Wireframing & Prototypage (Figma)")
                      ]),
                      createVNode("li", { class: "flex items-center" }, [
                        createVNode("div", { class: "w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4" }, [
                          createVNode(unref(PhCheck), {
                            weight: "bold",
                            size: "14"
                          })
                        ]),
                        createTextVNode("Design Systems scalables")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-3 grid grid-cols-2 gap-8 p-8 bg-bg-light rounded-3xl border border-slate-100 shadow-premium bg-tech-grid" }, [
                    createVNode("img", {
                      src: "/images/studio/ux-project-1.jpg",
                      class: "rounded-2xl shadow-sm border border-white object-cover h-full w-full bg-white",
                      alt: "UX Project 1"
                    }),
                    createVNode("img", {
                      src: "/images/studio/ui-project-2.jpg",
                      class: "rounded-2xl shadow-sm border border-white object-cover h-full w-full mt-16 bg-white",
                      alt: "UX Project 2"
                    })
                  ])
                ]),
                createVNode("div", { class: "rounded-3xl bg-brand-obsidian p-12 lg:p-20 text-white grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative overflow-hidden shadow-premium" }, [
                  createVNode("div", { class: "absolute top-1/2 right-0 w-[80%] md:w-[500px] h-[80%] md:h-[500px] bg-brand-indigo/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" }),
                  createVNode("div", { class: "lg:order-2 relative z-10" }, [
                    createVNode("div", { class: "w-16 h-16 bg-white/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-10" }, [
                      createVNode(unref(PhCode), {
                        size: 40,
                        weight: "fill"
                      })
                    ]),
                    createVNode("h2", { class: "text-4xl font-bold mb-8 tracking-tight" }, "Développement Tech"),
                    createVNode("p", { class: "text-slate-300 text-xl leading-relaxed mb-10 font-medium" }, " Applications sur-mesure avec une stack moderne pour une performance maximale. Pas de CMS lourds, du code propre et maintenable. "),
                    createVNode("h3", { class: "text-lg font-bold mb-6 text-white uppercase tracking-wider" }, "Notre Stack Principale"),
                    createVNode("div", { class: "flex flex-wrap gap-4 font-bold" }, [
                      createVNode("span", { class: "px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center" }, [
                        createVNode(unref(PhCode), { class: "mr-2 text-brand-indigo" }),
                        createTextVNode(" Laravel 12")
                      ]),
                      createVNode("span", { class: "px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center" }, [
                        createVNode(unref(PhDeviceMobile), { class: "mr-2 text-brand-indigo" }),
                        createTextVNode(" Vue.js 3")
                      ]),
                      createVNode("span", { class: "px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center" }, [
                        createVNode(unref(PhArrowsClockwise), { class: "mr-2 text-brand-indigo" }),
                        createTextVNode(" Inertia SSR")
                      ]),
                      createVNode("span", { class: "px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center" }, [
                        createVNode(unref(PhPaintBrush), { class: "mr-2 text-brand-indigo" }),
                        createTextVNode(" Tailwind v4")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "lg:order-1 relative z-10" }, [
                    createVNode("img", {
                      src: "/images/studio/dev-dashboard.jpg",
                      class: "rounded-2xl shadow-2xl border border-white/10 w-full h-auto",
                      alt: "Dev Project"
                    })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-5 gap-20 items-center md:flex-row-reverse" }, [
                  createVNode("div", { class: "lg:col-span-2 lg:order-2" }, [
                    createVNode("div", { class: "w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-10" }, [
                      createVNode(unref(PhMegaphone), {
                        size: 40,
                        weight: "fill"
                      })
                    ]),
                    createVNode("h2", { class: "text-4xl font-bold text-brand-obsidian mb-8 tracking-tight" }, "Branding & Identité"),
                    createVNode("p", { class: "text-brand-gray text-xl leading-relaxed mb-10 font-medium" }, " Création de marques fortes qui résonnent dans l'écosystème tech et digital. Nous définissons votre voix visuelle et verbale. "),
                    createVNode("ul", { class: "space-y-4 text-brand-obsidian mb-10 font-bold" }, [
                      createVNode("li", { class: "flex items-center" }, [
                        createVNode("div", { class: "w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4" }, [
                          createVNode(unref(PhCheck), {
                            weight: "bold",
                            size: "14"
                          })
                        ]),
                        createTextVNode("Stratégie de marque & Positionnement")
                      ]),
                      createVNode("li", { class: "flex items-center" }, [
                        createVNode("div", { class: "w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4" }, [
                          createVNode(unref(PhCheck), {
                            weight: "bold",
                            size: "14"
                          })
                        ]),
                        createTextVNode("Identité visuelle & Logotype")
                      ]),
                      createVNode("li", { class: "flex items-center" }, [
                        createVNode("div", { class: "w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4" }, [
                          createVNode(unref(PhCheck), {
                            weight: "bold",
                            size: "14"
                          })
                        ]),
                        createTextVNode("Brand Guidelines & Tone of Voice")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-3 lg:order-1 grid grid-cols-2 gap-8 p-8 bg-bg-light rounded-3xl border border-slate-100 shadow-premium bg-tech-grid relative overflow-hidden" }, [
                    createVNode("div", { class: "col-span-2 relative group z-10" }, [
                      createVNode("img", {
                        src: "/images/studio/branding-book.jpg",
                        class: "rounded-2xl shadow-sm border border-white object-cover w-full h-auto bg-white",
                        alt: "Branding Highlight"
                      })
                    ]),
                    createVNode("img", {
                      src: "/images/studio/logofolio.jpg",
                      class: "rounded-2xl shadow-sm border border-white object-cover h-full w-full bg-white",
                      alt: "Brand Project 1"
                    }),
                    createVNode("img", {
                      src: "/images/studio/stationery.jpg",
                      class: "rounded-2xl shadow-sm border border-white object-cover h-full w-full bg-white",
                      alt: "Brand Project 2"
                    }),
                    createVNode(unref(PhMegaphone), {
                      size: 200,
                      class: "text-brand-indigo/5 absolute -bottom-10 -left-10 pointer-events-none",
                      weight: "duotone"
                    })
                  ])
                ])
              ]),
              createVNode("section", { class: "px-8 py-32 bg-white relative overflow-hidden border-t border-slate-100" }, [
                createVNode("div", { class: "max-w-7xl mx-auto relative z-10" }, [
                  createVNode("div", { class: "text-center mb-20" }, [
                    createVNode("h2", { class: "text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm" }, "Notre Méthodologie"),
                    createVNode("p", { class: "text-5xl font-black text-brand-obsidian tracking-tight" }, "Un processus clair, de l'idée au produit")
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(processSteps, (step, index) => {
                      return createVNode("div", {
                        key: index,
                        class: "relative group"
                      }, [
                        createVNode("div", { class: "p-8 bg-bg-light rounded-3xl shadow-sm border border-slate-100 h-full relative z-10 hover:shadow-premium hover:border-brand-indigo/30 transition-all duration-300" }, [
                          createVNode("div", { class: "w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-indigo group-hover:text-white transition-colors" }, [
                            (openBlock(), createBlock(resolveDynamicComponent(step.icon), {
                              size: 32,
                              weight: "fill"
                            }))
                          ]),
                          createVNode("h3", { class: "text-xl font-bold text-brand-obsidian mb-4 leading-tight" }, toDisplayString(step.title), 1),
                          createVNode("p", { class: "text-brand-gray font-medium leading-relaxed" }, toDisplayString(step.description), 1)
                        ]),
                        index < processSteps.length - 1 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0 -ml-4"
                        }, [
                          createVNode("div", { class: "absolute right-0 top-1/2 w-3 h-3 bg-white border-2 border-brand-indigo rounded-full -translate-y-1/2 translate-x-1/2" })
                        ])) : createCommentVNode("", true)
                      ]);
                    }), 64))
                  ])
                ])
              ]),
              createVNode("section", { class: "px-8 py-32 bg-brand-obsidian relative overflow-hidden" }, [
                createVNode("div", { class: "absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none" }),
                createVNode("div", { class: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-indigo/10 rounded-full blur-[150px] pointer-events-none translate-y-1/2" }),
                createVNode("div", { class: "max-w-7xl mx-auto relative z-10 text-center" }, [
                  createVNode("h2", { class: "text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm" }, "Notre Toolkit"),
                  createVNode("p", { class: "text-5xl font-black text-white tracking-tight mb-12" }, "Les meilleurs outils pour un travail de qualité"),
                  createVNode("p", { class: "text-xl text-slate-300 max-w-2xl mx-auto mb-20 font-medium" }, "Nous utilisons des outils modernes et collaboratifs pour assurer fluidité et transparence tout au long du projet."),
                  createVNode("div", { class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(toolkit, (tool, index) => {
                      return createVNode("div", {
                        key: index,
                        class: "p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors group"
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(tool.icon), {
                          size: 48,
                          class: "text-slate-300 group-hover:text-brand-indigo transition-colors mb-4",
                          weight: "duotone"
                        })),
                        createVNode("p", { class: "text-white font-bold text-lg mb-1" }, toDisplayString(tool.name), 1),
                        createVNode("p", { class: "text-slate-400 text-xs font-medium" }, toDisplayString(tool.category), 1)
                      ]);
                    }), 64))
                  ])
                ])
              ]),
              createVNode("section", { class: "px-8 py-32 text-center bg-bg-light relative overflow-hidden bg-tech-grid border-t border-slate-100" }, [
                createVNode("div", { class: "relative z-10 max-w-3xl mx-auto" }, [
                  createVNode("h2", { class: "text-5xl font-black text-brand-obsidian mb-10 tracking-tight" }, "Prêt à lancer votre projet ?"),
                  createVNode("p", { class: "text-xl text-brand-gray mb-12 font-medium leading-relaxed" }, "Que ce soit pour un MVP, une refonte ou un produit complexe, nous sommes prêts à relever le défi."),
                  createVNode(unref(Link), {
                    href: _ctx.route("contact"),
                    class: "inline-flex items-center px-10 py-5 bg-brand-indigo rounded-lg font-bold text-white hover:bg-brand-indigo-dark hover:shadow-indigo-glow transition-all group text-xl"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Démarrer une conversation "),
                      createVNode(unref(PhArrowRight), {
                        class: "ml-4 group-hover:translate-x-1 transition-transform",
                        weight: "bold"
                      })
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Studio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const Ziggy = { "url": "http://velt.test", "port": null, "defaults": {}, "routes": { "login": { "uri": "login", "methods": ["GET", "HEAD"] }, "login.store": { "uri": "login", "methods": ["POST"] }, "logout": { "uri": "logout", "methods": ["POST"] }, "password.request": { "uri": "forgot-password", "methods": ["GET", "HEAD"] }, "password.reset": { "uri": "reset-password/{token}", "methods": ["GET", "HEAD"], "parameters": ["token"] }, "password.email": { "uri": "forgot-password", "methods": ["POST"] }, "password.update": { "uri": "reset-password", "methods": ["POST"] }, "register": { "uri": "register", "methods": ["GET", "HEAD"] }, "register.store": { "uri": "register", "methods": ["POST"] }, "user-profile-information.update": { "uri": "user/profile-information", "methods": ["PUT"] }, "user-password.update": { "uri": "user/password", "methods": ["PUT"] }, "password.confirm": { "uri": "user/confirm-password", "methods": ["GET", "HEAD"] }, "password.confirmation": { "uri": "user/confirmed-password-status", "methods": ["GET", "HEAD"] }, "password.confirm.store": { "uri": "user/confirm-password", "methods": ["POST"] }, "two-factor.login": { "uri": "two-factor-challenge", "methods": ["GET", "HEAD"] }, "two-factor.login.store": { "uri": "two-factor-challenge", "methods": ["POST"] }, "two-factor.enable": { "uri": "user/two-factor-authentication", "methods": ["POST"] }, "two-factor.confirm": { "uri": "user/confirmed-two-factor-authentication", "methods": ["POST"] }, "two-factor.disable": { "uri": "user/two-factor-authentication", "methods": ["DELETE"] }, "two-factor.qr-code": { "uri": "user/two-factor-qr-code", "methods": ["GET", "HEAD"] }, "two-factor.secret-key": { "uri": "user/two-factor-secret-key", "methods": ["GET", "HEAD"] }, "two-factor.recovery-codes": { "uri": "user/two-factor-recovery-codes", "methods": ["GET", "HEAD"] }, "two-factor.regenerate-recovery-codes": { "uri": "user/two-factor-recovery-codes", "methods": ["POST"] }, "home": { "uri": "/", "methods": ["GET", "HEAD"] }, "studio": { "uri": "studio", "methods": ["GET", "HEAD"] }, "saas": { "uri": "saas-products", "methods": ["GET", "HEAD"] }, "contact": { "uri": "contact", "methods": ["GET", "HEAD"] }, "admin.dashboard": { "uri": "admin/dashboard", "methods": ["GET", "HEAD"] }, "storage.local": { "uri": "storage/{path}", "methods": ["GET", "HEAD"], "wheres": { "path": ".*" }, "parameters": ["path"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - Velt`,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Admin/Auth/Login.vue": __vite_glob_0_0, "./Pages/Admin/Dashboard.vue": __vite_glob_0_1, "./Pages/Contact.vue": __vite_glob_0_2, "./Pages/Home.vue": __vite_glob_0_3, "./Pages/Maintenance.vue": __vite_glob_0_4, "./Pages/Saas.vue": __vite_glob_0_5, "./Pages/Studio.vue": __vite_glob_0_6 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin).use(ZiggyVue, Ziggy);
    }
  })
);
