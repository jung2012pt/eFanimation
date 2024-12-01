// export default {
//   async fetch(request: Request, env: Env): Promise<Response> {
//     const key = "example-key";
//     const value = await env.MY_KV_NAMESPACE.get(key);
//     return new Response(value || "No value found", { status: 200 });
//   },
// };

// interface Env {
//   MY_KV_NAMESPACE: KVNamespace;
// }