# brew install mysql-connector-c
import mysql.connector as DB
import requests
import json

json_data=open('config.json').read()
data = json.loads(json_data)
db = DB.connect(user=data['db']['user'], 
                password=data['db']['pw'],
                host=data['db']['host'],
                database=data['db']['database'])

course_new=[]
mycursor = db.cursor()
mycursor.execute("SELECT id FROM course_new WHERE comment_num>0")
myresult = mycursor.fetchall()
ctr = 0
for x in myresult:
    course_new.append(x[0])
    ctr = ctr+1
print(ctr)


for c in course_new:
    URL = 'http://localhost:3000/course/'+str(c)
    r = requests.get(URL)
    print(URL)
    





