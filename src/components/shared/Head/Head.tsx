import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      <title>MineCraft</title>
      <title>MineCraft | Dine with a small bunch of strangers</title>
      <meta
        name="description"
        content="An app that gives you a seat to meet, connect, and bond face to face over the most prestigious setting of all. A Table."
      />
      <meta property="og:title" content="MineCraft" />
      <meta
        property="og:description"
        content="An app that gives you a seat to meet, connect, and bond face to face over the most prestigious setting of all. A Table."
      />
      <meta
        property="og:image"
        content="https://kwad.in/MineCraft/img/MineCraftog.jpg"
      />
      <meta property="twitter:title" content="MineCraft" />
      <meta
        property="twitter:description"
        content="An app that gives you a seat to meet, connect, and bond face to face over the most prestigious setting of all. A Table."
      />
      <meta
        property="twitter:image"
        content="https://kwad.in/MineCraft/img/MineCraftog.jpg"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="generator" content="Webflow" />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link
        href="https://fonts.gstatic.com"
        rel="preconnect"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};

export default Head;
