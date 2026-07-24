# Modern SCSS Skeleton

Moderní, produkčně laděná **SCSS kostra** pro rychlý start webových projektů. Kombinuje osvědčený CSS reset s promyšlenou strukturou souborů, kaskádovými vrstvami (`@layer`) a sadou vývojářských pomůcek — abyste nezačínali od nuly a přitom měli plnou kontrolu nad výsledným stylem.

## Co to je

Skeleton není hotová vizuální šablona, ale **základ (foundation)**, na kterém stavíte vlastní design. Vyrovnává rozdíly mezi prohlížeči, nastavuje rozumné výchozí hodnoty a připravuje architekturu, do které jen doplňujete komponenty a stránky.

Vychází z destilace toho nejlepšího z předních moderních CSS resetů a normalizací (viz [Zdroje](#zdroje-a-inspirace)) — od minimalistických resetů přes normalize/sanitize přístup až po opravy konkrétních chyb prohlížečů.

## Klíčové vlastnosti

- **Moderní CSS reset** — sjednocuje chování napříč prohlížeči, odstraňuje nechtěné výchozí odsazení a nastavuje předvídatelný `box-sizing`, plynulé zalamování textu, přístupné výchozí hodnoty a respektování uživatelských preferencí (`prefers-reduced-motion`, `text-size-adjust` apod.).
- **Kaskádové vrstvy (`@layer`)** — jasně definované pořadí `base, layout, components, pages, vendors, development`, které eliminuje válku o specificitu a udržuje styly předvídatelné.
- **Modulární SCSS struktura** — logicky rozdělené složky (`_abstracts`, `_base`, `_layout`, `_components`, `_pages`, `_vendors`, `_development`) skládané přes `@use` / `meta.load-css`.
- **Vývojářské nástroje** — vestavěné pomůcky pro ladění: debug grid, RWD identifikátor breakpointů, kontrola přístupnosti a další (vrstva `development`, snadno vypnutelná pro produkci).
- **Tisková verze** — samostatný `print.scss` s optimalizací pro tisk.
- **Připravená typografie, formuláře, tabulky, tlačítka, obrázky, seznamy a grid** — rozumné a rozšiřitelné výchozí styly.

## Struktura projektu

```
main.scss            # vstupní bod – definice vrstev a načtení modulů
print.scss           # styly pro tisk
_abstracts/          # proměnné, mixiny (nic negeneruje CSS)
_base/               # reset, typografie, formuláře, tabulky, grid, utility…
_layout/             # rozvržení stránky (skip-link…)
_components/         # znovupoužitelné komponenty (modal, wysiwyg, tinymce…)
_pages/              # styly specifické pro jednotlivé stránky
_vendors/            # styly třetích stran
_development/        # ladicí nástroje (debug grid, RWD identifier, a11y…)
```

## Filosofie

- **Modern-first** — cílí na aktuální prohlížeče a moderní CSS (kaskádové vrstvy, logické vlastnosti, moderní jednotky), místo vlečení historické zátěže.
- **Rozumné výchozí hodnoty, žádný vnucený vzhled** — reset odstraní nekonzistence, ale nechává designová rozhodnutí na vás.
- **Přístupnost a UX jako standard** — respektování uživatelských preferencí a přístupné výchozí chování jsou zabudované, ne dodatečné.
- **Předvídatelnost** — díky vrstvám a čisté struktuře snadno dohledáte a přepíšete cokoli.

## Zdroje a inspirace

Skeleton stojí na ramenou komunitních CSS resetů a normalizací.

- [Manuel Matuzović](https://fokus.dev/tools/uaplus/)
- [Andy Bell](https://piccalil.li/blog/a-more-modern-css-reset/)
- [Elad Shechter](https://elad.medium.com/the-new-css-reset-53f41f13282e)
- [Elly Loel](https://www.ellyloel.com/modern-css-reset/)
- [Eric Meyer](https://meyerweb.com/eric/tools/css/reset/)
- [Josh Comeau](https://www.joshwcomeau.com/css/custom-css-reset/)
- [Keith J. Grant](https://keithjgrant.com/posts/2024/01/my-css-resets/)
- [Kilian Valkhof](https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/)
- [Mayank](https://github.com/mayank99/reset.css)
- [Nicolas Gallagher](https://github.com/necolas/normalize.css/)
- [reboot.css](https://github.com/twbs/bootstrap/blob/main/scss/_reboot.scss)
- [sanitize.css](https://github.com/csstools/sanitize.css)
- [Jake Lazaroff](https://jakelazaroff.com/words/my-modern-css-reset/)
- [Jen Simmons](https://github.com/jensimmons/cssremedy)
- [Dan Cătălin Burzo](https://danburzo.ro/snippets/css-reset/)
- [David Bushell](https://dbushell.com/2025/09/12/css-reset/)
- [Jens Oliver Meiert](https://meiert.com/blog/a-minimal-css-starter/)
- [Paweł Grzybek](https://pawelgrzybek.com/the-css-reset-again/)
- [Mike Mai](https://mikemai.net)
- [Zell Liew](https://zellwk.com/blog/css-reset/)

---

**Verze:** 1.0.0 · **Autor:** Karel Müller
