import React from "react";

const PrivacyPolicy = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Privacy | React Tutorial</title>
        <meta name="theme-color" content="#212424" />
        <link rel="manifest" href="/assets/favicons/manifest.json" />
        <link
          rel="preload"
          href="/assets/fonts/inter-normal.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
        <link
          rel="preload"
          href="/assets/fonts/inter-semibold.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
        <style>
          {`
            @font-face {
              font-family: Inter;
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(/assets/fonts/inter-normal.woff2) format("woff2");
              unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
            }
            @font-face {
              font-family: Inter;
              font-style: normal;
              font-weight: 600;
              font-display: swap;
              src: url(/assets/fonts/inter-semibold.woff2) format("woff2");
              unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD
            }
            :root {
              --dark: #212424;
              --primary: #0097ec;
              --secondary: #ec6c24;
              --text-color: #25272a;
              --p-color: #45494f;
              --font-family: Inter, system-ui, sans-serif;
            }
            body {
              font-family: var(--font-family);
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              margin: 0;
              color: var(--text-color);
            }
            #logo {
              margin-top: 65px;
              margin-bottom: 50px;
            }
            .back {
              color: var(--p-color);
              margin-top: 20px;
            }
            .back a {
              text-decoration: none;
              color: var(--p-color);
            }
            #banner {
              color: #fff;
              background-color: var(--dark);
            }
            #banner .content {
              margin-left: auto;
              margin-right: auto;
              padding: 130px 0;
            }
            .logo-container {
              display: flex;
              align-items: center;
            }
            .logo-text {
              padding-left: 15px;
              font-weight: 800;
              font-size: 18px;
            }
            h1 {
              margin-top: 35px;
              margin-bottom: 30px;
            }
            #login-container {
              margin-top: 35px;
            }
            .container {
              max-width: 750px;
              margin: 0 auto;
            }
            p {
              color: #25272a;
              font-size: 18px;
              line-height: 30px;
            }
            a {
              color: var(--text-color);
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            @media (max-width: 800px) {
              body {
                text-align: center;
              }
              .container {
                padding: 0 15px;
              }
            }
          `}
        </style>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicons/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/assets/favicons/favicon.ico" />
        <meta
          name="google-site-verification"
          content="TxqIlUS8qKYhUraP7gy9zjOhKrgwgBmiMkQipR5b-bc"
        />
        <meta name="msvalidate.01" content="3BD9278535ABE0574373B8017C1A0787" />
        <link href="https://react-tutorial.app/privacy.html" rel="canonical" />
      </head>
      <body>
        <div id="banner">
          <div
            className="content"
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
          >
            <div className="container">
              <div>
                <a
                  href="/"
                  style={{ color: "#fff", textDecoration: "none" }}
                  className="logo-container"
                >
                  <img
                    src="assets/logo.svg"
                    width="24"
                    height="24"
                    alt="React Tutorial Logo"
                  />
                  <div className="logo-text">React Tutorial</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="back">
            <a href="/">&larr; Back</a>
          </div>
          <h1>Privacy Policy</h1>
          <p>Effective date: July 19, 2023</p>
          <p>
            Jad Joubran B.V. ("us", "we", or "our") operates the{" "}
            <a href="https://react-tutorial.app">https://react-tutorial.app</a>{" "}
            website (the "Service").
          </p>
          <p>
            This page informs you of our policies regarding the collection, use,
            and disclosure of personal data when you use our Service and the
            choices you have associated with that data. Our Privacy Policy for
            Jad Joubran B.V. is based on the{" "}
            <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/">
              Free Privacy Policy Template Website
            </a>
            .
          </p>
        </div>
        <script
          data-cfasync="false"
          src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
        ></script>
        <script>
          {`
            window.addEventListener("load", () => {
              const t = document.createElement("script");
              t.dataset.domain = "react-tutorial.app";
              t.src = "https://plausible.io/js/script.js";
              t.defer = true;
              document.body.appendChild(t);
            });
          `}
        </script>
      </body>
    </html>
  );
};

export default PrivacyPolicy;
