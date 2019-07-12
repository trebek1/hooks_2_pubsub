import PubNub from "pubnub";
import pubnubConfig from "./pubnub.config";

export const MESSAGE_CHANNEL = "MESSAGE_CHANNEL";

function PubSub() {
  const pubnub = new PubNub(pubnubConfig);
  pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });
  this.addListener = listenerConfig => pubnub.addListener(listenerConfig);
  this.publish = message =>
    pubnub.publish({ message, channel: MESSAGE_CHANNEL });
}

export default PubSub;
