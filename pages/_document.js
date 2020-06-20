import Document ,{Head ,Main, NextScript} from 'next/document';


class MyDocument extends Document{
    render(){
        return(
            <html lang="en">
                <Head>
                    <meta name="description" content="Portfolio"/>
                    <meta charSet="utf-8"/>
                    <meta name="robots" content="noindex, nofollow"/>
                    <meta name="viewport" content="width=device-width"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>{`
                    body{
                        font-family: 'Open Sans', sans-serif;
                    }
                `}</style>
            </html>
        )
    }
}
export default MyDocument;