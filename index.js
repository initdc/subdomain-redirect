const code = 302

async function handleRequest(request) {
  const host = request.headers.get('host')
  console.log(host)

  const found = host.split(".")[0]
  
  console.log(found)

  const value = await SUB.get(found)
  if (value === null) {
    return new Response("Value not found", {status: 404})
  }
  // console.log(value)

  return Response.redirect(value, code)
}

addEventListener("fetch", (event) => {
    event.respondWith(
        handleRequest(event.request).catch(
            (err) => new Response(err.stack, { status: 500 })
        )
    );
});
