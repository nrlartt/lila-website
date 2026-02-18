import { BrowserProvider } from "ethers";
import { getNonce, verifySiwe } from "./api";

function buildSiweMessage(params: {
  domain: string;
  address: string;
  statement: string;
  uri: string;
  version: string;
  chainId: number;
  nonce: string;
  issuedAt: string;
}) {
  return `${params.domain} wants you to sign in with your Ethereum account:\n${params.address}\n\n${params.statement}\n\nURI: ${params.uri}\nVersion: ${params.version}\nChain ID: ${params.chainId}\nNonce: ${params.nonce}\nIssued At: ${params.issuedAt}`;
}

export async function signInWithEthereum(chainId: number, domain: string) {
  if (!(window as any).ethereum) throw new Error("No wallet provider found");
  const provider = new BrowserProvider((window as any).ethereum);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();

  const noncePayload = await getNonce(address, chainId);
  const message = buildSiweMessage({
    domain,
    address,
    statement: "Sign in to AGENTVERSE.",
    uri: noncePayload.uri,
    version: "1",
    chainId,
    nonce: noncePayload.nonce,
    issuedAt: new Date().toISOString()
  });

  const signature = await signer.signMessage(message);
  return verifySiwe(message, signature);
}
