import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 20 }, // ramp-up to 20 users
    { duration: '5m', target: 20 }, // sustain load
    { duration: '2m', target: 0 },  // ramp-down
  ],
};

export default function () {
  let res = http.get('http://fastapi-app:80/');
  check(res, { 'status is 200': (r) => r.status === 200 });
  http.post(`http://fastapi-app:80/write/key1`, JSON.stringify({ value: 'test' }), {
    headers: { 'Content-Type': 'application/json' },
  });
  sleep(1);
}

