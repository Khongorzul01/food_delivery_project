const loginUser = async (credentials) => {
  return await fetch("http://localhost:5000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
    }),
  });
};

const signUpUser = async (credentials) => {
  return await fetch("https://dev-api.mstars.mn/admin/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
      name: credentials.name,
      address: credentials.address,
    }),
  });
};
export const userServices = {
  signUpUser,
  loginUser,
};
