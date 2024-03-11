


import pymongo
import time
from datetime import datetime

# Connect to the server
client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client['TODO']
collection = db['Tasks']


def datetime_to_string(day, month, year, hour, minute):

    dt_obj = datetime(year, month, day, hour, minute)
    
    formatted_string = dt_obj.strftime("%Y-%m-%d %H:%M")

    return formatted_string



# to add User
def Add_User( email : str , name : str , password : str  ) :

    try : 
        collection.insert_one({"_id" : email , "name" : name ,"password" : password ,"tasks" : None } )
        return [True,"Done"]
    except:
        return [False,"User already exists"]
    
def SignIn_User(email : str , password : str ):
    
    search = collection.find_one(
                {"_id" : email }
            )
    print("Here")

    if(search):
        if(search['password'] != password):
             return [False,"Incorrect Values"]
        else :
            return [True,search["_id"]]
    else :
        return [False,"User Doesn't Exists"]
   


def add_task(
            email : str ,
            task : str ,
            dead_line_day ,
            dead_line_month ,
            dead_line_year ,
            dead_line_hour ,
            dead_line_minute ,
            started : bool = False
        ) :
    
        new_task = {
                task : {
                        "added_at" : time.asctime(),
                        "dead_line" : datetime_to_string(dead_line_day,dead_line_month,dead_line_year,dead_line_hour,dead_line_minute),
                        "status" : started
                    }
                }
        
        search = collection.find_one(
                {"_id" : email }
            )
        

        if(search):
            if search["tasks"] == None :
                 search["tasks"] = new_task
            else :
                search["tasks"].update( new_task)
            collection.update_one(
                {"_id" : email } ,
                {"$set" : {"tasks" : search["tasks"]}}
            )
        else :
            print("Does not exists")



# ################################################################
#                        Update Task

def update_task(
            email : str ,
            old_task : str ,
            new_task : str ,
            new_dead_line_day : int,
            new_dead_line_month : int ,
            new_dead_line_year : int ,
            new_dead_line_hour : int ,
            new_dead_line_minute : int ,
            new_status : bool = None,
    )-> bool :

            search = collection.find_one(
                {"_id" : email }
            )
            if search == None : 
                return

            # search if there already exits a task for same name
            if old_task != new_task :
                
                try:
                    search["tasks"][new_task]
                    return False
                except :
                    """eat five start do nothing """
                    pass


            
            try:
                # try to search the time it's added
                # also see if the old task is there or not
                added_time = search["tasks"][old_task]["added_at"]
                
                # if started is None then take the previous state status
                
                if new_status == None :
                    new_status = search["tasks"][old_task]["status"]
                
                # updated new_task
                    
                new_task = {
                    new_task : {
                            "added_at" : added_time,
                            "dead_line" : 
                                datetime_to_string(
                                        new_dead_line_day,
                                        new_dead_line_month,
                                        new_dead_line_year,
                                        new_dead_line_hour,
                                        new_dead_line_minute
                                    ),
                            "status" : new_status
                        }
                }

                if(old_task != new_task ):
                    del search["tasks"][old_task]

                search["tasks"].update(new_task)

                collection.update_one(
                    {"_id" : email } ,
                    {"$set" : {"tasks" : search["tasks"] } }
                )
                return True

            # TODO:: 
            except :

                print("error")
            
                return False

            


















