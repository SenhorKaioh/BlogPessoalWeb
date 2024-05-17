function Navbar(){  
    return(
        <>
        <nav>
         <div className="bg-indigo-900 flex items-center gap-4 text-white justify-center py-2">
            <div className="container grid grid-cols-2 flex justify-between text-lg">
            <div className="text-2xl font-bold uppercase">BLOG PESSOAL</div>

            <div className="flex gap-4">
                    <div>Login</div>
                    <div>Home</div>
                    <div>Postagens</div>
                    <div>Temas</div>
                    <div>Cadastrar Tema</div>
                    <div>Perfil</div>
                    <div>Sair</div>
            </div>
           </div>
         </div>
         </nav>
        </>
);
}
    
export default Navbar;