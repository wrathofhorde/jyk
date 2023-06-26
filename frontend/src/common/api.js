const get = async (url) => {
  const res = await fetch(url);

  return await res.json();
};

const post = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

const api = {
  get,
  post,
};

export default api;
