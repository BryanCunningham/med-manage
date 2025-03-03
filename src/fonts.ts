import { Playfair_Display, Source_Sans_3 } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
}); 