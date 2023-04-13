const fetchBreadList = async ({ queryKey }) => {
  const id = queryKey[1];
  if (!id) return [];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${id}`);
  if (apiRes.ok == false) throw new Error(`details/${id} fetch not ok`);

  return apiRes.json();
};

export default fetchBreadList;
