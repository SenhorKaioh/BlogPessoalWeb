import ListaPostagem from "../../components/postagem/listarpostagem/ListarPostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home(){
return(
  <>
  <div className="bg-indigo-900 w-screen flex justify-center ">
     <div className=" container grid grid-cols-2 text-white">
        <div className=" gap-4 flex flex-col items-center  justify-center py-4">
          <h2 className=" text-5xl font-bold">Seja Bem Vindo!</h2>
          <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>
          <div className="">
           <ModalPostagem />
            </div>
        </div>
        <div className="flex ">
          <img src="https://imgur.com/VpwApCU.png"
          alt="Imagem da Página da Home" 
          width="400px"
          />
        </div>   
     </div> 
  </div>
  <ListaPostagem /> 
  </>
);
}
export default Home;