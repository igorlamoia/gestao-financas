// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import jwt from 'jsonwebtoken';

type Data = {
  name: string;
  jwt: string;
};

const JWT_SECRET = 'financas_pessoais';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { message: string } | any>
) {
  // just a test
  const { jwt: headerJwt } = req.body;
  const dadosJWT = jwt.verify(
    headerJwt,
    JWT_SECRET,
    function (err: any, decoded: any) {
      if (err) {
        console.log(err);
        return res.status(401).json({ message: 'Unauthorized' });
      }
      return decoded;
    }
  );
  console.log('Dados obtidos:', dadosJWT);
  res.status(200).json({ data: dadosJWT });
}
