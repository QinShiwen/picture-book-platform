
from flask import Flask
from flask_cors import CORS
from flask import request

app = Flask(__name__)
CORS(app, supports_credentials=True) #支持跨域

import json
import pymysql  #链接数据库
import os #文件流
import shutil   #文件夹操作
import datetime #时间
# 打开数据库连接
db = pymysql.connect(host = 'localhost', 
                     user = 'userInfo',
                     password = '8B4FLdtPk2W2LpXt',
                     database = 'userinfo')
#数据库执行连接
cursor = db.cursor()
db.ping()

#存储位置
basefile = '用户数据地址'

#防止连接数据库时间过长断开
def connectDatabase():
    return 1

#注册业务
@app.route('/register',methods = ['POST'])
def register():
    username = request.get_json()['name']
    userpassword = request.get_json()['password']
    userid = request.get_json()['userid']
    
    os.chdir('项目地址')
    
    global db
    db.ping()
    cursor = db.cursor()
    searchuser = "SELECT UserName FROM userinfo WHERE UserName = '" + username +"'"
    cursor.execute(searchuser)
    db.commit()
    data = cursor.fetchall()
    print(data)
    if(data):
        return{
            'result':'hasUser'
        }
    else:
        addnewuser = "INSERT INTO userinfo(UserName,PassWord,UserID) VALUES('"+username+"','"+userpassword+"','"+userid+"')"

        cursor.execute(addnewuser)
        db.commit()
        print(1)
        #创建该用户专属绘本文件夹 userid为文件夹名字
        pathbook = "UserPicBook/"+userid
        os.makedirs(pathbook)
        print(2)
        return {'result':'success'}


#登陆业务
@app.route('/login',methods = ['POST'])
def login():
    username = request.get_json()['username']
    userpassword = request.get_json()['password']

    global db
    db.ping()
    cursor = db.cursor()
    os.chdir('项目地址')
    #检索是否存在该用户
    searchuser = "SELECT UserName,PassWord,UserId FROM userinfo"
    #try:
    cursor.execute(searchuser)
    data = cursor.fetchall()
    for row in data:
        name = row[0]
        password = row[1]
        if((name == username) and (password == userpassword)):
            print(222)
            #if(password == userpassword):  #若找到该用户
            userinfo = {
                'name':row[0],
                'userid':row[2],
                'userbooks':[],
                'collectbooks':[]
            }
            #检索用户自己的绘本
            searchbook = "SELECT BookID,BookName,isPrivate,CreatorName,CreatorID FROM bookinfo"
            cursor.execute(searchbook)
            bookdata = cursor.fetchall()
            if(bookdata):
                for line in bookdata:
                    creatorid = line[4]
                    if(userinfo['userid'] == creatorid):
                        book = {
                            'bookid':line[0],
                            'bookname':line[1],
                            'isPrivate':line[2],
                            'creatorname':line[3],
                            'creatorid':line[4],
                        }
                        userinfo['userbooks'].append(book)
            #检索用户收藏的绘本
            searchbook = "SELECT BookName,BookID,CreatorName,UserID FROM collectbookinfo"
            cursor.execute(searchbook)
            bookdata = cursor.fetchall()
            if(bookdata):
                for line in bookdata:
                    userid = line[3]
                    if(userinfo['userid'] == userid):
                        book = [line[0],line[1],line[2]]
                        userinfo['collectbooks'].append(book)
            return {
                'result':'success',
                'userinfo':userinfo
            }
    return{
        'result':'fail'
    }


#新建书本    
@app.route('/createbook',methods = ['POST'])
def createBook():
    bookname =  request.get_json()['bookname']
    bookid = request.get_json()['bookid']
    isprivate = request.get_json()['isprivate']
    creatorname = request.get_json()['creatorname']
    creatorid = request.get_json()['creatorid']
    
    global db
    db.ping()
    cursor = db.cursor()
    
    #获取当前时间
    nowtime = str(datetime.datetime.now())
    #新建绘本
    os.chdir('项目地址')
    addbook = "INSERT INTO bookinfo(BookID,BookName,isPrivate,CreatorName,CreatorID,createDate) VALUES('"+bookid+"','"+bookname+"','"+isprivate+"','"+creatorname+"','"+creatorid+"','" + nowtime + "')"
    
    cursor.execute(addbook)
    db.commit()
    
    #创建该绘本专属存储文件(绘本信息+图片+音频)
    os.chdir('UserPicBook/'+creatorid)
    os.makedirs(bookid)
    os.chdir(bookid)
    
    fileName = bookid+'.json'
    f = open(fileName,'w')

    #绘本默认样子
    
    picbook = {
        'theme':{ #主题
            'leftpage':"#61649F",
            'rightpage':"#DEF0FC",
            'fontcolor':"black"
        },
        'slideArray':[  #所有绘本页
            {
                'indexid':0,    #当前页下标
                'picurl':'',    #本页图片URL
                'picwidth':0,
                'picheight':0,
                'content':[     #本页所有段落
                    #第一段
                    [{
                        'text':"请输入本句内容",    #本段第一句
                        'voiceurl':''   #当前句子匹配音频
                    }]
                ],
                'isDel':False,  #本页是否可以被删除
                'isEd':True     #本页是否可以被编辑
            }
        ],
    }
    
    json.dump(picbook,f)
    f.close()
    
    return {
        'result':'success'
    }
    
#删除书本
@app.route('/deletebook',methods = ['POST'])
def deletebook():
    bookid = request.get_json()['bookid']
    userid = request.get_json()['userid']
    
    global db
    db.ping()
    cursor = db.cursor()
    
    os.chdir('用户数据地址')
    
    #删除绘本
    deletebook = "DELETE FROM bookinfo WHERE BookID = '" + bookid + "'"
    cursor.execute(deletebook)
    db.commit()
    os.chdir('用户数据地址'+userid)
    shutil.rmtree(bookid)
    
    os.chdir('用户数据地址')
    
    return {
        'result':'success'
    }
    
    
#修改书本基本信息
@app.route('/editbook',methods = ['POST'])
def editbook():
    bookid = request.get_json()['bookid']
    bookname = request.get_json()['bookname']
    isprivate = request.get_json()['isprivate']
    userid = request.get_json()['userid']
    
    global db
    db.ping()
    cursor = db.cursor()
    
    #修改绘本基本信息
    editbook = "UPDATE bookinfo SET BookName = '" + bookname + "', isPrivate = '" + isprivate +"' WHERE BookID = '" + bookid + "'"
    cursor.execute(editbook)       
    db.commit()
    
    return {
        'result':'success'
    }


#获取选中绘本
@app.route('/getbook',methods = ['POST'])
def getbook():
    os.chdir('用户数据地址')
    bookid = request.get_json()['bookid']
    userid = request.get_json()['userid']
    
    #去往用户书本的文件夹
    os.chdir(userid+'/'+bookid)
    bookInfoFile = open(bookid+'.json','r')
    bookinfo = json.load(bookInfoFile)
    
    os.chdir('用户数据地址')
    return {
        'result':'success',
        'bookinfo':bookinfo
    }

#保存绘本
@app.route('/savebook',methods = ['POST'])
def savebook():
    userid = request.get_json()['userid']
    book = request.get_json()['book']
    bookid = request.get_json()['bookid']
    
    os.chdir('用户数据地址' + userid + '/' + bookid)
    
    fileName = bookid+'.json'
    bookfile = open(fileName,'w')
    json.dump(book,bookfile)
    bookfile.close()
    
    return { 'result':'success' }

#上传图片  
@app.route('/uploadimage',methods = ['POST'])
def uploadimage():
    #书本和作者名称
    uploadimg = request.files['file']
    #request.form获取传过来的data为immutableMutiDict格式  to_dict()转换成字典
    uploadinfo = request.form.to_dict()
    #传过来的data参数
    bookid = uploadinfo['bookid']
    userid = uploadinfo['userid']
    slideindex = uploadinfo['slideindex']
    
    #获取文件类型
    fileName = uploadimg.filename
    if fileName.split(".")[1].lower() == ".jpeg":
        fileName = slideindex + ".jpg"
    else:
        fileName = slideindex + ".png"
    
    print(fileName)
    
    #到达图片文件所在路径
    os.chdir('C:/MyWebsite/PicBook/UserPicBook/'+ userid +'/' + bookid)
    
    #判断是否存在图片 若存在则先删除
    if os.path.exists(slideindex+'.jpg'):
        os.remove(slideindex+'.jpg')
        uploadimg.save(os.path.join('用户数据地址',userid,bookid,fileName))
    elif os.path.exists(slideindex+'.png'):
        os.remove(slideindex+'.png')
        uploadimg.save(os.path.join('用户数据地址',userid,bookid,fileName))
    else:
        uploadimg.save(os.path.join('用户数据地址',userid,bookid,fileName))
        
    return {
        'result':'success',
        'imgurl':'用户数据地址' + userid +'/' + bookid + '/'+ fileName
    }
    
    
#上传本地音频
@app.route('/uploadvoice',methods = ['POST'])
def uploadvoice():
    voice = request.files['file']
    uploadinfo = request.form.to_dict()
    
    bookid = uploadinfo['bookid']
    userid = uploadinfo['userid']
    slideindex = uploadinfo['slideindex']
    contentindex = uploadinfo['contentindex'] #第几段
    index = uploadinfo['index'] #第几句
    
    #获取文件类型
    fileName =  voice.filename
    if fileName.split(".")[1].lower() == ".mp3":
        fileName = slideindex + contentindex+index + ".mp3"
    else:
        fileName = slideindex+contentindex+index + ".wav"
    
    print(fileName)
    
    #判断是否存在音频 若存在则先删除
    if os.path.exists(fileName):
        os.remove(fileName)
        voice.save(os.path.join('C:/MyWebsite/PicBook/UserPicBook/',userid,bookid,fileName))
        print(1)
    else:
        voice.save(os.path.join('C:/MyWebsite/PicBook/UserPicBook/',userid,bookid,fileName))
        print(2)
        
    return {
        'result':'success',
        'voiceurl':'保存图片的地址' + userid +'/' + bookid + '/'+ fileName
    }


#上传录制音频
@app.route('/uploadrecordvoice',methods = ['POST'])
def uploadrecordvoice():
    data  = request.files['file']
    userid = request.args["userid"]
    bookid = request.args["bookid"]
    #获取时间用时间命名
    nowtime = datetime.datetime.now()
    fileName = (str(nowtime.year)+str(nowtime.month)+str(nowtime.day)+str(nowtime.hour)+str(nowtime.minute)+str(nowtime.second)) + ".wav"
    path = basefile + '/' + userid + '/' + bookid + '/' + fileName 
    data.save(path)
    return {
        'result':'success',
        'voiceurl':'保存图片的地址' + userid +'/' + bookid + '/'+ fileName
    }

#绘本检索
@app.route('/search',methods = ['POST'])
def search():
    #获取书本名字
    searchbookname = request.get_json()['bookname']

    global db
    db.ping()
    cursor = db.cursor()
    
    searchbook = "SELECT BookID,BookName,isPrivate,CreatorName,CreatorID,createDate FROM bookinfo"
    cursor.execute(searchbook)
    bookdata = cursor.fetchall()
    
    booklist = []
    for line in bookdata:
        bookname = line[1]
        isprivate = line[2]
        if((bookname == searchbookname) and (isprivate==0)):
            bookinfo = { 
                'bookname':bookname,
                'bookid':line[0],
                'creatorname':line[3],
                'creatorid':line[4]
            }
            booklist.append(bookinfo)
    return {
        'result':'success',
        'booklist':booklist
    }

#绘本收藏
@app.route('/collect',methods = ['POST'])
def collect():
    collectbookname = request.get_json()['bookname']
    collectbookid = request.get_json()['bookid']
    userid = request.get_json()['userid']
    creatorname = request.get_json()['creatorname']

    global db
    db.ping()
    cursor = db.cursor()
    
    updatebook = "INSERT INTO collectbookinfo(BookName,BookID,CreatorName,UserID) VALUES('"+collectbookname +"','"+collectbookid+"','"+creatorname+"','"+userid+"')"
    cursor.execute(updatebook)       
    db.commit()
    return{
        'result':'success'
    }
    
    
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001)
