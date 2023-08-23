export const api = 'http://localhost:4000/api';

export const apiGet = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then(res => res.json());

export const apiPost = (
  input: RequestInfo,
  {arg}: {arg: any},
  init?: RequestInit,
) =>
  fetch(input, {
    ...init,
    method: 'POST',
    headers: {accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(arg),
  }).then(res => res.json());
