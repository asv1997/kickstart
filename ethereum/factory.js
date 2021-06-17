import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xea095A567a86C0B5c7DFd37Fda2E9337d5741FB4"
);

export default instance;
