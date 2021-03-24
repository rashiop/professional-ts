class Foo {
  #name: string;
  constructor(public rawName?: string) {
    this.name = rawName ?? '(no name)';
  }
  log() {
    console.log(this.name);
  }
}

function doSomethingRisky() {}
function assertsIsError(err: unknown): asserts err is Error {
  if (!(err instanceof Error)) {
    throw new Error(`Not an error: ${err}`);
  }
}
try {
  doSomethingRisky();
} catch (err: unknown) {
  assertsIsError(err);
  console.log(err.stack);
}

import type { useAsyncDataEffect } from '../src/utils/api';
