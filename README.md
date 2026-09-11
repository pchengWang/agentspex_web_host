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

Local asset paths are relative, so the site works at both the project Pages URL and the future custom domain. Media is committed as actual files, not Git LFS pointers. The original editor recording is retained separately; this repository contains its optimized delivery copy.

Set the custom domain through repository **Settings → Pages** before updating the domain's DNS. The custom domain has not yet been configured.

## Files

- `index.html`: project content, paper metadata, and demo notice.
- `static/css/index.css`: page and responsive dialog styles.
- `static/js/demo-launcher.js`: static dialog behavior, without backend calls.
- `static/js/index.js`: carousels, navigation, and BibTeX copying.
- `static/images/`, `static/videos/`, and `static/pdfs/`: published media.

## Credits and website license

The website is based on the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), adapted from [Nerfies](https://nerfies.github.io/). The website template is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The AgentSPEX code has its own license in the code repository.
