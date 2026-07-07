import { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

function Latency() {
  const [latency, setLatency] = useState("Connecting...");

  useEffect(() => {
    const client = new W3CWebSocket("ws://localhost:55455");

    client.onmessage = (message) => {
      const timestamp = Number(message.data);

      const packetLatency = Date.now() - timestamp;

      setLatency(`${packetLatency} ms`);
    };

    client.onerror = () => {
      setLatency("Connection Error");
    };

    client.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => {
      client.close();
    };
  }, []);

  return <p>{latency}</p>;
}

export default Latency;