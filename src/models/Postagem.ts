import Tema from "./Tema";
import Usuario from "./Usuario";

export default interface Postagem{
    id: number;
titulo: string;
data: string;
tema: Tema | null;
usuario: Usuario | null;
}