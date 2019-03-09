import { Options as QueryParams } from '@/modules/options/index.interface';
import { QueryString } from './querystring.interface';

export function stringify(params: QueryParams): QueryString {
  const ret = Object.keys(params).map((key) => {
    if (!params[key]) {
      return undefined;
    }
    return [key, params[key]].map(encodeURIComponent).join('=');
  }).filter((p) => !!p);
  return ret.length ? `?${ret.join('&')}` : '';
}
