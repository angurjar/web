import jwt from 'jsonwebtoken';

const secretKey = 'asdfgtrewq';

const setUser = (user: any): string => {
  return jwt.sign(user, secretKey);
};

const getUser = (token: string): any | null => {
  try {
    if (!token) {
      throw new Error('Token is empty');
    }

    return jwt.verify(token, secretKey);
  } catch (error) {
    // Handle the error, for example, log it or return null
    console.error('Error verifying token:');
    return null;
  }
};

export default {
  setUser,
  getUser,
};
