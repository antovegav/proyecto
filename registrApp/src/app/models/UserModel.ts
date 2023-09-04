export class UserModel {
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public userType: string,
        public username: string,
        public password: string,
    ) {

    }
    

    static crearUsuario(event: {
        id: number,
        nombre: string,
        apellido: string,
        userType: string,
        username: string,
        password: string,
    }) {
        return new UserModel(
            event.id,
            event.nombre,
            event.apellido,
            event.userType,
            event.username,
            event.password
        );
    }
}