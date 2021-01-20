module.exports = { login };

const DEFAULT_CREDENTIALS = {
  username: "john",
  password: "pass",
};

function login(req: any, res: any) {
  const { username, password } = req.body;
  if (
    username === DEFAULT_CREDENTIALS.username &&
    password === DEFAULT_CREDENTIALS.password
  ) {
    res.json(true);
  } else {
    res.status(500).send({ error: "Wrong credentials" });
  }
}
