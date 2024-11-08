import websiteLinks from "../data/websiteLinks";
import WebsiteLinkItem from "./WebsiteLinkItem";

const WebsiteLinks = () => {
  return (
    <div className="p-2 flex items-center justify-center">
      <div className="flex flex-row">
        {websiteLinks.map((website) => (
          <WebsiteLinkItem
            key={website.url}
            name={website.name}
            url={website.url}
          />
        ))}
      </div>
    </div>
  );
};

export default WebsiteLinks;
