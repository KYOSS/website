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

[Full reference here](https://v2.vuepress.vuejs.org/guide/assets.html)


You can reference any assets using relative URLs in your Markdown content:

```markdown
![An image](./image.png)
```
This is generally the suggested way to import images, as users usually place images near the Markdown file that references them.
