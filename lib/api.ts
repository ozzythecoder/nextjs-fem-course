const fetcher = async ({
  url,
  method,
  body,
  json = true,
}: {
  url: string;
  method: string;
  body: object;
  json?: boolean;
}) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }), // weird syntax, but this is just a conditional
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  if (json) {
    const data = await res.json();
    return data.data;
  }
};

export const register = async (user: object) => {
  return fetcher({
    url: "api/register",
    method: "POST",
    body: user,
  });
};

export const signin = async (user: object) => {
  return fetcher({
    url: "api/signin",
    method: "POST",
    body: user,
  });
};
