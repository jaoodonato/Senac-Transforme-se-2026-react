import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import bgauth from "../assets/bgauth.png";

function Auth() {

    /* const [variavel, funcaoAlteraVariavel] = useState('valor inicial'); */

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");
    const nav = useNavigate();

    function handleLogin() {
        const users =
            JSON.parse(localStorage.getItem('users')) || [];

        let user = users.find(u => {
            return u.email == email;
        });

        if (!user) {
            setMsg("Usuário não encontrado.");
            return;
        }

        if (user.senha == pass) {
            setMsg("Login realizado com sucesso.");
            localStorage.setItem(
                'logged',
                JSON.stringify(user)
            );

            nav('/painel');
        } else {

            setMsg("Senha incorreta.");

        }

    }

    return (

        <div className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgauth})` }}>

            <div className=" w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md ">
                <h2 class="text-2xl font-bold text-center text-gray-900 pt-2">Entrar na sua conta</h2>

                <Link
                    to="/"
                    className="absolute top-2 left-4 inline-flex items-center gap-2 rounded bg-red-600 px-8 py-4 text-xs font-medium text-white shadow-lg hover:bg-red-700 transition-colors " > Voltar  </Link>

                <form className="flex flex-col">

                    <span> {msg} </span>

                    <span className="text-left block text-sm font-medium text-gray-700"> Email: </span>

                    <input type="email" value={email} class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Digite o seu email cadastrado" onChange={(e) => setEmail(e.target.value)} />


                    <span className="text-left block text-sm font-medium text-gray-700"> Senha: </span>

                    <input type="password" value={pass} placeholder="Digite sua senha cadastrada" class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" onChange={(e) => setPass(e.target.value)}/>

                    <a onClick={handleLogin} className=" mt-5 bg-red-700 text-white text-center rounded-md py-4 px-4 cursor-pointer w-full py-2 text-white rounded-md hover:bg-red-500 transition-colors "> Entrar </a>

                </form>

            </div>

        </div>

    );

}



export default Auth;