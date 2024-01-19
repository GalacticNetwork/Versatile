self.__uv$config = {
  prefix: "/versat/",
  bare: "https://bare2.mysticmath.workers.dev/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/mathhelp/geometry.js",
  bundle: "/mathhelp/algebra.js",
  config: "/mathhelp/calculus.js",
  sw: "/mathhelp/triginometry.js",
};
