function s(u, c, i, r, o, a, t) {
  try {
    var e = u[a](t), n = e.value;
  } catch (f) {
    return void i(f);
  }
  e.done ? c(n) : Promise.resolve(n).then(r, o);
}
function v(u) {
  return function() {
    var c = this, i = arguments;
    return new Promise(function(r, o) {
      var a = u.apply(c, i);
      function t(n) {
        s(a, r, o, t, e, "next", n);
      }
      function e(n) {
        s(a, r, o, t, e, "throw", n);
      }
      t(void 0);
    });
  };
}
export {
  v as default
};
