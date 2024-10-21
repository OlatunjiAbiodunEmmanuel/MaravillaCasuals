import { env } from "@/env";
import { createClient, OAuthStrategy } from "@wix/sdk";
import {
  backInStockNotifications,
  checkout,
  currentCart,
  orders,
  recommendations,
} from "@wix/ecom";
import { files } from "@wix/media";
import { members } from "@wix/members";
import { redirects } from "@wix/redirects";
import { reviews } from "@wix/reviews";
import { collections, products } from "@wix/stores";

export function getWixClient() {
  return createClient({
    modules: {
      backInStockNotifications,
      checkout,
      currentCart,
      orders,
      recommendations,
      files,
      members,
      redirects,
      reviews,
      collections,
      products,
    },
    auth: OAuthStrategy({
      clientId: env.PUBLIC_NEXT_WIX_CLIENT_ID,
    }),
  });
}
