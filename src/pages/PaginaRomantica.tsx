import background from "../assets/background.png";
import MomoboxEsquerda from "../components/MomoBoxEsquerda.tsx"
import MomoboxDireita from "../components/MomoBoxDireita.tsx"
import maio_22 from "../assets/22_maio.png";
import maio_25 from "../assets/25_maio.jpeg";
import livroImage from "../assets/livinho.jpeg";
import fotinhaTrabaio from "../assets/fotinhaTrabaio.jpeg";
import junho_1 from "../assets/1_junho.jfif";
import julho_11 from "../assets/11_julho.jfif";
import junho_12 from "../assets/12_junho.jpeg";
import junho_13 from "../assets/13_junho.jfif";
import julho_16 from "../assets/16_julho.jfif";
import julho_17 from "../assets/17_julho.jpeg";
import junho_7 from "../assets/7_junho.jfif";
import julho_23 from "../assets/23_julho.jfif";
import junho_23 from "../assets/23_junho.jpeg";
import julho_25 from "../assets/25_julho.jpeg";
import julho_4 from "../assets/4_julho.jfif";
import julho_20 from "../assets/20_julho.jpeg";
import agosto_1 from "../assets/1_agosto.jfif";
import agosto_2 from "../assets/2_agosto.jpeg";
import agosto_7 from "../assets/7_agosto.jfif";
import agosto_10 from "../assets/10_agosto.jfif";
import agosto_12 from "../assets/12_agosto.jpeg";
import agosto_30 from "../assets/30_agosto.jfif";
import setembro_6 from "../assets/6_setembro.jpeg";
import mentalista from "../assets/mentalista.jfif";

const PaginaRomantica = () => {
    return(
    <main className="min-h-screen flex flex-col items-center justify-center " style={{ backgroundImage: `url(${background})` }}>
       <div className="bg-black/85 rounded-3xl p-10 max-w-3xl">
        <h2 className="text-4xl font-bold text-[#A78BFA]">
          OI AMOR, GATUXA, XUXU, TCHUTCHUCA, LINDA, PEFEITA, E ACIMA DE TUDO, MIHA LINDA NAMORADA
        </h2>

        <p className="text-[#A78BFA] mt-6">
          Feliz aniversário meu amor, infelizmente eu não sou que nem meu momo que é zika fazendo coisinhas na mão, então eu pensei, poxa, não vou conseguir fazer um livrinho ou uma
c         artinha a altura do que meu momo fez, então vou ter que inovar do meu jeitinho, ela é muito boa na parte artistica, eu dou meus pulos na parte da informática né kkkk,
          dei meus pulinhos pra desenvolver esse sitezinho pra momo, não pedi visual nenhum pra IA nem nada, e todas as imagens ou são fotinhas nossas ou são coisinhas que eu desenhei.

        </p>
        </div>

        <MomoboxEsquerda
        fotoLink={maio_22}
        titulo="DIA 22 DE MAIO"
        texto = "meu momo tava pegando o SSD e mi mandando fofinho, logo mais a gente tirou um dia pra eu mostrar minhas habilidades na computaria!!!!"
        size = "750px"
        />

        <MomoboxDireita
        fotoLink={maio_25}
        titulo="DIA 25 DE MAIO"
        texto="momo mim deu mais um presente, momo mim deu o controlão pro nintendo, que por sinal a gente PRECISA marcar pra jogar mais vezes!!! "
        size = "400px"
        />       
           <MomoboxEsquerda
         fotoLink={livroImage}
         titulo="COMPREI UM LIVRINHO PRA MOMO"
         texto="Lembro que você tava começando a falar sobre a pós e sobre voltar a estudar, você tinha comentando sobre esse livro na biblioteca do senac e eu na
         hora achei quer seria super legal pegar procê, fiquei com medo pq na época você falou que queria comprar, ai acabei dando spoiler :( Eu ti amu" 
         size = "700px"
        />
                   <MomoboxDireita
        fotoLink={fotinhaTrabaio}
         titulo="Fotinha de momo no trabaio"
        texto="Tava procurando umas fotinhas e vi essa aqui que está em Maio ainda, muié mais linda do mundo todinho. Achei importante colocar aqui :D"
        size = "800px"
        />
           <MomoboxEsquerda
        fotoLink={junho_1}
        titulo="DIA 1 DE JUNHO"
        texto="A gente foi no Vila, EU APRENDI A ANDAR DE BIKE COM MOMO (foi muito paciente cumigo, bigadu), a gente foi
         na festa junina que tinha aquele guarda malucão lá que era todo esquisito kkkkkkk. Lembro que a gente viu backrooms, não foi dos melhores filmes, mas foi um dia
         maravilhoso, até hoje fico titi que perdemos a fotinha da gente na bike."
         size = "500px"
        />
        <MomoboxDireita
        fotoLink={junho_7}
        titulo="7 DE JUNHO"
        texto="Aqui foi aonde a gente começou a ficar completamente viciado em comida japonesa e começamos a aproveitar tudo e do mío, até aprendi a usar a hachi. Até hoje
        num acredito que eu comia antes de você e você chegou, aprendeu E ME ENSINOU A USAR, CARA VC É TÃO ESPERTA 😭😭"
        size = "500px"
        />
        <MomoboxEsquerda
        fotoLink={junho_12}
        titulo="12 de Junho"
        texto=" Eu indo ai e errando TUDO NO ONIBUS, mas indo conhecer onde meu momozão trabaia :D, foi muito legal, lembro que eu dei um corridão pra pegar o onibus pra gente
, foi bacana. Gastei uns 60 conto no uber, alguma coisa assim KKKKKKKKKKKKKKKKKKK"
size = "400px"
        />
        <MomoboxDireita
        fotoLink={junho_13}
        titulo="13 de junho"
        texto="A GENTE NO JAPONES DO LADINHO DA SUA CASINHA LINDA. Esse dia foi engraçado, a gente viu o casal mais estranho do mundo, o veio da lancha com a interesseira
e o casal que o rapaz tava com aquela camisa do pacman e tava todo esquisitão kkkkk. Foi lá que meu momo descobriu a peça preferida dela do japones o Joe (que vinha um, mó
pobresa KKKKKKKK) (eu to te devendo o din din dequela vez ein)"
        size = "500px"
        />
        <MomoboxEsquerda
        fotoLink={junho_23}
        titulo="23 de junho"
        texto="Eu tava pensando em comprar o cubo mágico assim que eu tivesse com dinheiro, ai eu falei e você foi lá e comprou o cubo pra mim, eu fiquei tão feliz, bigado meu
        momo, pior que eu não tinha visto a mensagem na época, mas você mim falou que tinha e voltei pra ver né hehe"
        size = "700px"
        />
        <MomoboxDireita
        fotoLink={julho_4}
        titulo="4 de julho"
        texto="A GENTE INDO NO MILLENA SALGATERIA O MIO SALGADO QUE TA TENDO DE TODOS FOI UMA DELICIA E MUITO ZIKA, e eu ainda conheci a sua amiga a Gabi, a gente conversou
um monte e teve varias fofocas, foi mó legal, lembro que a gente depois foi pra sua primeira aula de voltante, foi tão legal"
        size = "700px"
        />
        <MomoboxEsquerda
        fotoLink={julho_11}
        titulo="11 de Julho"
        texto="Mandei fotinhas das coisinhas que eu tava montando no mapinha do Mine, durou pouco mais foi muito legal a gente construindo juntinhos. Por mais que eu tenha
jogado bastante do mapa sozinho, fiquei muito feliz pq a maior parte do tempo eu gastei tentando fazer coisinhas pra fazer a sua vida melhor "
        size = "500px"
        />
        <MomoboxDireita
        fotoLink={julho_16}
        titulo="16 de julho "
        texto="Esse dia você veio em casa pra fazer home, não lembro exatamente o que aconteceu, acho que você tinha ficado sem internet ou algo do tipo, lembro que a gente
        ficou mó animado, eu te amo tanto"
        size = "700px"
        />
        <MomoboxEsquerda
        fotoLink={julho_17}
        titulo="17 de julho"
        texto="O DIA QUE CHEGOU AS COISINHAS DO MEU FONE, QUE MELHOROU A VIDA TIPO 20931039281032%"
        size = "150"
        />
        <MomoboxDireita
        fotoLink={julho_20}
        titulo="20 de julho"
        texto="O dia que a gente acordou cedão, dormiu na estrada, fomos no casamento do Allan, você ficou toda GATA e a gente ficou com mó frio lá KKKKKKKKK. Fiquei tão feliz
        que a gente pode compartilhar essa momentinho juntinhos e tirar umas das minhas fotinhas preferidas"
        size = "900px"
        />
        <MomoboxEsquerda
        fotoLink={julho_23}
        titulo="23 DE JULHO"
        texto="MINHA FOTO COMENDO CENOURA, PaLANTRAAAAAAAA (você mandou pra eu tinha pedido umas fotinhas pra você, coletando as imagens eu vi essa pérola e não podia deixar
        de colocar ela aqui kkkkkk eu te amo)"
        size = "600px"
        />  
        <MomoboxDireita
        fotoLink={julho_25}
        titulo="25 DE JULHO"
        texto="O dia que meu momo montou o braço e a cadeira, praticamente sozinha, pq meu momo é simplesmente muito zika e absurdamente zika no bagulho"
        size = "700px"
        />
        <MomoboxEsquerda
        fotoLink={agosto_1}
        titulo="1-2 De agosto"
        texto="Niver do meu papis, chegamos mó tarde em casa. Lembro da gente correndo infinito pra chegar na Americanas pra comprar chocolatinho e pegando uma pipoca
        com manteiga que parecia que nem manteiga tinha, mas o M&M tava zika dms"
        size = "500px"
        />  
        <MomoboxDireita
        fotoLink={agosto_2}
        titulo="2 de agosto"
        texto=" a gente foi no aniversario da Mariana mais tarde e a gente se arrependeu depois KKK mas a gente viu as aulinhas de dança com o Didi, falando nisso ta na lista
        de coisnhas que a gente precisa fazer einnn"
        size = "700px"
        />
        <MomoboxEsquerda
        fotoLink={agosto_7}
        titulo="7 de agosto"
        texto=" A FOTO DA NINA NO SOFA KKKKKKK PARECE QUE ELA TIROU A FOTO. Outra das minhas fotinhas preferidas, eu amo tirar fotinhas só pra mandar pro meu momo"
        size = "150"
        />  <MomoboxDireita
        fotoLink={agosto_10}
        titulo="10 de agosto"
        texto="O dia que batemos o carro, graças a Deus deu tudo certo, uma segunda feira, de fato. Fiquei com medo de preocupar momo, mas graças a Deus deu nada. Nossa, tava
        com mó fome esse dia e ainda fiquei esperando essa bomba de guincho chegar, fiquei bravo esse dia kkkkkkkk"
        size = "500px"
        />
        <MomoboxEsquerda
        fotoLink={agosto_12}
        titulo="12 de Agosto"
        texto="começando a fazer a Landing page com momo, momo me ajudando a fazer a melhor landing page do mundo todinho e você também começou a ver o mentalista"
        size = "150"
        />  <MomoboxDireita
        fotoLink={mentalista}
        titulo="Agosto ainda"
        texto=" não lembro o dia exatamente, mas a gente viu mentalista juntinhos, ai viciamos kkkkkkkk"
        size = "700px"
        />
        <MomoboxEsquerda
        fotoLink={agosto_30}
        titulo="30 de agosto"
        texto="fomos comer em um restaurante super romantico, comemos a melhor pizza que eu já comi na vida e fiquei todo arrumadinho pra momo, passei a vergonha de não passar
        meu vale refeição KKKKKKKKKKKK. Fiquei muito contente que a gente pode sair assim e queria poder sair com momo assim mais vezes"
        size = "500px"
        />
        <MomoboxDireita
        fotoLink={setembro_6}
        titulo="6 de setembro"
        texto=" A GENTE FOI, A GENTE TENTOU FAZER O COOKIE, APRENDEMOS QUE PRECISAMOS DEIXAR ELE FORA DO FORNO UM TEMPO PRA DAR CERTO, MOMO MIM ESCRAVIZOU PRA FAZER OS COOKIES,
        aprendi bastante coisa nova, foi literalmente um sucesso, fiquei super feliz e estava uma DELICIA. Acho que a gente acabou ficando mais tempo do que deveria fazendo,
        mas foi muito maneiro, finalmente vencemos o cookie, o tão temido cookie"
        size = "700px"
        />
        <MomoboxEsquerda
        fotoLink=""
        titulo="7 de setembro"
        texto="A gente foi no busca busca e compramos um monte de coisa super bacana, pena q eu tava pobre imundo coitado"
        size = "150"
        />

        <div className="bg-black/85 rounded-3xl p-10 max-w-3xl">
        <h2 className="text-4xl font-bold text-[#A78BFA]">
          NOTA MUITO IMPORTANTE ÉPICA LEGAL IMPORTANTE LEGAL :D
        </h2>

        <p className="text-[#A78BFA] mt-6">
                Eu decidi esconder coisinhas nesse site, já que deixar só isso aqui não era o bastante né kkkk
        </p>
        <p className="text-[#A78BFA] mt-6">
                Então eu decidi esconder umas coisinhas nele, começa colocando /gatuxa que você vai ver um coisinha hehe
        </p>
        </div>

        
    </main>
    )
};

export default PaginaRomantica