import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon/32.png" type="image/png" sizes="32x32"/>
          <link rel="icon" href="/favicon/16.png" type="image/png" sizes="16x16"/>
          <link rel="icon" href="/favicon/48.png" type="image/png" sizes="48x48"/>
          <link rel="icon" href="/favicon/svg" type="image/svg+xml" sizes="any"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument