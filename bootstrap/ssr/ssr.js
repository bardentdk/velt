import { createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext, createTextVNode, ref, resolveComponent, withModifiers, withDirectives, vModelText, vModelSelect, openBlock, createBlock, Fragment, renderList, toDisplayString, createSSRApp, h } from "vue";
import { ssrRenderVNode, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttrs, ssrLooseEqual, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { Link, useForm, Head, createInertiaApp } from "@inertiajs/vue3";
import { PhSquaresFour, PhSignOut, PhList, PhX, PhEnvelopeSimple, PhMapPin, PhPhone, PhCloudArrowUp, PhChartBar, PhGraph, PhDeviceMobile, PhCode, PhMegaphone, PhCheckCircle, PhArrowRight } from "@phosphor-icons/vue";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { ZiggyVue } from "ziggy-js";
const _sfc_main$9 = {
  __name: "PrimaryButton",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: false,
      default: null
    },
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.href ? unref(Link) : "button"), mergeProps({
        href: __props.href,
        type: !__props.href ? __props.type : void 0,
        class: "inline-flex items-center px-8 py-3 bg-cyan-400 border border-transparent rounded-full font-semibold text-indigo-950 tracking-wide hover:bg-cyan-300 hover:shadow-glow-cyan transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-indigo-950"
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
      _push(ssrRenderComponent(unref(Head), { title: "Admin Login - Velt" }, null, _parent));
      _push(`<div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-indigo-950 relative overflow-hidden"><div class="absolute top-[-50%] left-[-50%] w-[100%] h-[100%] bg-indigo-900/30 rounded-full blur-[150px] -z-10"></div><div class="absolute bottom-[-50%] right-[-50%] w-[80%] h-[80%] bg-cyan-900/20 rounded-full blur-[150px] -z-10"></div><div class="w-full sm:max-w-md mt-6 px-8 py-10 bg-indigo-900/50 border border-slate-400/10 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden relative"><div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-400/20 blur-[50px] rounded-full -z-10"></div><div class="flex justify-center mb-8"><h1 class="text-4xl font-black tracking-wider text-slate-100">VELT <span class="text-cyan-400 text-lg block font-medium tracking-normal">Admin Panel</span></h1></div>`);
      if (__props.status) {
        _push(`<div class="mb-4 font-medium text-sm text-cyan-400">${ssrInterpolate(__props.status)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-6"><div><label for="email" class="block font-medium text-sm text-slate-300">Email</label><input id="email" type="email" class="mt-1 block w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100"${ssrRenderAttr("value", unref(form).email)} required autofocus autocomplete="username">`);
      if (unref(form).errors.email) {
        _push(`<div class="text-red-400 text-sm mt-2">${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="password" class="block font-medium text-sm text-slate-300">Password</label><input id="password" type="password" class="mt-1 block w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100"${ssrRenderAttr("value", unref(form).password)} required autocomplete="current-password">`);
      if (unref(form).errors.password) {
        _push(`<div class="text-red-400 text-sm mt-2">${ssrInterpolate(unref(form).errors.password)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="block"><label class="flex items-center"><input type="checkbox" name="remember"${ssrIncludeBooleanAttr(Array.isArray(unref(form).remember) ? ssrLooseContain(unref(form).remember, null) : unref(form).remember) ? " checked" : ""} class="rounded border-slate-400/20 bg-indigo-950/50 text-cyan-400 shadow-sm focus:ring-cyan-400/50"><span class="ml-2 text-sm text-slate-400">Remember me</span></label></div><div class="flex items-center justify-end mt-4">`);
      _push(ssrRenderComponent(_sfc_main$9, {
        class: ["w-full justify-center py-4", { "opacity-25": unref(form).processing }],
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log in `);
          } else {
            return [
              createTextVNode(" Log in ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div><!--]-->`);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-indigo-950 flex" }, _attrs))}><aside class="w-64 bg-indigo-900/50 border-r border-slate-400/10 p-6 flex flex-col"><div class="text-3xl font-black tracking-wider text-slate-100 mb-12">VELT <span class="text-cyan-400 text-xs">Admin</span></div><nav class="flex-1 space-y-4">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.dashboard"),
        class: "flex items-center px-4 py-3 bg-cyan-400/10 text-cyan-400 rounded-xl font-medium transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PhSquaresFour), {
              size: 24,
              class: "mr-3",
              weight: "fill"
            }, null, _parent2, _scopeId));
            _push2(` Dashboard `);
          } else {
            return [
              createVNode(unref(PhSquaresFour), {
                size: 24,
                class: "mr-3",
                weight: "fill"
              }),
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="border-t border-slate-400/10 pt-6"><div class="text-slate-100 font-medium mb-4 px-2">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><button class="w-full flex items-center px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all">`);
      _push(ssrRenderComponent(unref(PhSignOut), {
        size: 24,
        class: "mr-3"
      }, null, _parent));
      _push(` Log Out </button></div></aside><main class="flex-1 p-8 overflow-y-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
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
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Admin Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8"${_scopeId}><h1 class="text-3xl font-bold text-slate-100"${_scopeId}>Dashboard</h1><p class="text-slate-400"${_scopeId}>Welcome back to the control center.</p></div><div class="bg-indigo-900/30 border border-slate-400/10 rounded-3xl p-8 backdrop-blur-md"${_scopeId}><h2 class="text-xl font-bold mb-4"${_scopeId}>Statut du système</h2><p class="text-slate-300"${_scopeId}>Vous êtes connecté en tant qu&#39;administrateur. Le module de gestion des projets sera bientôt disponible ici.</p></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-8" }, [
                createVNode("h1", { class: "text-3xl font-bold text-slate-100" }, "Dashboard"),
                createVNode("p", { class: "text-slate-400" }, "Welcome back to the control center.")
              ]),
              createVNode("div", { class: "bg-indigo-900/30 border border-slate-400/10 rounded-3xl p-8 backdrop-blur-md" }, [
                createVNode("h2", { class: "text-xl font-bold mb-4" }, "Statut du système"),
                createVNode("p", { class: "text-slate-300" }, "Vous êtes connecté en tant qu'administrateur. Le module de gestion des projets sera bientôt disponible ici.")
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
const _sfc_main$5 = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-indigo-950 relative overflow-hidden" }, _attrs))}><div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/50 rounded-full blur-[120px] -z-10 pointer-events-none"></div><div class="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-cyan-900/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div><nav class="py-6 px-8 flex items-center justify-between relative z-50">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "text-3xl font-black tracking-wider text-slate-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` VELT `);
          } else {
            return [
              createTextVNode(" VELT ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center space-x-8 font-medium text-sm">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("studio"),
        class: "hover:text-cyan-400 transition"
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
        class: "hover:text-cyan-400 transition"
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
        class: "hover:text-cyan-400 transition"
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
        class: "hover:text-cyan-400 transition"
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
      _push(`</div><button class="md:hidden text-slate-100 focus:outline-none">`);
      if (!showingNavigationDropdown.value) {
        _push(ssrRenderComponent(unref(PhList), { size: 32 }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(PhX), { size: 32 }, null, _parent));
      }
      _push(`</button></nav>`);
      if (showingNavigationDropdown.value) {
        _push(`<div class="md:hidden absolute top-20 inset-x-0 bg-indigo-900/95 backdrop-blur-xl p-8 z-40 flex flex-col space-y-6 border-b border-slate-400/20">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("studio"),
          class: "text-xl hover:text-cyan-400 transition"
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
          class: "text-xl hover:text-cyan-400 transition"
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
          class: "text-xl hover:text-cyan-400 transition"
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
          class: "text-xl hover:text-cyan-400 transition"
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
      _push(`</main><footer class="py-12 px-8 border-t border-indigo-900/50 text-slate-400 text-sm relative z-10 bg-indigo-950/80 backdrop-blur-md"><div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"><div><h3 class="text-slate-100 font-bold mb-4">Studio Services</h3><ul class="space-y-2"><li>UX/UI</li><li>Development</li><li>Branding</li></ul></div><div><p>© 2026 VELT — La Réunion</p></div></div></footer></div>`);
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
      message: ""
    });
    const submit = () => {
      console.log("Form submitted:", form.data());
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, {
        title: "Contactez Velt Studio La Réunion",
        description: "Parlons de votre prochain projet digital. Contactez notre équipe à La Réunion pour discuter de SaaS, développement ou design."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="pt-20 px-8 pb-32 max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16"${_scopeId}><div${_scopeId}><h1 class="text-4xl md:text-5xl font-extrabold mb-8"${_scopeId}>Let&#39;s create something <span class="text-cyan-400"${_scopeId}>extraordinary.</span></h1><p class="text-xl text-slate-400 leading-relaxed mb-12"${_scopeId}> Que vous ayez une idée de SaaS révolutionnaire ou besoin d&#39;une refonte complète de votre identité digitale, notre équipe à La Réunion est prête à vous écouter. </p><div class="space-y-8"${_scopeId}><div class="flex items-start"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhEnvelopeSimple), {
              size: 32,
              class: "text-cyan-400 mr-4 mt-1"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><h3 class="text-lg font-bold text-slate-100"${_scopeId}>Email</h3><p class="text-slate-400"${_scopeId}>hello@velt.re (Exemple)</p></div></div><div class="flex items-start"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhMapPin), {
              size: 32,
              class: "text-cyan-400 mr-4 mt-1"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><h3 class="text-lg font-bold text-slate-100"${_scopeId}>Studio</h3><p class="text-slate-400"${_scopeId}>Saint-Denis, La Réunion</p></div></div><div class="flex items-start"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhPhone), {
              size: 32,
              class: "text-cyan-400 mr-4 mt-1"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><h3 class="text-lg font-bold text-slate-100"${_scopeId}>Phone</h3><p class="text-slate-400"${_scopeId}>+262 692 00 00 00 (Exemple)</p></div></div></div></div><div class="bg-indigo-900/30 p-8 md:p-12 rounded-3xl border border-slate-400/10 backdrop-blur-md relative overflow-hidden"${_scopeId}><div class="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 blur-[100px] rounded-full -z-10 pointer-events-none"${_scopeId}></div><h2 class="text-2xl font-bold mb-8"${_scopeId}>Send us a message</h2><form class="space-y-6"${_scopeId}><div${_scopeId}><label for="name" class="block text-sm font-medium text-slate-300 mb-2"${_scopeId}>Your Name</label><input type="text" id="name"${ssrRenderAttr("value", unref(form).name)} required class="w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100 placeholder-slate-500" placeholder="John Doe"${_scopeId}></div><div${_scopeId}><label for="email" class="block text-sm font-medium text-slate-300 mb-2"${_scopeId}>Email Address</label><input type="email" id="email"${ssrRenderAttr("value", unref(form).email)} required class="w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100 placeholder-slate-500" placeholder="john@example.com"${_scopeId}></div><div${_scopeId}><label for="subject" class="block text-sm font-medium text-slate-300 mb-2"${_scopeId}>Subject</label><select id="subject" class="w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100"${_scopeId}><option value="" disabled selected${_scopeId}>Select a topic</option><option value="saas"${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "saas") : ssrLooseEqual(unref(form).subject, "saas")) ? " selected" : ""}${_scopeId}>New SaaS Project</option><option value="studio"${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "studio") : ssrLooseEqual(unref(form).subject, "studio")) ? " selected" : ""}${_scopeId}>Studio Services (UX/Dev/Branding)</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "other") : ssrLooseEqual(unref(form).subject, "other")) ? " selected" : ""}${_scopeId}>Other Inquiry</option></select></div><div${_scopeId}><label for="message" class="block text-sm font-medium text-slate-300 mb-2"${_scopeId}>Message</label><textarea id="message" rows="5" required class="w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100 placeholder-slate-500 resize-none" placeholder="Tell us about your project..."${_scopeId}>${ssrInterpolate(unref(form).message)}</textarea></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$9, {
              type: "submit",
              class: "w-full justify-center py-4 text-lg",
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Send Message `);
                } else {
                  return [
                    createTextVNode(" Send Message ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></section>`);
          } else {
            return [
              createVNode("section", { class: "pt-20 px-8 pb-32 max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16" }, [
                createVNode("div", null, [
                  createVNode("h1", { class: "text-4xl md:text-5xl font-extrabold mb-8" }, [
                    createTextVNode("Let's create something "),
                    createVNode("span", { class: "text-cyan-400" }, "extraordinary.")
                  ]),
                  createVNode("p", { class: "text-xl text-slate-400 leading-relaxed mb-12" }, " Que vous ayez une idée de SaaS révolutionnaire ou besoin d'une refonte complète de votre identité digitale, notre équipe à La Réunion est prête à vous écouter. "),
                  createVNode("div", { class: "space-y-8" }, [
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode(unref(PhEnvelopeSimple), {
                        size: 32,
                        class: "text-cyan-400 mr-4 mt-1"
                      }),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-lg font-bold text-slate-100" }, "Email"),
                        createVNode("p", { class: "text-slate-400" }, "hello@velt.re (Exemple)")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode(unref(PhMapPin), {
                        size: 32,
                        class: "text-cyan-400 mr-4 mt-1"
                      }),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-lg font-bold text-slate-100" }, "Studio"),
                        createVNode("p", { class: "text-slate-400" }, "Saint-Denis, La Réunion")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-start" }, [
                      createVNode(unref(PhPhone), {
                        size: 32,
                        class: "text-cyan-400 mr-4 mt-1"
                      }),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-lg font-bold text-slate-100" }, "Phone"),
                        createVNode("p", { class: "text-slate-400" }, "+262 692 00 00 00 (Exemple)")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-indigo-900/30 p-8 md:p-12 rounded-3xl border border-slate-400/10 backdrop-blur-md relative overflow-hidden" }, [
                  createVNode("div", { class: "absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 blur-[100px] rounded-full -z-10 pointer-events-none" }),
                  createVNode("h2", { class: "text-2xl font-bold mb-8" }, "Send us a message"),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "space-y-6"
                  }, [
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "name",
                        class: "block text-sm font-medium text-slate-300 mb-2"
                      }, "Your Name"),
                      withDirectives(createVNode("input", {
                        type: "text",
                        id: "name",
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        required: "",
                        class: "w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100 placeholder-slate-500",
                        placeholder: "John Doe"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "email",
                        class: "block text-sm font-medium text-slate-300 mb-2"
                      }, "Email Address"),
                      withDirectives(createVNode("input", {
                        type: "email",
                        id: "email",
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        required: "",
                        class: "w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100 placeholder-slate-500",
                        placeholder: "john@example.com"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).email]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "subject",
                        class: "block text-sm font-medium text-slate-300 mb-2"
                      }, "Subject"),
                      withDirectives(createVNode("select", {
                        id: "subject",
                        "onUpdate:modelValue": ($event) => unref(form).subject = $event,
                        class: "w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100"
                      }, [
                        createVNode("option", {
                          value: "",
                          disabled: "",
                          selected: ""
                        }, "Select a topic"),
                        createVNode("option", { value: "saas" }, "New SaaS Project"),
                        createVNode("option", { value: "studio" }, "Studio Services (UX/Dev/Branding)"),
                        createVNode("option", { value: "other" }, "Other Inquiry")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(form).subject]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", {
                        for: "message",
                        class: "block text-sm font-medium text-slate-300 mb-2"
                      }, "Message"),
                      withDirectives(createVNode("textarea", {
                        id: "message",
                        rows: "5",
                        "onUpdate:modelValue": ($event) => unref(form).message = $event,
                        required: "",
                        class: "w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100 placeholder-slate-500 resize-none",
                        placeholder: "Tell us about your project..."
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).message]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode(_sfc_main$9, {
                        type: "submit",
                        class: "w-full justify-center py-4 text-lg",
                        disabled: unref(form).processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Send Message ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ], 32)
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
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: { href: String },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.href ? unref(Link) : "button"), mergeProps({
        href: __props.href,
        class: "inline-flex items-center px-8 py-3 bg-transparent border-2 border-slate-400/30 rounded-full font-semibold text-slate-100 tracking-wide hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/SecondaryButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    featuredProjects: Array
  },
  setup(__props) {
    const saasProducts = [
      { title: "ReunionFlow", description: "Plateforme de gestion de flux pour les entreprises locales.", icon: PhCloudArrowUp },
      { title: "VolcanoMetrics", description: "Outil d'analyse de données temps réel.", icon: PhChartBar },
      { title: "PrimaryRouting", description: "Optimisation de trajets et logistique.", icon: PhGraph }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Studio Digital & SaaS Producter à La Réunion" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="Velt est un studio digital et créateur de produits SaaS basé à La Réunion. Où le digital prend forme."${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "Velt est un studio digital et créateur de produits SaaS basé à La Réunion. Où le digital prend forme."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="px-8 pt-20 pb-32 max-w-7xl mx-auto relative"${_scopeId}><h2 class="text-cyan-400 tracking-[0.2em] text-sm font-bold mb-4 uppercase"${_scopeId}> Where Digital Takes Form </h2><h1 class="text-5xl md:text-7xl font-extrabold text-slate-100 leading-tight mb-8"${_scopeId}> VELT STUDIO: Shaping Digital Realities in <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300"${_scopeId}>La Réunion.</span></h1><p class="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"${_scopeId}> Creating cutting-edge SaaS and bespoke digital experiences that drive innovation and growth. </p><div class="flex flex-wrap gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$9, {
              href: _ctx.route("saas")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Explore Our SaaS`);
                } else {
                  return [
                    createTextVNode("Explore Our SaaS")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              href: _ctx.route("contact")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Discuss Your Project`);
                } else {
                  return [
                    createTextVNode("Discuss Your Project")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="absolute right-[-10%] top-1/2 -translate-y-1/2 md:opacity-80 opacity-40 pointer-events-none z-[-1] w-[800px] lg:w-[1000px] h-auto mix-blend-screen"${_scopeId}><img src="/images/reunion-wireframe.svg" alt="La Réunion Digital Map" class="w-full h-full"${_scopeId}></div></section><section class="px-8 py-24 max-w-7xl mx-auto relative z-10"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(saasProducts, (product, index) => {
              _push2(`<div class="group p-8 rounded-3xl bg-indigo-900/40 border border-slate-400/10 backdrop-blur-md hover:bg-indigo-900/60 hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden"${_scopeId}><div class="absolute inset-0 bg-gradient-radial-top from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"${_scopeId}></div><div class="w-16 h-16 bg-indigo-950 rounded-2xl flex items-center justify-center mb-6 border border-slate-400/20 group-hover:border-cyan-400/50 transition-colors"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(product.icon), {
                size: 32,
                weight: "fill",
                class: "text-cyan-400"
              }, null), _parent2, _scopeId);
              _push2(`</div><h3 class="text-2xl font-bold mb-4"${_scopeId}>${ssrInterpolate(product.title)}</h3><p class="text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(product.description)} <span class="block mt-2 opacity-70 text-sm"${_scopeId}>Immersive proactive for datasets, operational runway.</span></p></div>`);
            });
            _push2(`<!--]--></div></section><section class="px-8 py-24 max-w-7xl mx-auto"${_scopeId}><h2 class="text-4xl font-bold mb-16"${_scopeId}>Studio Services</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-12"${_scopeId}><div${_scopeId}><div class="flex items-center mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhDeviceMobile), {
              size: 32,
              weight: "fill",
              class: "text-cyan-400 mr-4"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-2xl font-bold"${_scopeId}>UX/UI</h3></div><div class="grid grid-cols-2 gap-4"${_scopeId}><img src="/images/dev-dashboard.jpeg" class="rounded-xl border border-slate-400/10 hover:border-cyan-400/50 transition-all" alt="UX Project"${_scopeId}><img src="/images/branding-book.jpeg" class="rounded-xl border border-slate-400/10 hover:border-cyan-400/50 transition-all" alt="UI Project"${_scopeId}></div></div><div${_scopeId}><div class="flex items-center mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCode), {
              size: 32,
              weight: "fill",
              class: "text-cyan-400 mr-4"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-2xl font-bold"${_scopeId}>Development</h3></div><div class="space-y-4"${_scopeId}><img src="/images/home-ux.jpeg" class="rounded-xl border border-slate-400/10 w-full h-48 object-cover" alt="Dev Project"${_scopeId}></div></div><div${_scopeId}><div class="flex items-center mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhMegaphone), {
              size: 32,
              weight: "fill",
              class: "text-cyan-400 mr-4"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-2xl font-bold"${_scopeId}>Branding</h3></div><div class="grid grid-cols-2 gap-4"${_scopeId}><img src="https://placehold.co/300x400/0F172A/22D3EE?text=Brand+Identity" class="rounded-xl border border-slate-400/10" alt="Branding"${_scopeId}><img src="https://placehold.co/300x400/0F172A/22D3EE?text=Logofolio" class="rounded-xl border border-slate-400/10" alt="Branding"${_scopeId}></div></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "px-8 pt-20 pb-32 max-w-7xl mx-auto relative" }, [
                createVNode("h2", { class: "text-cyan-400 tracking-[0.2em] text-sm font-bold mb-4 uppercase" }, " Where Digital Takes Form "),
                createVNode("h1", { class: "text-5xl md:text-7xl font-extrabold text-slate-100 leading-tight mb-8" }, [
                  createTextVNode(" VELT STUDIO: Shaping Digital Realities in "),
                  createVNode("span", { class: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300" }, "La Réunion.")
                ]),
                createVNode("p", { class: "text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed" }, " Creating cutting-edge SaaS and bespoke digital experiences that drive innovation and growth. "),
                createVNode("div", { class: "flex flex-wrap gap-6" }, [
                  createVNode(_sfc_main$9, {
                    href: _ctx.route("saas")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Explore Our SaaS")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(_sfc_main$3, {
                    href: _ctx.route("contact")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Discuss Your Project")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("div", { class: "absolute right-[-10%] top-1/2 -translate-y-1/2 md:opacity-80 opacity-40 pointer-events-none z-[-1] w-[800px] lg:w-[1000px] h-auto mix-blend-screen" }, [
                  createVNode("img", {
                    src: "/images/reunion-wireframe.svg",
                    alt: "La Réunion Digital Map",
                    class: "w-full h-full"
                  })
                ])
              ]),
              createVNode("section", { class: "px-8 py-24 max-w-7xl mx-auto relative z-10" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(saasProducts, (product, index) => {
                    return createVNode("div", {
                      key: index,
                      class: "group p-8 rounded-3xl bg-indigo-900/40 border border-slate-400/10 backdrop-blur-md hover:bg-indigo-900/60 hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden"
                    }, [
                      createVNode("div", { class: "absolute inset-0 bg-gradient-radial-top from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                      createVNode("div", { class: "w-16 h-16 bg-indigo-950 rounded-2xl flex items-center justify-center mb-6 border border-slate-400/20 group-hover:border-cyan-400/50 transition-colors" }, [
                        (openBlock(), createBlock(resolveDynamicComponent(product.icon), {
                          size: 32,
                          weight: "fill",
                          class: "text-cyan-400"
                        }))
                      ]),
                      createVNode("h3", { class: "text-2xl font-bold mb-4" }, toDisplayString(product.title), 1),
                      createVNode("p", { class: "text-slate-400 leading-relaxed" }, [
                        createTextVNode(toDisplayString(product.description) + " ", 1),
                        createVNode("span", { class: "block mt-2 opacity-70 text-sm" }, "Immersive proactive for datasets, operational runway.")
                      ])
                    ]);
                  }), 64))
                ])
              ]),
              createVNode("section", { class: "px-8 py-24 max-w-7xl mx-auto" }, [
                createVNode("h2", { class: "text-4xl font-bold mb-16" }, "Studio Services"),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-12" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center mb-6" }, [
                      createVNode(unref(PhDeviceMobile), {
                        size: 32,
                        weight: "fill",
                        class: "text-cyan-400 mr-4"
                      }),
                      createVNode("h3", { class: "text-2xl font-bold" }, "UX/UI")
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode("img", {
                        src: "/images/dev-dashboard.jpeg",
                        class: "rounded-xl border border-slate-400/10 hover:border-cyan-400/50 transition-all",
                        alt: "UX Project"
                      }),
                      createVNode("img", {
                        src: "/images/branding-book.jpeg",
                        class: "rounded-xl border border-slate-400/10 hover:border-cyan-400/50 transition-all",
                        alt: "UI Project"
                      })
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center mb-6" }, [
                      createVNode(unref(PhCode), {
                        size: 32,
                        weight: "fill",
                        class: "text-cyan-400 mr-4"
                      }),
                      createVNode("h3", { class: "text-2xl font-bold" }, "Development")
                    ]),
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("img", {
                        src: "/images/home-ux.jpeg",
                        class: "rounded-xl border border-slate-400/10 w-full h-48 object-cover",
                        alt: "Dev Project"
                      })
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center mb-6" }, [
                      createVNode(unref(PhMegaphone), {
                        size: 32,
                        weight: "fill",
                        class: "text-cyan-400 mr-4"
                      }),
                      createVNode("h3", { class: "text-2xl font-bold" }, "Branding")
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode("img", {
                        src: "https://placehold.co/300x400/0F172A/22D3EE?text=Brand+Identity",
                        class: "rounded-xl border border-slate-400/10",
                        alt: "Branding"
                      }),
                      createVNode("img", {
                        src: "https://placehold.co/300x400/0F172A/22D3EE?text=Logofolio",
                        class: "rounded-xl border border-slate-400/10",
                        alt: "Branding"
                      })
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
        subtitle: "Gestion de flux pour les entreprises locales.",
        description: "Une plateforme complète pour optimiser les processus opérationnels spécifiques au marché réunionnais. Connectez vos équipes, suivez vos indicateurs et gagnez en productivité.",
        features: ["Tableaux de bord temps réel", "Automatisations locales", "Support prioritaire 974", "Conformité RGPD"],
        icon: PhCloudArrowUp,
        // Placeholder pour la capture d'écran du dashboard
        image: "https://placehold.co/800x500/0F172A/22D3EE?text=ReunionFlow+Dashboard+Screen"
      },
      {
        id: "volcanometrics",
        title: "VolcanoMetrics",
        subtitle: "Analyse de données haute performance.",
        description: "Transformez vos données brutes en insights exploitables. VolcanoMetrics utilise des algorithmes avancés pour prédire les tendances et identifier les opportunités de croissance.",
        features: ["Prédictions par IA", "Connecteurs API multiples", "Rapports personnalisables", "Sécurité de niveau bancaire"],
        icon: PhChartBar,
        image: "https://placehold.co/800x500/0F172A/22D3EE?text=VolcanoMetrics+Analytics+Screen"
      },
      {
        id: "primaryrouting",
        title: "PrimaryRouting",
        subtitle: "Optimisation logistique et trajets.",
        description: "La solution ultime pour la logistique sur l'île. Réduisez vos coûts de carburant et améliorez vos temps de livraison grâce à notre moteur de calcul d'itinéraires intelligent.",
        features: ["Calcul d'itinéraires complexe", "Prise en compte du trafic", "Application mobile chauffeurs", "Tracking en direct"],
        icon: PhGraph,
        image: "https://placehold.co/800x500/0F172A/22D3EE?text=PrimaryRouting+Map+Screen"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, {
        title: "Nos Produits SaaS Innovants",
        description: "Découvrez nos solutions logicielles développées à La Réunion : ReunionFlow, VolcanoMetrics et PrimaryRouting."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="pt-20 pb-16 px-8 max-w-7xl mx-auto text-center relative z-10"${_scopeId}><h1 class="text-4xl md:text-5xl font-extrabold mb-6"${_scopeId}>OUR SAAS PRODUCTS</h1><p class="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"${_scopeId}> Creating cutting-edge SaaS and bespoke digital experiences that drive innovation and growth from La Réunion to the world. </p></section><section class="px-8 pb-32 max-w-7xl mx-auto relative z-10 space-y-32"${_scopeId}><!--[-->`);
            ssrRenderList(products, (product, index) => {
              _push2(`<div class="${ssrRenderClass([{ "lg:flex-row-reverse": index % 2 !== 0 }, "flex flex-col lg:flex-row items-center gap-16"])}"${_scopeId}><div class="flex-1 space-y-8"${_scopeId}><div class="flex items-center space-x-4"${_scopeId}><div class="w-12 h-12 bg-indigo-900/50 rounded-xl flex items-center justify-center border border-cyan-400/20"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(product.icon), {
                size: 28,
                weight: "fill",
                class: "text-cyan-400"
              }, null), _parent2, _scopeId);
              _push2(`</div><h2 class="text-3xl font-bold"${_scopeId}>${ssrInterpolate(product.title)}</h2></div><p class="text-xl text-cyan-300"${_scopeId}>${ssrInterpolate(product.subtitle)}</p><p class="text-slate-400 leading-relaxed text-lg"${_scopeId}>${ssrInterpolate(product.description)}</p><ul class="space-y-4 mt-8"${_scopeId}><!--[-->`);
              ssrRenderList(product.features, (feature) => {
                _push2(`<li class="flex items-center space-x-3"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(PhCheckCircle), {
                  size: 24,
                  weight: "fill",
                  class: "text-cyan-400 flex-shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-slate-100"${_scopeId}>${ssrInterpolate(feature)}</span></li>`);
              });
              _push2(`<!--]--></ul></div><div class="flex-1 relative group"${_scopeId}><div class="absolute inset-0 bg-cyan-400/20 blur-[80px] rounded-full group-hover:bg-cyan-400/30 transition-all duration-700 -z-10"${_scopeId}></div><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.title + " Dashboard")} class="rounded-2xl border-2 border-slate-400/10 shadow-2xl shadow-indigo-950/50 group-hover:border-cyan-400/50 group-hover:scale-[1.02] transition-all duration-500 object-cover w-full h-auto"${_scopeId}></div></div>`);
            });
            _push2(`<!--]--></section>`);
          } else {
            return [
              createVNode("section", { class: "pt-20 pb-16 px-8 max-w-7xl mx-auto text-center relative z-10" }, [
                createVNode("h1", { class: "text-4xl md:text-5xl font-extrabold mb-6" }, "OUR SAAS PRODUCTS"),
                createVNode("p", { class: "text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed" }, " Creating cutting-edge SaaS and bespoke digital experiences that drive innovation and growth from La Réunion to the world. ")
              ]),
              createVNode("section", { class: "px-8 pb-32 max-w-7xl mx-auto relative z-10 space-y-32" }, [
                (openBlock(), createBlock(Fragment, null, renderList(products, (product, index) => {
                  return createVNode("div", {
                    key: product.id,
                    class: ["flex flex-col lg:flex-row items-center gap-16", { "lg:flex-row-reverse": index % 2 !== 0 }]
                  }, [
                    createVNode("div", { class: "flex-1 space-y-8" }, [
                      createVNode("div", { class: "flex items-center space-x-4" }, [
                        createVNode("div", { class: "w-12 h-12 bg-indigo-900/50 rounded-xl flex items-center justify-center border border-cyan-400/20" }, [
                          (openBlock(), createBlock(resolveDynamicComponent(product.icon), {
                            size: 28,
                            weight: "fill",
                            class: "text-cyan-400"
                          }))
                        ]),
                        createVNode("h2", { class: "text-3xl font-bold" }, toDisplayString(product.title), 1)
                      ]),
                      createVNode("p", { class: "text-xl text-cyan-300" }, toDisplayString(product.subtitle), 1),
                      createVNode("p", { class: "text-slate-400 leading-relaxed text-lg" }, toDisplayString(product.description), 1),
                      createVNode("ul", { class: "space-y-4 mt-8" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(product.features, (feature) => {
                          return openBlock(), createBlock("li", {
                            key: feature,
                            class: "flex items-center space-x-3"
                          }, [
                            createVNode(unref(PhCheckCircle), {
                              size: 24,
                              weight: "fill",
                              class: "text-cyan-400 flex-shrink-0"
                            }),
                            createVNode("span", { class: "text-slate-100" }, toDisplayString(feature), 1)
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "flex-1 relative group" }, [
                      createVNode("div", { class: "absolute inset-0 bg-cyan-400/20 blur-[80px] rounded-full group-hover:bg-cyan-400/30 transition-all duration-700 -z-10" }),
                      createVNode("img", {
                        src: product.image,
                        alt: product.title + " Dashboard",
                        class: "rounded-2xl border-2 border-slate-400/10 shadow-2xl shadow-indigo-950/50 group-hover:border-cyan-400/50 group-hover:scale-[1.02] transition-all duration-500 object-cover w-full h-auto"
                      }, null, 8, ["src", "alt"])
                    ])
                  ], 2);
                }), 64))
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
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Studio",
  __ssrInlineRender: true,
  props: {
    // featuredProjects: Array, // À décommenter quand on liera le backend
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, {
        title: "Nos Services Studio : UX/UI, Développement, Branding",
        description: "Velt Studio transforme vos idées en réalités digitales. Expertise en design d'expérience utilisateur, développement sur-mesure et identité de marque."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="pt-20 pb-16 px-8 max-w-7xl mx-auto text-center relative z-10"${_scopeId}><h1 class="text-4xl md:text-5xl font-extrabold mb-6"${_scopeId}>OUR STUDIO SERVICES</h1><p class="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"${_scopeId}> Developing, designing and launching digital products. From concept to code, we handle the entire lifecycle. </p></section><section class="px-8 pb-32 max-w-7xl mx-auto relative z-10 space-y-24"${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"${_scopeId}><div${_scopeId}><div class="flex items-center mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhDeviceMobile), {
              size: 40,
              weight: "fill",
              class: "text-cyan-400 mr-6"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-3xl font-bold"${_scopeId}>UX/UI Design</h2></div><p class="text-slate-400 text-lg leading-relaxed mb-8"${_scopeId}> Nous créons des interfaces utilisateur intuitives et centrées sur l&#39;humain. Notre processus commence par la recherche utilisateur, passe par le wireframing et se termine par des maquettes haute-fidélité (comme celle de ce site !) qui allient esthétique et fonctionnalité. </p><h3 class="text-xl font-bold mb-4 text-slate-100"${_scopeId}>Case Studies</h3><p class="text-slate-500 italic"${_scopeId}>Projets détaillés bientôt disponibles.</p></div><div class="grid grid-cols-2 gap-6"${_scopeId}><img src="https://placehold.co/400x500/0F172A/22D3EE?text=Mobile+App+UX" class="rounded-2xl border border-slate-400/10 hover:border-cyan-400/50 transition-all shadow-lg object-cover h-full w-full" alt="UX Project 1"${_scopeId}><img src="https://placehold.co/400x500/0F172A/67E8F9?text=Web+Platform+UI" class="rounded-2xl border border-slate-400/10 hover:border-cyan-400/50 transition-all shadow-lg object-cover h-full w-full mt-12" alt="UX Project 2"${_scopeId}></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:flex-row-reverse"${_scopeId}><div class="lg:order-2"${_scopeId}><div class="flex items-center mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhCode), {
              size: 40,
              weight: "fill",
              class: "text-cyan-400 mr-6"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-3xl font-bold"${_scopeId}>Development</h2></div><p class="text-slate-400 text-lg leading-relaxed mb-8"${_scopeId}> Experts en architectures modernes (Laravel, Vue.js, React), nous développons des applications web et mobiles robustes, scalables et sécurisées. Nous transformons les designs complexes en code performant, optimisé pour le SEO et la rapidité. </p><h3 class="text-xl font-bold mb-4 text-slate-100"${_scopeId}>Process</h3><p class="text-slate-400"${_scopeId}>Agile methodology, CI/CD pipelines, Code reviews, Automated testing.</p></div><div class="lg:order-1 relative group"${_scopeId}><div class="absolute inset-0 bg-cyan-400/10 blur-[60px] rounded-full group-hover:bg-cyan-400/20 transition-all duration-700 -z-10"${_scopeId}></div><img src="https://placehold.co/800x600/0F172A/22D3EE?text=Complex+Admin+Dashboard+Dev" class="rounded-2xl border border-slate-400/10 shadow-2xl hover:border-cyan-400/50 transition-all object-cover w-full h-auto" alt="Dev Project"${_scopeId}></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"${_scopeId}><div${_scopeId}><div class="flex items-center mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PhMegaphone), {
              size: 40,
              weight: "fill",
              class: "text-cyan-400 mr-6"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-3xl font-bold"${_scopeId}>Branding &amp; Identity</h2></div><p class="text-slate-400 text-lg leading-relaxed mb-8"${_scopeId}> Une présence digitale forte commence par une marque forte. Nous forgeons des identités visuelles mémorables : logos, chartes graphiques, typographies et guidelines qui racontent l&#39;histoire de votre entreprise et résonnent avec votre audience. </p></div><div class="grid grid-cols-2 gap-6 relative"${_scopeId}><div class="col-span-2 relative group z-10"${_scopeId}><img src="https://placehold.co/800x400/0F172A/22D3EE?text=Velt+Brand+Guidelines+Book" class="rounded-2xl border border-slate-400/10 shadow-lg hover:border-cyan-400/50 transition-all object-cover w-full h-auto" alt="Branding Highlight"${_scopeId}></div><img src="https://placehold.co/400x300/0F172A/67E8F9?text=Logofolio+Set" class="rounded-2xl border border-slate-400/10 shadow hover:border-cyan-400/50 transition-all object-cover h-full w-full" alt="Brand Project 1"${_scopeId}><img src="https://placehold.co/400x300/0F172A/22D3EE?text=Stationery+Design" class="rounded-2xl border border-slate-400/10 shadow hover:border-cyan-400/50 transition-all object-cover h-full w-full" alt="Brand Project 2"${_scopeId}></div></div></section><section class="px-8 pb-32 text-center relative z-10"${_scopeId}><h2 class="text-3xl font-bold mb-8"${_scopeId}>Have a project in mind?</h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("contact"),
              class: "inline-flex items-center px-8 py-4 bg-cyan-400 rounded-full font-bold text-indigo-950 hover:bg-cyan-300 hover:shadow-glow-cyan transition-all group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Start a conversation `);
                  _push3(ssrRenderComponent(unref(PhArrowRight), {
                    class: "ml-3 group-hover:translate-x-1 transition-transform",
                    weight: "bold"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Start a conversation "),
                    createVNode(unref(PhArrowRight), {
                      class: "ml-3 group-hover:translate-x-1 transition-transform",
                      weight: "bold"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", { class: "pt-20 pb-16 px-8 max-w-7xl mx-auto text-center relative z-10" }, [
                createVNode("h1", { class: "text-4xl md:text-5xl font-extrabold mb-6" }, "OUR STUDIO SERVICES"),
                createVNode("p", { class: "text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed" }, " Developing, designing and launching digital products. From concept to code, we handle the entire lifecycle. ")
              ]),
              createVNode("section", { class: "px-8 pb-32 max-w-7xl mx-auto relative z-10 space-y-24" }, [
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center mb-6" }, [
                      createVNode(unref(PhDeviceMobile), {
                        size: 40,
                        weight: "fill",
                        class: "text-cyan-400 mr-6"
                      }),
                      createVNode("h2", { class: "text-3xl font-bold" }, "UX/UI Design")
                    ]),
                    createVNode("p", { class: "text-slate-400 text-lg leading-relaxed mb-8" }, " Nous créons des interfaces utilisateur intuitives et centrées sur l'humain. Notre processus commence par la recherche utilisateur, passe par le wireframing et se termine par des maquettes haute-fidélité (comme celle de ce site !) qui allient esthétique et fonctionnalité. "),
                    createVNode("h3", { class: "text-xl font-bold mb-4 text-slate-100" }, "Case Studies"),
                    createVNode("p", { class: "text-slate-500 italic" }, "Projets détaillés bientôt disponibles.")
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 gap-6" }, [
                    createVNode("img", {
                      src: "https://placehold.co/400x500/0F172A/22D3EE?text=Mobile+App+UX",
                      class: "rounded-2xl border border-slate-400/10 hover:border-cyan-400/50 transition-all shadow-lg object-cover h-full w-full",
                      alt: "UX Project 1"
                    }),
                    createVNode("img", {
                      src: "https://placehold.co/400x500/0F172A/67E8F9?text=Web+Platform+UI",
                      class: "rounded-2xl border border-slate-400/10 hover:border-cyan-400/50 transition-all shadow-lg object-cover h-full w-full mt-12",
                      alt: "UX Project 2"
                    })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:flex-row-reverse" }, [
                  createVNode("div", { class: "lg:order-2" }, [
                    createVNode("div", { class: "flex items-center mb-6" }, [
                      createVNode(unref(PhCode), {
                        size: 40,
                        weight: "fill",
                        class: "text-cyan-400 mr-6"
                      }),
                      createVNode("h2", { class: "text-3xl font-bold" }, "Development")
                    ]),
                    createVNode("p", { class: "text-slate-400 text-lg leading-relaxed mb-8" }, " Experts en architectures modernes (Laravel, Vue.js, React), nous développons des applications web et mobiles robustes, scalables et sécurisées. Nous transformons les designs complexes en code performant, optimisé pour le SEO et la rapidité. "),
                    createVNode("h3", { class: "text-xl font-bold mb-4 text-slate-100" }, "Process"),
                    createVNode("p", { class: "text-slate-400" }, "Agile methodology, CI/CD pipelines, Code reviews, Automated testing.")
                  ]),
                  createVNode("div", { class: "lg:order-1 relative group" }, [
                    createVNode("div", { class: "absolute inset-0 bg-cyan-400/10 blur-[60px] rounded-full group-hover:bg-cyan-400/20 transition-all duration-700 -z-10" }),
                    createVNode("img", {
                      src: "https://placehold.co/800x600/0F172A/22D3EE?text=Complex+Admin+Dashboard+Dev",
                      class: "rounded-2xl border border-slate-400/10 shadow-2xl hover:border-cyan-400/50 transition-all object-cover w-full h-auto",
                      alt: "Dev Project"
                    })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center mb-6" }, [
                      createVNode(unref(PhMegaphone), {
                        size: 40,
                        weight: "fill",
                        class: "text-cyan-400 mr-6"
                      }),
                      createVNode("h2", { class: "text-3xl font-bold" }, "Branding & Identity")
                    ]),
                    createVNode("p", { class: "text-slate-400 text-lg leading-relaxed mb-8" }, " Une présence digitale forte commence par une marque forte. Nous forgeons des identités visuelles mémorables : logos, chartes graphiques, typographies et guidelines qui racontent l'histoire de votre entreprise et résonnent avec votre audience. ")
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 gap-6 relative" }, [
                    createVNode("div", { class: "col-span-2 relative group z-10" }, [
                      createVNode("img", {
                        src: "https://placehold.co/800x400/0F172A/22D3EE?text=Velt+Brand+Guidelines+Book",
                        class: "rounded-2xl border border-slate-400/10 shadow-lg hover:border-cyan-400/50 transition-all object-cover w-full h-auto",
                        alt: "Branding Highlight"
                      })
                    ]),
                    createVNode("img", {
                      src: "https://placehold.co/400x300/0F172A/67E8F9?text=Logofolio+Set",
                      class: "rounded-2xl border border-slate-400/10 shadow hover:border-cyan-400/50 transition-all object-cover h-full w-full",
                      alt: "Brand Project 1"
                    }),
                    createVNode("img", {
                      src: "https://placehold.co/400x300/0F172A/22D3EE?text=Stationery+Design",
                      class: "rounded-2xl border border-slate-400/10 shadow hover:border-cyan-400/50 transition-all object-cover h-full w-full",
                      alt: "Brand Project 2"
                    })
                  ])
                ])
              ]),
              createVNode("section", { class: "px-8 pb-32 text-center relative z-10" }, [
                createVNode("h2", { class: "text-3xl font-bold mb-8" }, "Have a project in mind?"),
                createVNode(unref(Link), {
                  href: _ctx.route("contact"),
                  class: "inline-flex items-center px-8 py-4 bg-cyan-400 rounded-full font-bold text-indigo-950 hover:bg-cyan-300 hover:shadow-glow-cyan transition-all group"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Start a conversation "),
                    createVNode(unref(PhArrowRight), {
                      class: "ml-3 group-hover:translate-x-1 transition-transform",
                      weight: "bold"
                    })
                  ]),
                  _: 1
                }, 8, ["href"])
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
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const Ziggy = { "url": "http://localhost", "port": null, "defaults": {}, "routes": { "login": { "uri": "login", "methods": ["GET", "HEAD"] }, "login.store": { "uri": "login", "methods": ["POST"] }, "logout": { "uri": "logout", "methods": ["POST"] }, "password.request": { "uri": "forgot-password", "methods": ["GET", "HEAD"] }, "password.reset": { "uri": "reset-password/{token}", "methods": ["GET", "HEAD"], "parameters": ["token"] }, "password.email": { "uri": "forgot-password", "methods": ["POST"] }, "password.update": { "uri": "reset-password", "methods": ["POST"] }, "register": { "uri": "register", "methods": ["GET", "HEAD"] }, "register.store": { "uri": "register", "methods": ["POST"] }, "user-profile-information.update": { "uri": "user/profile-information", "methods": ["PUT"] }, "user-password.update": { "uri": "user/password", "methods": ["PUT"] }, "password.confirm": { "uri": "user/confirm-password", "methods": ["GET", "HEAD"] }, "password.confirmation": { "uri": "user/confirmed-password-status", "methods": ["GET", "HEAD"] }, "password.confirm.store": { "uri": "user/confirm-password", "methods": ["POST"] }, "two-factor.login": { "uri": "two-factor-challenge", "methods": ["GET", "HEAD"] }, "two-factor.login.store": { "uri": "two-factor-challenge", "methods": ["POST"] }, "two-factor.enable": { "uri": "user/two-factor-authentication", "methods": ["POST"] }, "two-factor.confirm": { "uri": "user/confirmed-two-factor-authentication", "methods": ["POST"] }, "two-factor.disable": { "uri": "user/two-factor-authentication", "methods": ["DELETE"] }, "two-factor.qr-code": { "uri": "user/two-factor-qr-code", "methods": ["GET", "HEAD"] }, "two-factor.secret-key": { "uri": "user/two-factor-secret-key", "methods": ["GET", "HEAD"] }, "two-factor.recovery-codes": { "uri": "user/two-factor-recovery-codes", "methods": ["GET", "HEAD"] }, "two-factor.regenerate-recovery-codes": { "uri": "user/two-factor-recovery-codes", "methods": ["POST"] }, "home": { "uri": "/", "methods": ["GET", "HEAD"] }, "studio": { "uri": "studio", "methods": ["GET", "HEAD"] }, "saas": { "uri": "saas-products", "methods": ["GET", "HEAD"] }, "contact": { "uri": "contact", "methods": ["GET", "HEAD"] }, "admin.dashboard": { "uri": "admin/dashboard", "methods": ["GET", "HEAD"] }, "storage.local": { "uri": "storage/{path}", "methods": ["GET", "HEAD"], "wheres": { "path": ".*" }, "parameters": ["path"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - Velt`,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Admin/Auth/Login.vue": __vite_glob_0_0, "./Pages/Admin/Dashboard.vue": __vite_glob_0_1, "./Pages/Contact.vue": __vite_glob_0_2, "./Pages/Home.vue": __vite_glob_0_3, "./Pages/Saas.vue": __vite_glob_0_4, "./Pages/Studio.vue": __vite_glob_0_5 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin).use(ZiggyVue, Ziggy);
    }
  })
);
