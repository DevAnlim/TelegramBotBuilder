const sendRequest = async function (
  url,
  method = 'GET',
  body,
  header = {
    'Content-Type': 'application/json',
  },
) {
  return fetch(url, {
    method,
    headers: header,
    body: JSON.stringify(body),
  })
    .then(async res => {
      const data = await res.json();
      if (res.ok) {
        return data;
      }
      return { ok: false, message: data.message };
    })
    .catch(err => {
      return {
        ok: false,
        message: 'Неизвестаная ошибка с сервера ' + err.message,
      };
    });
};

export default sendRequest;
