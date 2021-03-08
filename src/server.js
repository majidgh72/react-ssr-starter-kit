import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { Helmet } from "react-helmet";
import { createFrontloadState, frontloadServerRender } from 'react-frontload';
import i18n from 'Configs/i18n';
import { I18nextProvider } from 'react-i18next';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    const context = {};
    const frontloadState = createFrontloadState.server({
      context: context
    });

    const helmet = Helmet.renderStatic();

    const { rendered, data } = await frontloadServerRender({
      frontloadState,
      render: () => renderToString(
        <StaticRouter context={context} location={req.url}>
          <I18nextProvider i18n={i18n}>
            <App frontloadState={frontloadState} />
          </I18nextProvider>
        </StaticRouter>
      )
    });

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
        <html lang="fa-IR" dir="rtl">
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charset="utf-8" />
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${
              assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ''
            }
            ${
              process.env.NODE_ENV === 'production'
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${assets.client.js}" defer crossorigin></script>`
            }
        </head>
        <body>
            <div id="root">${rendered}</div>
            <script>window._clientData=${JSON.stringify(data)}</script>
        </body>
        </html>`
      );
    }
  });

export default server;
