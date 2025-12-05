'use client';

import { useEffect } from 'react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Remove extension-added attributes that cause hydration errors
    if (typeof document !== 'undefined') {
      document.body.removeAttribute('cz-shortcut-listen');
      document.body.removeAttribute('data-new-gr-c-s-check-loaded');
      document.body.removeAttribute('data-gr-ext-installed');
    }
  }, []);

  return <>{children}</>;
}
