import supabase from "../utils/supabase";
import { useNavigate } from "react-router";
import app from '/public/Bluetooth.apk';

function Aplicativo() {
    const navigate = useNavigate();

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        navigate("/login");
    }  

    return (
        <>
            <main>
                <h1>Olá! Você está logado!</h1>
                <a href={app}>Click para fazer download do App</a>
                <br /><br /><br />
                <button onClick={signOut}>LogOut</button>
            </main>
            <br /><br /><br /><br /><br />
            <footer>
                &copy; 2025 Cogitare - Todos os direitos reservados para a empresa DigitalInovaTecnologia.
            </footer>                
        </>
    )
}

export default Aplicativo