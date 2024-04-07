import designSystem from '@/styles/designSystem';
import { useEffect, useState } from 'react';

const query = '(prefers-color-scheme: dark)';
const useTheme = () => {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  if (matches) return designSystem.colors.darkTheme;
  return designSystem.colors.lightTheme;
};

export default useTheme;
