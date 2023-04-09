// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import jwt from 'jsonwebtoken';

type Data = {
  jwt: string;
};

const JWT_SECRET = 'financas_pessoais';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username, password } = req.body;
  // TODO: Validate username and password

  const jsonwebtoken = jwt.sign({ id: 12, name: 'igor lamoia' }, JWT_SECRET, {
    expiresIn: '1h',
  });
  res.status(200).json({ jwt: jsonwebtoken });
}
