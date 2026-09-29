import { useState, useEffect } from "react";

export function useToast() {
    const [mensagem, setMensagem] = useState('');
    return { mensagem, setMensagem };
}

export function ToastSucess({ mensagem, setMensagem }){
   useEffect(() => {
    if (mensagem == '') return;

    const timer = setTimeout (() => {
        setMensagem('');
    }, 5000);
    return () => clearTimeout(timer);
    }, [mensagem, setMensagem]);

    if(mensagem == '') return;

    return (
        <div className="'fixed top-5 right-5 z-[60] bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"> 
        <p>{mensagem}</p>
        </div>
    );
}
