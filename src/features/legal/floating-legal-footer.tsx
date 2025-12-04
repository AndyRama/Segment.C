import { SiteConfig } from "@/site-config";
import Image from "next/image";
import Link from "next/link";
import GoogleReviewsWidget from '@/features/legal/google-reviews-widget';
// import WhatsAppContactButton from '@/features/legal/whatsapp-btn';


export const FloatingLegalFooter = () => {
  return (
    <>
      <div className="fixed right-4 bottom-16 flex flex-col sm:flex-row items-end sm:items-center gap-3 z-50">
        <GoogleReviewsWidget />
        {/* <WhatsAppContactButton/> */}
      </div>

      <div className="fixed right-4 bottom-2 flex items-center gap-2 z-40">
        <Link
          className="text-muted-foreground text-xs hover:underline"
          href="/legal/mention-legal"
          >
          Mentions légals
        </Link>
        <Link
          className="text-muted-foreground text-xs hover:underline"
          href="/legal/privacy"
          >
          Privacy
        </Link>
        <Image src={SiteConfig.appIcon} width={12} height={12} alt="app icon" />
      </div>
    </>
  );
};
