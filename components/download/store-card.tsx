import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/client";
import type { LngProps } from "@/types/i18next-lng";
import type { SystemOS } from "@/types/common";

export default function StoreCard({
  lng,
  platform,
}: LngProps & { platform: SystemOS }) {
  const { t } = useTranslation(lng, "download");

  const storeLinks = useMemo(() => {
    const links: Record<SystemOS, React.ReactNode> = {
      ios: null,
      android: (
        <>
          <span className="mt-2 text-gray-600 dark:text-white/80">Amazon</span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <Link target="_blank" href="https://www.amazon.com/dp/B0DHZ8N2BJ">
              <Image
                width="220"
                height="64"
                alt="Get it on Amazon App Store"
                src="/images/Download-on-the-Amazon-App-Store.png"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>
          <span className="mt-4 text-gray-600 dark:text-white/80">F-Droid</span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <Link
              target="_blank"
              href="https://f-droid.org/packages/com.chenyifaer.fafarunner"
            >
              <Image
                width="220"
                height="64"
                alt="Get it on F-Droid"
                src="/images/Download-on-the-F-Droid.svg"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>
        </>
      ),
      macos: null,
      windows: (
        <>
          <Link
            className="mt-2"
            target="_blank"
            href="https://apps.microsoft.com/detail/9PDN5V0ZMF20?mode=full"
          >
            <Image
              width="220"
              height="64"
              alt="Get it on Windows Store"
              src="https://get.microsoft.com/images/en-us%20dark.svg"
              loading="lazy"
              decoding="async"
            />
          </Link>
        </>
      ),
      linux: (
        <>
          <span className="mt-2 text-gray-600 dark:text-white/80">
            Snap Store
          </span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <Link target="_blank" href="https://snapcraft.io/fafarunner">
              <Image
                width="220"
                height="68"
                alt="Get it on Snap Store"
                src="/images/Download-on-the-Snap-Store.svg"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>
          <span className="mt-4 text-gray-600 dark:text-white/80">FlatHub</span>
          <div className="mb-2 mt-2 flex flex-col px-2">
            <Link
              target="_blank"
              href="https://flathub.org/apps/details/com.fafarunner.FaFaRunner"
            >
              <Image
                width="220"
                height="74"
                alt="Get it on Flathub"
                src="https://flathub.org/assets/badges/flathub-badge-en.png"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>
        </>
      ),
    };

    return links;
  }, []);

  return storeLinks[platform] ? (
    <div className="flex min-h-64 w-full max-w-screen-xl animate-fade-up flex-col rounded-xl border border-gray-200 p-4 hover:shadow-md dark:border-gray-700 dark:hover:shadow-gray-700">
      <span className="text-xl font-bold">{t("app-store")}</span>
      <span className="text-base text-gray-600 dark:text-white/80">
        {t("app-store-description")}
      </span>
      <div className="flex flex-col justify-center">{storeLinks[platform]}</div>
    </div>
  ) : null;
}
