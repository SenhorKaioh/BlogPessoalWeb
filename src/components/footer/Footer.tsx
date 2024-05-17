import { GithubLogo } from "@phosphor-icons/react/dist/icons/GithubLogo";
import { InstagramLogo } from "@phosphor-icons/react/dist/icons/InstagramLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/icons/LinkedinLogo";


function Footer(){
    return(
<>
<footer className="bg-indigo-900 text-white py-6">
  <div className="container flex flex-col items-center py-4">
  <p className='text-xl font-bold'>Blog Pessoal  |  Caio Pereira </p>
  <p className='text-lg'>Acesse minhas redes sociais:</p>
        <div className='flex gap-2'> 
        <LinkedinLogo size={32} />
        <InstagramLogo size={32} />  
        <GithubLogo size={32} />           
            </div>
      </div>
    </footer>
        </>
);
}
export default Footer;