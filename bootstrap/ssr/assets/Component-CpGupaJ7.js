import { f as fallback, s as stringify, b as bind_props, p as pop, a as push } from "../ssr.js";
import "clsx";
import "@inertiajs/core/server";
import "@inertiajs/core";
import "html-escape";
import "lodash/cloneDeep.js";
import "lodash/isEqual.js";
const ATTR_REGEX = /[&"<]/g;
const CONTENT_REGEX = /[&<]/g;
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped + str.substring(last);
}
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Component($$payload, $$props) {
  push();
  let data = fallback($$props["data"], () => ({}), true);
  console.log(data);
  $$payload.out += `<div class="container mx-auto text-center"><h1${attr("style", `color: ${stringify(data == null ? void 0 : data.primary_colour)}`)}>${escape_html(data == null ? void 0 : data.primary_text)}</h1> <h1${attr("style", `color: ${stringify(data == null ? void 0 : data.secondary_colour)}`)}>${escape_html(data == null ? void 0 : data.secondary_text)}</h1></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  Component as default
};
