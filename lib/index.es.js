const s = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, c] of e)
    n[o] = c;
  return n;
}, a = {
  name: "DemoPage"
};
function r(t, e, n, o, c, m) {
  return " 测试组件 ";
}
const _ = /* @__PURE__ */ s(a, [["render", r]]), p = [_], f = (t) => {
  p.map((e) => {
    t.component(e.__name, e);
  });
};
export {
  f as default
};
