import "@/styles/globals.css";
// import "react-photo-view/dist/react-photo-view.css";

import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
// import LoadingBar from "react-top-loading-bar";

// import { SessionProvider, useSession, signOut } from "next-auth/react";
// import { SnackbarProvider } from "notistack";
// import { PhotoProvider } from "react-photo-view";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    const handleStart = (url) => {
      ref.current.continuousStart();
    };
    const handleStop = () => {
      ref.current.complete();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    // <SnackbarProvider maxSnack={3}>
    //   <LoadingBar color="#2F7CE3" ref={ref} />
    //   <PhotoProvider>
        getLayout(
        <Component {...pageProps} />)
    //   </PhotoProvider>
    // </SnackbarProvider>
  );
}
