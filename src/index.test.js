const sleep = require('./index');

test('sleep should delay the code for 2 seconds', async () => {
  const second = 1000;

  const timeBefore = new Date().getTime();
  await sleep(2 * second);
  const timeAfter = new Date().getTime();

  const diff = Math.round((timeAfter - timeBefore) / second);

  expect(diff).toBe(2);
});
