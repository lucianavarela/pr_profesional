export class Image {
    public key: string;
    public cualidad: string;
    public creador: string;
    public fecha: string;
    public ruta: string;
    public votos: number;
    /**
     *
     */
    constructor(cualidad: string, creador: string, ruta: string, votos: number, fecha?:string) {
        if (fecha) {
            this.fecha = fecha;
        } else {
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth() + 1;
            let yyyy = today.getFullYear();
            this.fecha = mm + '/' + dd + '/' + yyyy;
        }

        this.cualidad = cualidad;
        this.creador = creador;
        this.ruta = ruta;
        this.votos = votos;
    }
}