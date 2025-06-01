'use client';

import dynamic from 'next/dynamic';

const BackToTop = dynamic(
  () => import('@/components/ui/BackToTop'),
  { 
    ssr: false,
    loading: () => null
  }
);

export default function BackToTopWrapper() {
  return <BackToTop />;
}
