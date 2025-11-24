"use client";

import React, { useEffect, PropsWithChildren } from "react";

/**
 * SmoothScrollProvider
 * - Intercepts anchor clicks and performs smooth scroll with an adjustable offset (for fixed navbar)
 * - Handles initial hash on page load and hashchange events
 */
export default function SmoothScrollProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const NAV_OFFSET = 96; // px offset to account for navbar height

    const smoothScrollTo = (hash: string) => {
      if (!hash || hash === "#") return;
      const id = hash.replace('#', '');
      const el = document.getElementById(id) || document.querySelector(hash);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const targetY = rect.top + window.scrollY - NAV_OFFSET;

      window.scrollTo({ top: Math.max(targetY, 0), behavior: 'smooth' });
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const link = target.closest('a') as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute('href') || '';
      // Only handle same-page hash links
      if (href.startsWith('#')) {
        e.preventDefault();
        const hash = href;
        // push state to keep URL updated
        history.pushState(null, '', hash);
        smoothScrollTo(hash);
      } else if (href.includes('#')) {
        // Same path + hash (avoid cross-page)
        const [path, hash] = href.split('#');
        if (path === window.location.pathname && hash) {
          e.preventDefault();
          const fullHash = `#${hash}`;
          history.pushState(null, '', fullHash);
          smoothScrollTo(fullHash);
        }
      }
    };

    const onHashChange = () => {
      if (window.location.hash) {
        // slight delay to ensure layout is painted
        setTimeout(() => smoothScrollTo(window.location.hash), 0);
      }
    };

    document.addEventListener('click', onClick, true);
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('popstate', onHashChange);

    // Handle initial hash on mount
    if (window.location.hash) {
      setTimeout(() => smoothScrollTo(window.location.hash), 0);
    }

    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('popstate', onHashChange);
    };
  }, []);

  return <>{children}</>;
}
