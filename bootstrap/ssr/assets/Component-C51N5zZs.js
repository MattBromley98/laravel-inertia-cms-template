import "clsx";
function Component($$payload) {
  console.log("INIT");
  $$payload.out += `<div class="ds space-y-md pb-md"><div class="space-y-md container"><nav aria-label="Breadcrumb" class="ds-breadcrumb"><ol><li><a href="/ds/">Cauldron Design System</a></li> <li>/ Blocks</li> <li aria-current="page">/ Text</li></ol></nav> <div class="prose"><h1>Text</h1></div></div></div>`;
}
export {
  Component as default
};
