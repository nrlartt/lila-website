import { BrowserProvider } from "ethers";
import { SiweMessage } from "siwe";
import { getNonce, verifySiwe } from "./api";

export async function signInWithEthereum(chainId: number, domain: string) {
  if (!(window as any).ethereum) throw new Error("No wallet provider found");
  const provider = new BrowserProvider((window as any).ethereum);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();

  const noncePayload = await getNonce(address, chainId);
  const siwe = new SiweMessage({
    domain,
    address,
    statement: "Sign in to AGENTVERSE.",
    uri: noncePayload.uri,
    version: "1",
    chainId,
    nonce: noncePayload.nonce
  });
  const message = siwe.prepareMessage();
  const signature = await signer.signMessage(message);
  return verifySiwe(message, signature);
}
