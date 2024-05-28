import { GithubLogo } from "@phosphor-icons/react/dist/icons/GithubLogo";
import { InstagramLogo } from "@phosphor-icons/react/dist/icons/InstagramLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/icons/LinkedinLogo";
import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";


function Footer(){

let data = new Date().getFullYear()

const {usuario} = useContext(AuthContext)

let component: ReactNode

if (usuario.token !== ""){

component = (

<footer className="bg-indigo-900 text-white py-6">
  <div className="container flex flex-col items-center py-4">
  <p className='text-xl font-bold'>Blog Pessoal Caio |  Copyright: {data} </p>
  <p className='text-lg'>Acesse minhas redes sociais:</p>
        <div className='flex gap-2'>        
        <Link
                  to={"https://www.linkedin.com/in/caio-pereira-dos-santos-dev/"}
                  className="group"
                  target="_blank"
                >
                <LinkedinLogo size={32}  />
                  </Link>   
                  <Link
                  to={"https://www.instagram.com/senhor.kaioh/"}
                  className="group"
                  target="_blank"
                >
                <InstagramLogo size={32} />  
                  </Link>
                  <Link
                  to={"https://github.com/SenhorKaioh"}
                  className="group"
                  target="_blank"
                >
          <GithubLogo size={32} />   
                  </Link>      
        
            </div>
      </div>
    </footer>

)

}


    return(
<>
   {component}
        </>
);
}
export default Footer;