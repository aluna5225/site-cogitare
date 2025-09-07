import { useState } from "react";
import supabase from "../utils/supabase";
import { Link, useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        const {data, error} = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })

        if(error) {
          setMessage(error.message);
          setEmail("");
          setPassword("");
          return;
        }

        if(data) {
          navigate("/aplicativo")
        }
  };  

  return (
    <>
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label>E-mail</label>
            <input
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              type="email" 
              id="email" 
              name="email" 
              required 
            />

            <label>Senha</label>
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              type="password" 
              id="senha" 
              name="senha" 
              required 
            />

            <button type="submit">Login</button>
          </form>

          <p>
            Não tem uma conta? <Link to="/cadastro">Cadastre-se aqui.</Link>
          </p>
          {message && <span>{message}</span>}
        </div>
      </main>

      <footer>
          &copy; 2025 Cogitare - Todos os direitos reservados para a empresa DigitalInovaTecnologia.
      </footer>    
    </>
  )
}

export default Login