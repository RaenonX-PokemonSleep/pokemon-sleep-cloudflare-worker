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
	fetch: async (request: Request, env: Env, ctx: ExecutionContext): Promise<Response> => {
		const html = `
			<!DOCTYPE html>
			<body>
				<h1>伺服器升級中 / Server Upgrade in progress</h1>
				<p>加入<a href="https://discord.gg/eeveesleep">我們的 Discord</a> 以獲得最新遊戲及網站更新訊息！</p>
				<p>Join <a href="https://discord.gg/eeveesleep">our Discord</a> for the latest website and in-game updates!</p>
			</body>
		`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	}
};
