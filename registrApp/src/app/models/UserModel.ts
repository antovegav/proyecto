export class UserModel {
    constructor(
        public type: string,
        public rut: string,
        public nombre: string,
        public apellido: string,
        public nacimiento: Date | undefined,
        public email: string,
        public password: string
    ) { }
}	