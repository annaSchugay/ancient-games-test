// @ts-ignore
export const generateUserModel = ({ req }) => ({
  getAll: () => {
    // @ts-ignore
    return fetch(' https://api-staging.csgoroll.com/auth/steam?redirectUri=http://localhost:4200/users', { token: req.headers.token });
  },
});
