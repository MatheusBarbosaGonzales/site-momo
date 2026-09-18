import background from "../assets/background.png";
import imagemFofa from "../assets/imagemFofa.jpeg";


const Gatuxa = () => {
    return (
 <main className="min-h-screen flex flex-col items-center justify-center " style={{ backgroundImage: `url(${background})` }}>
         <div className="w-[90%] max-w-6xl pt-10 flex pb-10 bg-black rounded-3xl overflow-hidden">
            
            <img src={imagemFofa}
             className="w-1/2 h-full object-cover"
              />
            <div className="w-1/2 p-10 flex flex-col justify-center">
                <h2 className="text-[#A78BFA] text-4xl">A muié mais linda do mundo</h2>
                <br />
                <p className="text-[#A78BFA]" mt-6>Quem é Suzana? Para muitas pessoas, uma menina simpatica, uma garota inteligente e dedicada, ou só uma amiga engraçada.
                    Mas pra mim, é muito mais que isso, pra mim? Ela é o meu grande motivo para levantar da cama todos os dias, ela é o minha flor, aquilo que eu pedi para Deus
                    sem parar, doideira né? 
                </p>
                <p className="text-[#A78BFA] pt-3" mt-6>Papo de olhar pra traz e lembrar de quanto tempo que eu gosto de você, fico tão feliz que você teve paciencia pra eu tomar
                    coragem pra finalmente chegar no meu momo e fazer alguma coisa, e cara.... Essa de fato foi a melhor decisão da minha vida todinha kkkk sério, absrudo.
                </p>

                <p className="text-[#A78BFA] pt-3" mt-6>
                    E pensar que fazem alguns dias que que a gente fez 9 meses de namoro, sabe quanto que é 9 meses de namoro? papo de 248 dias, 5952 horas, 357120 minutos, 
                    21427200 segundos. E pensar que eu já acho 10 minutinhos muito KKKKKKKKKKKKKKKKKKKKKKKKKKKKK (10 minutinho da tempo de fazer um filinho e sobra papo de 8 minutinhos)
                </p>

                  <p className="text-[#A78BFA] pt-3" mt-6>
                    Senhorita Suzana é a melhor Designer, artista, desenhista, cantora, montadora de cadeiras, monitores e braços mecanicos(kkkkkkk), escritora de cartas, fazedora
                    de cartinhas e de coisinhas manufaturadas, estilista(minha mió escolhedora de roupas e reparadora de sombrancelhas), designer de sombrancelha pleno
                </p>

                <p className="text-[#A78BFA] pt-3" mt-6>

                </p>
            </div>

        </div>
    </main>
    );
};

export default Gatuxa
