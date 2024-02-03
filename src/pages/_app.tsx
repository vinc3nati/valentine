import "@/styles/globals.css";
import { NEXT_SEO_DEFAULT } from "@/utils";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const updatedSEO = {
    ...NEXT_SEO_DEFAULT,
    twitter: {
      handle: "@vinc3nati",
      site: "https://www.vinitkanse.com/",
      cardType: "summary_large_image",
    },
  };
  return (
    <>
      <DefaultSeo {...updatedSEO} />
      <Component {...pageProps} />
    </>
  );
}
