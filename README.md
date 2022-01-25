# issuer

This is a small javascript library which adds a problem submission form to a website.
The form uses a [pipedream workflow][PIPEDREAM] to handle calling the GitHub issue API. If you wish to use this code for your organisation, you will need to make a copy of this workflow.

[PIPEDREAM]: https://pipedream.com/@open-innovations/issue-handler-p_6lCMPKQ

## Adding `issuer` to a website

To add the form to your website, include the following lines to your `html` header.

```html
<script defer src="//cdn.jsdelivr.net/gh/open-innovations/issuer/lib/issuer.js"></script>
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/open-innovations/issuer/lib/issuer.css"/>
```

Initialise the form with the following script

```html
<script>
  // Attach the issue form component passing the required config
  addEventListener('DOMContentLoaded', function () {
    oi.issuer({
      target: __target__,     // Target DOM element
      endpoint: __endpoint__, // Pipedream endpoint URL
      owner: __owner__,       // GitHub person or organisation
      repo: __repo__,         // GitHub repo
    });
  });
</script>
```

This will attach the component into the DOM tree at the point specified.

The only part visible by default is the title bar. Click on this to open
the form.

## Styling

There is a small amount of default styling provided, but this can be
overridden.

Colours are set using variables, and the main issue form is nested
under a div with the `issuer` class applied.

```css
#issuer-root {
  /* Example formatting for parent */
  position: fixed;
  bottom: 0;
  right: 0;
  border: 1px solid gray;
}
.issuer {
  width: 30em;                  /* Make it fixed width! */
  /* Variable overrides - set at :root in issuer.css */
  --issuer-header-fg: #ddd;     /* foreground colour for title */
  --issuer-header-bg: #333;     /* background colour for title  */
  --issuer-font-size: 0.9rem;   /* font size */
  --issuer-error-colour: #d22;  /* error highlight colour */
}
.issuer .error {
  border: 2px solid var(--issuer-error-colour);
  padding: 0.5em;
}
```

## Contributing

The code is written in Svelte, and compiled to a small standalone javascript module.

TO BE FINISHED!
