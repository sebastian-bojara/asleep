async function f() {
  console.log('start');

  await sleep(2000);

  console.log('2s');
}

async function sleep (ms) {
  return new Promise(exec => setTimeout(exec, ms));
}
