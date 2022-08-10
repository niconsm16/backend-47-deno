import ReactDOM from "https://deno.land/x/react_deno@17.0.2/dom_server.ts";
import { contentTypeFilter, createApp } from "https://deno.land/x/servest@v1.3.4/mod.ts";
import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { App } from './public/app.tsx';


const app = createApp();

let colors: string[] = [ 'green', 'orange' ];


app.post('/', async (req) => {
    console.log('ELPOST');
    const data = await req.formData()
    const color = data.value('color') as string;
    colors = [ ...colors, color ]
    req.redirect('/');
})
app.get('/', async (req) => {
    await req.respond({
        status: 200,
        headers: new Headers({ "content-type": "text/html" }),
        body: ReactDOM.renderToString(<App colors={colors} />)
    })

})

app.listen({ port: 8080 });