import { getVisitorInfo } from '../service/visitor';

export default async () => {
  const result = await getVisitorInfo();

  if (result) return result.data;

  return 'fail';
};
