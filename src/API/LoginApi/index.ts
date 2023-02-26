export const mockFetchLogin = (credentials: any) => {
  const result = new Promise((res) => {
    setTimeout(() => {
      res('success');
    }, 1000);
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};
