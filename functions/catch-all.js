export async function onRequest(context) {
    // Try to serve the request as a static file first
    try {
      return await context.next();
    } catch (e) {
      // If that fails (e.g., it's a React route like /portfolio), serve index.html
      const url = new URL(context.request.url);
      const indexUrl = url.origin + "/index.html";
      return fetch(indexUrl);
    }
  }