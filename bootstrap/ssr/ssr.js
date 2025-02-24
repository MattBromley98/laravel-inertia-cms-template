import "clsx";
import createServer from "@inertiajs/core/server";
import { router, setupProgress } from "@inertiajs/core";
import escape from "html-escape";
import "lodash/cloneDeep.js";
import "lodash/isEqual.js";
const HYDRATION_START = "[";
const HYDRATION_END = "]";
const noop = () => {
};
function is_promise(value) {
  return typeof (value == null ? void 0 : value.then) === "function";
}
function fallback(value, fallback2, lazy = false) {
  return value === void 0 ? lazy ? (
    /** @type {() => V} */
    fallback2()
  ) : (
    /** @type {V} */
    fallback2
  ) : value;
}
var current_component = null;
function push(fn) {
  current_component = { p: current_component, c: null, d: null };
}
function pop() {
  var component2 = (
    /** @type {Component} */
    current_component
  );
  var ondestroy = component2.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component2.p;
}
const BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
const BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
let on_destroy = [];
function props_id_generator() {
  let uid = 1;
  return () => "s" + uid++;
}
function render(component2, options = {}) {
  const uid = props_id_generator();
  const payload = {
    out: "",
    css: /* @__PURE__ */ new Set(),
    head: { title: "", out: "", css: /* @__PURE__ */ new Set(), uid },
    uid
  };
  const prev_on_destroy = on_destroy;
  on_destroy = [];
  payload.out += BLOCK_OPEN;
  if (options.context) {
    push();
    current_component.c = options.context;
  }
  component2(payload, options.props ?? {}, {}, {});
  if (options.context) {
    pop();
  }
  payload.out += BLOCK_CLOSE;
  for (const cleanup of on_destroy) cleanup();
  on_destroy = prev_on_destroy;
  let head = payload.head.out + payload.head.title;
  for (const { hash, code } of payload.css) {
    head += `<style id="${hash}">${code}</style>`;
  }
  return {
    head,
    html: payload.out,
    body: payload.out
  };
}
function spread_props(props) {
  const merged_props = {};
  let key;
  for (let i = 0; i < props.length; i++) {
    const obj = props[i];
    for (key in obj) {
      const desc = Object.getOwnPropertyDescriptor(obj, key);
      if (desc) {
        Object.defineProperty(merged_props, key, desc);
      } else {
        merged_props[key] = obj[key];
      }
    }
  }
  return merged_props;
}
function bind_props(props_parent, props_now) {
  var _a;
  for (const key in props_now) {
    const initial_value = props_parent[key];
    const value = props_now[key];
    if (initial_value === void 0 && value !== void 0 && ((_a = Object.getOwnPropertyDescriptor(props_parent, key)) == null ? void 0 : _a.set)) {
      props_parent[key] = value;
    }
  }
}
function await_block(promise, pending_fn, then_fn) {
  if (is_promise(promise)) {
    promise.then(null, noop);
  } else if (then_fn !== null) {
    then_fn(promise);
  }
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}
let component;
const loadComponent = async () => {
  component = await /* @__PURE__ */ Object.assign({ "./Blocks/Headline/Component.svelte": () => import("./assets/Component-BdJwmZo9.js") })["./Blocks/Headline/Component.svelte"]();
};
loadComponent();
function PageBuilder($$payload, $$props) {
  var _a;
  push();
  const loadComponent2 = async () => {
    if (component == null ? void 0 : component.default) {
      return;
    }
    component = await /* @__PURE__ */ Object.assign({ "./Blocks/Headline/Component.svelte": () => import("./assets/Component-BdJwmZo9.js") })["./Blocks/Headline/Component.svelte"]();
  };
  loadComponent2();
  if (typeof window === "undefined") {
    $$payload.out += "<!--[-->";
    if (component == null ? void 0 : component.default) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<!---->`;
      (_a = component == null ? void 0 : component.default) == null ? void 0 : _a.call(component, $$payload, {});
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    await_block(
      import("./assets/Component-BdJwmZo9.js"),
      () => {
      },
      (component2) => {
        var _a2;
        $$payload.out += `<!---->`;
        (_a2 = component2 == null ? void 0 : component2.default) == null ? void 0 : _a2.call(component2, $$payload, {});
        $$payload.out += `<!---->`;
      }
    );
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Index($$payload, $$props) {
  push();
  let data = $$props["data"];
  PageBuilder($$payload, { data: data == null ? void 0 : data.body });
  bind_props($$props, { data });
  pop();
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const h = (component2, propsOrChildren, childrenOrKey, key = null) => {
  const hasProps = typeof propsOrChildren === "object" && propsOrChildren !== null && !Array.isArray(propsOrChildren);
  return {
    component: component2,
    key: hasProps ? key : typeof childrenOrKey === "number" ? childrenOrKey : null,
    props: hasProps ? propsOrChildren : {},
    children: hasProps ? Array.isArray(childrenOrKey) ? childrenOrKey : childrenOrKey !== null ? [childrenOrKey] : [] : Array.isArray(propsOrChildren) ? propsOrChildren : propsOrChildren !== null ? [propsOrChildren] : []
  };
};
function Render($$payload, $$props) {
  push();
  let component2 = $$props["component"];
  let props = fallback($$props["props"], () => ({}), true);
  let children = fallback($$props["children"], () => [], true);
  let key = fallback($$props["key"], null);
  if (component2) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    {
      if (children.length > 0) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<!---->`;
        component2 == null ? void 0 : component2($$payload, spread_props([
          props,
          {
            children: ($$payload2) => {
              const each_array = ensure_array_like(children);
              $$payload2.out += `<!--[-->`;
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let child = each_array[$$index];
                Render($$payload2, spread_props([child]));
                $$payload2.out += `<!---->`;
              }
              $$payload2.out += `<!--]-->`;
            },
            $$slots: { default: true }
          }
        ]));
        $$payload.out += `<!---->`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<!---->`;
        component2 == null ? void 0 : component2($$payload, spread_props([props]));
        $$payload.out += `<!---->`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { component: component2, props, children, key });
  pop();
}
function App($$payload, $$props) {
  push();
  let initialComponent = $$props["initialComponent"];
  let initialPage = $$props["initialPage"];
  let resolveComponent = $$props["resolveComponent"];
  let component2 = initialComponent;
  let key = null;
  let page = initialPage;
  let renderProps = resolveRenderProps(component2, page, key);
  const isServer = typeof window === "undefined";
  if (!isServer) {
    router.init({
      initialPage,
      resolveComponent,
      swapComponent: async (args) => {
        component2 = args.component;
        page = args.page;
        key = args.preserveState ? key : Date.now();
        renderProps = resolveRenderProps(component2, page, key);
      }
    });
  }
  function resolveRenderProps(component22, page2, key2 = null) {
    const child = h(component22.default, page2.props, [], key2);
    const layout = component22.layout;
    return layout ? resolveLayout(layout, child, page2.props, key2) : child;
  }
  function resolveLayout(layout, child, pageProps, key2) {
    if (isLayoutFunction(layout)) {
      return layout(h, child);
    }
    if (Array.isArray(layout)) {
      return layout.slice().reverse().reduce((currentRender, layoutComponent) => h(layoutComponent, pageProps, [currentRender], key2), child);
    }
    return h(layout, pageProps, child ? [child] : [], key2);
  }
  function isLayoutFunction(layout) {
    return typeof layout === "function" && layout.length === 2 && typeof layout.prototype === "undefined";
  }
  Render($$payload, spread_props([renderProps]));
  bind_props($$props, {
    initialComponent,
    initialPage,
    resolveComponent
  });
  pop();
}
async function createInertiaApp({ id = "app", resolve, setup, progress = {}, page }) {
  const isServer = typeof window === "undefined";
  const el = isServer ? null : document.getElementById(id);
  const initialPage = page || JSON.parse((el == null ? void 0 : el.dataset.page) || "{}");
  const resolveComponent = (name) => Promise.resolve(resolve(name));
  const [initialComponent] = await Promise.all([
    resolveComponent(initialPage.component),
    router.decryptHistory().catch(() => {
    })
  ]);
  const props = { initialPage, initialComponent, resolveComponent };
  const svelteApp = setup({
    el,
    App,
    props
  });
  if (isServer) {
    const { html, head, css } = svelteApp;
    return {
      body: `<div data-server-rendered="true" id="${id}" data-page="${escape(JSON.stringify(initialPage))}">${html}</div>`,
      head: [head, css ? `<style data-vite-css>${css.code}</style>` : ""]
    };
  }
  if (progress) {
    setupProgress(progress);
  }
}
createServer(
  (page) => {
    return createInertiaApp({
      page,
      resolve: (name) => {
        const pages = /* @__PURE__ */ Object.assign({ "./Pages/Index.svelte": __vite_glob_0_0 });
        return pages[`./Pages/${name}.svelte`];
      },
      setup({ App: App2, props }) {
        return render(App2, { props });
      }
    });
  }
);
