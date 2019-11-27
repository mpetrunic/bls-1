// eslint-disable-next-line import/no-extraneous-dependencies
import blsWasmWrapper from "@chainsafe/eth2-bls-wasm";

let blsWrapper: typeof blsWasmWrapper | null = null;

export async function init(): Promise<typeof blsWasmWrapper> {
  await blsWasmWrapper.init();
  blsWrapper = blsWasmWrapper;
  return blsWrapper;
}

export function destroy(): void {
  blsWrapper = null;
}

export function getContext(): typeof blsWasmWrapper{
  if(blsWrapper) {
    return blsWrapper;
  }
  throw new Error("BLS not initialized");
}