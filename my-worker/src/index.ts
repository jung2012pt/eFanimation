/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler deploy src/index.ts --name my-worker` to deploy your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
}

export interface Env {
  MY_D1_DB: D1Database;
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins
    headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    headers.set('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS preflight request for CORS
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    const key = url.pathname.split("/")[1]; // Extract key from URL path
    const body:any = await req.json();

    if (req.method === 'PUT') {
      try {
        const value = body.value;

        // Store the value in D1 database (replace "table_name" with your table)
        const query = `INSERT INTO your_table_name (key, value) VALUES (?, ?) ON DUPLICATE KEY UPDATE value = ?`;
        await env.MY_D1_DB.prepare(query)
          .bind(key, value, value)
          .run();

        return new Response('Stored successfully', { status: 200, headers });
      } catch (error: any) {
        return new Response('Error: ' + error.message, { status: 500, headers });
      }
    }

    if (req.method === 'GET') {
      try {
        // Retrieve the value from D1 database
        const query = `SELECT value FROM your_table_name WHERE key = ?`;
        const result:any = await env.MY_D1_DB.prepare(query)
          .bind(key)
          .all();

        if (result.length === 0) {
          return new Response('Key not found', { status: 404, headers });
        }

        return new Response(JSON.stringify(result[0]), { status: 200, headers });
      } catch (error: any) {
        return new Response('Error: ' + error.message, { status: 500, headers });
      }
    }

    return new Response('Method Not Allowed', { status: 405, headers });
  }
};
