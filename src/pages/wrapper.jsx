import { useState, useEffect } from "react";
import supabase from "../utils/supabase";
import { Navigate } from "react-router";

function Wrapper({children}) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            setAuthenticated(!!session);
            setLoading(false);
        };

        getSession();
    },[]);

    if(loading) {
        return <h1>Loading...</h1>
    } else {
        if(authenticated) {
            return <>{children}</>;
        }
        return <Navigate to="/login" />;
    }
}

export default Wrapper