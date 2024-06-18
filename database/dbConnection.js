
import mysql from "mysql2"

export const dbConnection = ()=> {

   const conn =  mysql.createConnection("mysql://uxfxab6lxcqsg1wn:E575EL1RSrCzhcHFr3IO@b7ckvyxgpq3djwbrgobh-mysql.services.clever-cloud.com:3306/b7ckvyxgpq3djwbrgobh")

     conn.connect( (err)=> {
        if(err) return console.log("database error");
        console.log("database connected success");
     } )
     return conn
}