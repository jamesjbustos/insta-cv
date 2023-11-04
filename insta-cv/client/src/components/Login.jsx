const Login = () => {
  const AUTH_URL = "http://localhost:3000/auth/github";

  return (
    <div className="Login">
      <h1>Login Page</h1>
      <a href={AUTH_URL}>
        <button>Login via GitHub</button>
      </a>
    </div>
  );
};

export default Login;
