const sendRequest = async function (
  url,
  method = 'GET',
  body,
  headers = { 'Content-Type': 'application/json' },
) {
  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  });

  return response.json();
};

export default sendRequest();
