import { History } from "history";
import BroadcastChannel from "broadcast-channel";

interface Message {
  logoutMessage: string;
}
const logoutChannel: BroadcastChannel<Message> = new BroadcastChannel("logout");

export const login = (history: History): void => {
  localStorage.setItem("token", "fake_token");
  history.push("/");
};

export const checkIsAuthenticated = (): boolean => {
  return localStorage.getItem("token") === "fake_token";
};

export const logout = () => {
  logoutChannel.postMessage({ logoutMessage: "OH! I am logged out!" });
  localStorage.clear();
  window.location.href = window.location.origin + "/login";
};

export const logoutAllTabsEventListener = () => {
  logoutChannel.onmessage = event => {
    logout();
    logoutChannel.close();
    console.log(event.logoutMessage);
  };
};
