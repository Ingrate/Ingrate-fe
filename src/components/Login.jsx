import "./Login.css"

function Login() {
  return (
    <div className="Login">
      <div className="login-wrapper">
        <div className="img"></div>
        <h1>Welcome to Ingrate!</h1>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button>Sign in</button>
        <div className="keep-signed">
          <input type="checkbox" />
          <div>Keep me signed in</div>
        </div>

      </div>
    </div>
  )
}

export default Login;