const f = async () => {
  console.log('start');

  await sleep(2000);

  console.log('2s');
}

/**
 * @param t time in ms
 */
const sleep = async (t) => new Promise(exec => setTimeout(exec, t))

module.exports = sleep;
