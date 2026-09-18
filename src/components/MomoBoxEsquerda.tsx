type MomoBoxProps = {
    fotoLink: string;
    titulo: string;
    texto: string;
    size: string
};

const MomoBoxEsquerda = ({fotoLink, titulo, texto, size}: MomoBoxProps) =>{
    return (
        <div
        style={{ height: size }}  
        className=" w-[90%] max-w-6xl flex pb-10 bg-black rounded-3xl overflow-hidden">
            <img src={fotoLink}
             className="w-1/2 h-full object-cover"
              />
            <div className="w-1/2 p-10 flex flex-col justify-center">
                <h2 className="text-[#A78BFA] text-4xl">{titulo}</h2>
                <p className="text-[#A78BFA]" mt-6>{texto}</p>
            </div>
        </div>
    )
};

export default MomoBoxEsquerda