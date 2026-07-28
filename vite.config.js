import { defineConfig } from 'vite';

// Přidá do <html> třídu `env-development`, kterou používají vizuální ladicí
// překryvy (viz _development/_development.scss). Běží jen na dev serveru
// (`apply: 'serve'`), takže se do produkčního HTML nikdy nedostane.
const envDevelopmentClass = () => ({
  name: 'env-development-class',
  apply: 'serve',
  transformIndexHtml: (html) =>
    html.replace(/<html\b([^>]*)>/i, (tag, attrs) =>
      /\bclass\s*=/i.test(attrs)
        ? tag.replace(/class\s*=\s*"([^"]*)"/i, 'class="$1 env-development"')
        : `<html${attrs} class="env-development">`,
    ),
});

export default defineConfig(({ mode }) => ({
  plugins: [envDevelopmentClass()],
  css: {
    preprocessorOptions: {
      scss: {
        // Moderní Sass API (bez ní Vite používá zastaralé legacy JS API)
        api: 'modern-compiler',
        // Prostrčí režim buildu do Sassu jako $env (viz main.scss).
        // Injektuje se pouze do vstupních souborů, které zpracovává Vite
        // (main.scss) – ne do partials načtených přes meta.load-css.
        additionalData: `$env: ${mode === 'production' ? 'prod' : 'dev'};\n`,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
}));
