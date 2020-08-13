// Henter react
import React from "react";
// Henter form hook fra NPM React-hook-form
import { useForm } from "react-hook-form";
import useAuth from "../../Auth/Auth";
import './Login.scss'

const Login = (props) => {
  // Deklarerer hook til login form
  const { handleSubmit, register, errors } = useForm();
  const { login, logout, user, loggedIn } = useAuth();
  console.log("Login -> user", user);

  
  // Deklarerer hook til login
  //const [isLoggedIn, setLogin] = useState(false);

  const onSubmit = handleSubmit((values) => {
    login(values.username.trim(), values.password.trim());
  });

  if(!loggedIn) {
    return (
      <section className="LoginGrid">
      <form onSubmit={onSubmit}>
        <h2>Login</h2>
        <p>Her kan du logge ind og adminstrere dine reservationer.</p>
        <div>
          <label htmlFor="username">Brugernavn:</label>
          <br/>
          <input
            type="text"
            name="username"
            id="username" 
            ref={register({
              required: "Nødvendig",
              minLength: { message: "too short", value: 2 },
              maxLength: { message: "too long", value: 30 },              
            })}
          />
          {/* <ErrorMessage errors={errors} name={"username"}>
            {({ message }) => <span>{message}</span>}
          </ErrorMessage> */}
        </div>
        <br/>
        <div>
          <label htmlFor="password">Adgangskode:</label>
          <br/>
          <input
            type="password"
            name="password"
            id="password"
            ref={register({
              required: "Nødvendig",
              minLength: { message: "too short", value: 2 },
              maxLength: { message: "too long", value: 30 },              
            })}
          />
          {/* <ErrorMessage errors={errors} name={"password"}>
            {({ message }) => <span>{message}</span>}
          </ErrorMessage> */}
        </div>
        <br/>
        <button type="submit">Login</button>
      </form>
      <div className="griditem2">
        <h4>Problem med login?</h4>
      </div>
      </section>
    )
  }
  return (
    <div>
      <section className="AdminGrid">

      <div className="griditem1">
      <h2>Adminstrer reservationer</h2>
      <p>Her kan du ændre og afbestille dine reservationer</p>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      </div>  

      <div className="griditem2">
      <h4>Dine oplysninger</h4>
      <button onClick={logout}>Logout</button>
      </div>
      
      </section>
    </div>
  )
}

export default Login;
