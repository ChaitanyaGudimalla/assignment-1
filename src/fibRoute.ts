// Endpoint for querying the fibonacci numbers

import express from 'express';
import fibonacci from './fib';

export default (req: express.Request, res: express.Response) => {
  const { num }: { num: string } = req.params as { num: string };

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};