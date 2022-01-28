function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style:none;
        }
  
        body {
          font-family: sans-serif;
  
        }
      `}</style>
    );
  }

export default function CustomApp({ Component, pageProps })
 {
    return(
    <> 
    <GlobalStyle />
    <Component {...pageProps} /> 
   </>
   );
  }