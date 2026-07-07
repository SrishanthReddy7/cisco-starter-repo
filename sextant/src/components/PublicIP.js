import { useEffect, useState } from "react";

function PublicIP({ version }) {
  const [ip, setIp] = useState("Loading...");

  useEffect(() => {
    const url =
      version === "v6"
        ? "https://api64.ipify.org?format=json"
        : "https://api.ipify.org?format=json";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        if (version === "v6" && !data.ip.includes(":")) {
          setIp("IPv6 not available");
        } else {
          setIp(data.ip);
        }
      })
      .catch(() => {
        setIp(version === "v6" ? "IPv6 not available" : "Unable to load");
      });
  }, [version]);

  return <p>{ip}</p>;
}

export default PublicIP;