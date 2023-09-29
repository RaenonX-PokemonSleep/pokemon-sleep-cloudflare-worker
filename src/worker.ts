// https://developers.cloudflare.com/fundamentals/get-started/basic-tasks/maintenance-mode/

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
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const html = `<!DOCTYPE html>
          <body>
            <h1>維護中 / Under Maintenance</h1>
            <p>網站維護中，預計於 2023/09/29 12:45 PM (UTC +8) 結束。</p>
            <p>The website is under maintenance. Scheduled end time is Sep 28 11:45 PM (UTC -5).</p>
            <p>加入<a href="https://discord.gg/eeveesleep">我們的 Discord</a> 以獲得最新遊戲及網站更新訊息！</p>
            <p>Join <a href="https://discord.gg/eeveesleep">our Discord</a> for latest website and in-game updates!</p>
          </body>`;

      return new Response(html, {
        headers: {
          "content-type": "text/html;charset=UTF-8",
        },
      });
	},
};
