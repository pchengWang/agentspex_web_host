# AgentSPEX academic website

Static project page for **AgentSPEX: An Agent SPecification and EXecution Language**.

- GitHub Pages: https://pchengwang.github.io/agentspex_web_host/
- Project domain (pending DNS migration): https://agentspex.ai/
- Paper: https://arxiv.org/abs/2604.13346
- Code: https://github.com/ScaleML/AgentSPEX
- Local setup: https://github.com/ScaleML/AgentSPEX#quick-start

The free hosted demo period has ended. The four demo buttons display a notice with links to the code and local setup guide. Demo recordings, research figures, and generated results remain available on the page.

## Local preview

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ in a browser. No build step or backend is needed.

## Publishing

GitHub Pages publishes `main` from `/ (root)`. The `.nojekyll` file preserves the plain static site. Push updates to `main` to publish them.

Local asset paths are relative, so the site supports both the project Pages URL and the custom domain. Once the domain is configured, GitHub redirects the project Pages URL to it. Media is committed as actual files, not Git LFS pointers. The original editor recording is retained separately; this repository contains its optimized delivery copy.

### Custom domain

GitHub Pages is configured to use `agentspex.ai`, and the root `CNAME` file preserves this setting. DNS migration at Namecheap and HTTPS activation are pending as of September 11, 2026.

In Namecheap, open **Domain List → Manage → Advanced DNS → Host Records**. Replace the old `@` and `www` records pointing to `149.165.151.10` with the following records, using **Automatic** TTL:

| Type | Host | Value |
| --- | --- | --- |
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |
| CNAME Record | www | pchengwang.github.io |

Remove conflicting A, AAAA, CNAME, or URL Redirect records for these two hosts, while keeping unrelated records such as MX and TXT. The `www` target must not include a protocol or repository path. Keep the current Namecheap nameservers; URL forwarding is unnecessary. GitHub handles the `www` redirect to the apex domain.

After DNS has propagated and GitHub has issued the domain certificate, enable **Enforce HTTPS** in repository **Settings → Pages**. Check the apex domain, the `www` redirect, and the media over HTTPS.

References: [Namecheap setup instructions](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/) and [GitHub custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Files

- `index.html`: project content, paper metadata, and demo notice.
- `static/css/index.css`: page and responsive dialog styles.
- `static/js/demo-launcher.js`: static dialog behavior, without backend calls.
- `static/js/index.js`: carousels, navigation, and BibTeX copying.
- `static/images/`, `static/videos/`, and `static/pdfs/`: published media.

## Credits and website license

The website is based on the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), adapted from [Nerfies](https://nerfies.github.io/). The website template is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The AgentSPEX code has its own license in the code repository.
