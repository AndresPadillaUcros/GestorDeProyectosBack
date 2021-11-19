import conectarBD from "./db/db";
import {UserModel} from "./models/user";
import { Enum_Rol } from "./models/enums";
import { ProjectModel } from "./models/proyect";
import { ObjectId } from "mongoose";
    

const main = async () =>{
    await conectarBD();

/*     ProjectModel.create({
        nombre:"Proyecto 1",
        presupuesto:120,
        fechaInicio: Date.now(),
        fechaFin: new Date("2022/11/10"),
        lider:'619807960c80d61016e688e2'
    }) */

    const proyecto: any = await ProjectModel.find({nombre:"Proyecto 1"});
    console.log('el proyecto es:', proyecto, proyecto[0].lider);

    const lider = await UserModel.find({_id:proyecto[0].lider});
    console.log('el lider del proyecto es:', lider);
};

main();

        //C R U D    U S U A R I O S 
/*     //CREAR USUARIO
    await UserModel.create({
        correo:"besttss@hot.com",
        identificacion:"33310",
        nombre:"bes",
        apellido:"acas",
        rol:Enum_Rol.lider,
        })
        .then((u)=>{
            console.log("usuario creado",u);
        })
        .catch(e=>{
            console.log("Error creado el usuario",e)
        });

    // OBTENER LOS USUARIOS
    await UserModel.find().then((u)=>{
        console.log("usuarios",u);
        }).catch(e=>{
            console.error("error obteniendo los usuarios",e)
        });



    //EDITAR UN USUARIO
    await UserModel.findOneAndUpdate(
        {correo:"andres@hot.com"},
    {
        nombre:"Juan",
        apellido:"Lopez",
        })
        .then((u)=>{
            console.log("usuario actualizado",u);
        })
        .catch(e=>()=>{
            console.error("error actualizando",e);
        });

    //ELIMINAR UN USUARIO
    await UserModel.findOneAndDelete(
        {correo:"andres@hot.com"})
        .then((u)=>{
            console.log("usuario eliminado",u);
        })
        .catch(e=>()=>{
            console.error("error eliminando",e);
        }); */
