import { gql } from 'apollo-server-express';

const tiposUsuario= gql`

    type Usuario{
        _id:ID!
        nombre:String!
        apellido:String!
        identificacion:String!
        correo:String!
        estado:Enum_EstadoUsuario
        rol:Enum_Rol!
        inscripciones:[Inscripcion]
        proyectosLiderados:[Proyecto]
    }

    type Query{
        Usuarios:[Usuario]
        Usuario(_id:String!):Usuario
<<<<<<< HEAD
        Estudiantes(rol:Enum_Rol!):[Usuario]
=======
>>>>>>> test
        ProyectosLiderados(_id:String!):Usuario
        SolicitudesInscripcion(_id:String!):Usuario
    }

    type Mutation{
        crearUsuario(
            nombre:String!
            apellido:String!
            identificacion:String!
            correo:String!
            estado:Enum_EstadoUsuario
            rol:Enum_Rol!
        ):Usuario

        eliminarUsuario(
            _id:String
            correo:String
        ):Usuario

        editarUsuario(
            _id:String!
            estado:Enum_EstadoUsuario!
        ):Usuario
        
        editarEstudiante(
            _id:String!
            estado:Enum_EstadoUsuario!
        ):Usuario
        
        
        editarPerfil(
            _id:String!
            nombre:String!
            apellido:String!
            identificacion:String!
            correo:String!
        ):Usuario
    }
`;

export {tiposUsuario};