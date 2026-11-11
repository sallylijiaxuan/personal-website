# Quick Meal embedded navigation fix

The hosted prototype uses `history.length > 1` to decide whether it can go back. In an iframe, that can include portfolio history and navigate away from the case study.

This patch targets `src/router.ts` in https://github.com/githonllc/quick-meal-demo. It stores prototype navigation depth in each history entry. At the prototype boundary it replaces the current route with the supplied fallback, rather than traversing portfolio history. Existing query strings and state are preserved during normal back navigation.

Apply from the prototype repository root:

```sh
git apply /path/to/personal-website/fixes/quick-meal/navigation.patch
npm run build
```

Redeploy the prototype using its normal Cloudflare deployment process. This patch does not modify the currently hosted prototype or the portfolio iframe.
