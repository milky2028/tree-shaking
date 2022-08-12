interface ThrottleOptions {
  signal?: AbortSignal;
}

function throttle<A>(
  fn: (...A[]) => void,
  millisecondsDelay: number,
  options?: ThrottleOptions
) {
  let timerId: number;
  let lastCalled = 0;

  options?.signal?.addEventListener("abort", () => clearTimeout(timerId));

  return function (...args: A[]) {
    const currentTime = performance.now();
    const timeSinceLastCalled = currentTime - lastCalled;
    const delayRemaining = millisecondsDelay - timeSinceLastCalled;

    if (delayRemaining <= 0) {
      lastCalled = currentTime;
      fn.apply(this, args);
    } else {
      timerId = setTimeout(() => {
        lastCalled = performance.now();
        fn.apply(this, args);
      }, delayRemaining);
    }
  };
}

const callBtn = document.getElementById("call");
const abortBtn = document.getElementById("abort");

const controller = new AbortController();
const throttled = throttle(() => console.log("clicked"), 150, {
  signal: controller.signal,
});

callBtn?.addEventListener("click", () => {
  throttled();
});

abortBtn?.addEventListener("click", () => {
  controller.abort();
});
