import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIntlClientProvider } from "next-intl";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        <NextIntlClientProvider
          locale={router.locale}
          timeZone="Europe/London"
          messages={pageProps.messages}
        >
          <Component {...pageProps} />
        </NextIntlClientProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
