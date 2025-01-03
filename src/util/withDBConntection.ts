import { connectDB } from '@/lib/mongodb';

import { APIError } from './apiError';
import { ErrorMessage, HttpStatusCode } from './enum/error';

export async function withDBConnection(fn: Function) {
  return async function (...arg: any[]) {
    try {
      await connectDB();
      return await fn(...arg);
    } catch (error) {
      console.error(error);
      throw new APIError(ErrorMessage.DATABASE_ERROR, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
  };
}
