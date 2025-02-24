import "clsx";
function Component($$payload) {
  console.log("INIT");
  $$payload.out += `<div class="w-full">Test Component</div>`;
}
export {
  Component as default
};
