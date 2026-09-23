const baseURL = "";

export const login_api = async (body) => {
  const route = "/login";
  return await fetchApi(route, "POST", body);
};

export const getAllProducts = async () => {
  const route = "/getAllProducts";
  return await fetchApi(route, "POST", null);
};

const fetchApi = async (url, method, body) => {
  url = baseURL + url;

  console.log("url: ", url);

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    params.body = JSON.stringify({ ...body });
    console.log("body : ", body);
  }
  if (method) {
    params.method = method;
  }

  return await fetch(url, params)
    .then((res) => res.json())
    .then((resJson) => resJson)
    .catch((e) => {
      console.log("fetch error: ", e);
      console.log("fetch error url: ", url);
      // return e;
    });
};
