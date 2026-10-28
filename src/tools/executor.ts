import { createBookingHandler } from "./handlers/createBooking.handler"
import { getBookingHistoryHandler } from "./handlers/getBookingHistory.handler"
import { seachPackagesHandler } from "./handlers/seachPackages.handler"

export const executeTools = async(name:string,args:any,user_id?:number) =>{
        switch(name){
            case "search_package" :{
               console.log("step1")
               return await seachPackagesHandler(args)
            }
            case "get_booking_history":{
              return await getBookingHistoryHandler(user_id!)
            }
            case "create_booking":{
              return await createBookingHandler(user_id!,args)
            }
            default:{
              throw new Error("Unknown tool")
            }
        }
}