import express from "express";
import routerTask from "../routes/task";

interface PathConfig{
    task  : string
    // login : string
}

class Server{

    private app  : any;
    private port : number;
    private path : PathConfig;

    constructor(){
        this.app = express();
        this.port = 3500;
        this.path ={
            'task' : '/api/task',
            // 'login' : '/api/login'
        }

        // this.dbConnection();
        this.middlewares();
        this.routes();
    }

    // async dbConnection(){
    //     try {
    //         await db.authenticate();
    //         // console.log('database online');
    //     } catch (error) {
    //         throw new Error( error );
    //     }
    // }

    middlewares(){

        // this.app.use( cors() );

        this.app.use( express.json() );
    }

    routes(){
        this.app.use(this.path.task,routerTask);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('server online in the port : ', this.port);
        });
    }
}

export default Server;