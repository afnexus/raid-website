import Script from "next/script";
import { primary } from "@afnexus/hummingbird-ui-assets";

export default function ZendeskWidget() {
  return (
    <>
      <Script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=d821ded2-4b1f-4e66-9fab-bfb63013a558"
      />
      <Script id="ze-settings">
        {`
                window.zESettings = {
                    webWidget: {
                        color: { theme: '${primary[400]}' },
                        launcher: {
                            label: {
                              'en-US': 'Make a request',
                              '*': 'Contact us!'
                            }
                          },
                    }
                };
            `}
      </Script>
    </>
  );
}
