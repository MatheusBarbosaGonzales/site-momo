import { useState } from "react";
import background from "../assets/background.png";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const [senha, setSenha] = useState("");
     const navigate = useNavigate();

    const tentarSenha = () => {
        if (senha === "170506") {
            navigate("/EuTeAmo")
        }
    };
    return (
        
    <main
    className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}>
        <div className="flex flex-col items-center text-center gap-8">
            <h1 className="text-6xl text-[#A78BFA] font-bold">
            OI AMORRRRRR <br /> TEM Q DESCOBRIR A SENHAAA
            </h1>
            <input  value={senha} onChange={(e) => setSenha(e.target.value)} className= "outline-none border-2 rounded-2xl w-100 h-10 border-[#A78BFA] text-[#A78BFA] text-3xl p-2" type="text" placeholder="ADIVINHA A SENHA" />
            <button className="bg-[#A78BFA] w-40 h-10 hover:cursor-pointer hover:bg-[#5438a5] transition"  onClick={tentarSenha}>TENTAR SENHA</button>
        </div>
    </main>
    );
};

export default Home;
