export const handler = async (event) => {
    const min = 1;
    const max = 6;
    const randnum = Math.floor(
      Math.random() * (max - min + 1)
      ) + min;
    const result = 'Your dice landed on: ' + randnum;
    return result;
  };