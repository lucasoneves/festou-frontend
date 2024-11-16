import data from '@/utils/data/guests.json';

export default defineEventHandler(async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500)
  })
})