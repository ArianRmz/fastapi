import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 50 }, // ramp-up quickly to 50 users
    { duration: '3m', target: 100 }, // push beyond normal load
    { duration: '2m', target: 0 },   // ramp-down
  ],
};
export default function () {
  let res = http.get('http://fastapi-app:80/');
  check(res, { 'status is 200': (r) => r.status === 200 });
  http.post(`http://fastapi-app:80/write/key2`, JSON.stringify({ value: 'stress' }), {
    headers: { 'Content-Type': 'application/json' },
  });
  sleep(0.5);
}

