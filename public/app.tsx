import React from "https://deno.land/x/react_deno@17.0.2/react.ts";


type Props = {
    colors: string[]
}

export const App = (Props: Props) => {

    const { colors } = Props

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Colores</title>
            </head>
            <body className="bg-dark text-white">

                <form action="/" method="POST" className="m-4 d-flex align-middle">
                    <label htmlFor="color" className="font-weight-bold h3 pr-2">Ingrese un color en inglés</label>
                    <input className="mx-2" id="color" name="color" type="text" />
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>

                <ul>
                    {colors.map((color: string) => (
                        <li
                            className="h3 font-weight-bold"
                            style={{
                                color: `${color}`
                            }}>
                            {color}
                        </li>
                    ))}
                </ul>

            </body>
        </html >
    )
}
