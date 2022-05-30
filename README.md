# KYOSS Static Site
A Static Site Generator for KYOSS.org/KYOSS.dev. This site uses [VuePress](https://vuepress.github.io/guide/#vitepress)
to generate a static website from Markdown. Changes merged to the `main` branch will be automatically built and
published via [GitHub Actions](https://github.com/features/actions).


## How to add pages

1. Create a [Markdown](https://github.com/markdown-it/markdown-it) file in the `docs/` subdirectory.
2. Add the *[Frontmatter](https://vuepress.github.io/guide/page.html#frontmatter)* to set the title/language/etc...
   ```
   ---
   lang: en-US
   title: Title of this page
   description: Description of this page
   ---
   ```
3. Add/Commit the new page to the git repository
4. Push your branch to your fork
5. Submit a pull request to merge your submission to the `main` branch

## How to add static content (like images)

[Full reference here](https://vuepress.vuejs.org/guide/assets.html)


All Markdown files are compiled into Vue components and processed by webpack. You can, and should, reference any assets using relative URLs:

```markdown
![An image](./image.png)
```

This would work the same way as in `*.vue` file templates. The image will be processed with `url-loader` and `file-loader`, and copied to appropriate locations in the generated static build.

You can also use the `~` prefix to explicitly specify this is a webpack module request, allowing you to reference files with webpack aliases or from npm dependencies:

```markdown
![Image from alias](~@alias/image.png)
![Image from dependency](~some-dependency/image.png)
```

One alias that is added by default is `@source`, if you follow the recommended Directory Structure this is the `docs` folder.

```markdown
![Image from images folder](~@source/images/image.png)
```
