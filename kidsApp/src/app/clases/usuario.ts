export class User {
    public auth_id: string;
    public email: string;
    public id: string;
    public nombre: string;
    public perfil: string;
    public sexo: string;
    /**
     *
     */
    constructor(auth_id: string, email: string, id: string, nombre: string, perfil:string, sexo:string) {
        this.auth_id = auth_id;
        this.email = email;
        this.id = id;
        this.nombre = nombre;
        this.perfil = perfil;
        this.sexo = sexo;
    }
}