
export class Usuario {
    constructor(
        public nombre: string,
        public apellidos: string,
        public email: string,
        public password: string,
        public trabajoActual?: string,
        public nickname?: string,
        public img?: string,
        public role?: string,
        public google?: boolean,
        public id?: string
    ) {}
}
