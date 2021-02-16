users=list()
id=1
class User():
    def __init__(self,_ad,_soyad,_id):
        self.Id=_id
        self.Ad=_ad
        self.Soyad=_soyad
    def ShowUserData(self):
        print(f"{self.Id} | {self.Ad} | {self.Soyad}")

commandList=[
    "1. Yeni istifadəçi əlavə et ",
    "2. Bütün istifadəçilər",
    "3. Seçilən istifadəçini sil",
    "4. Seçilən istifadəçinin məlumatlarını dəyişdir",
    "5. Əsas menunu göstər"
]
def start():
    for item in commandList:
        print(item)

def addNewUser():
    global id
    ad=input('Ad: ')
    soyad=input('Soyad: ')
    user=User(ad,soyad,id)
    users.append(user)
    id+=1

def ShowAllUsers():
    for user in users:
        user.ShowUserData()




def deleteUser():
    id=int(input('Silmek istediyiniz istifadecinin id-sini daxil edin :'))
    for user in users:
        if user.Id==id:
            users.remove(user)

def updateUser() :
        update_id=int(input('Update elemek istediyiniz istifadecinin id-sini daxil edin:'))
    print("""
    1. Ad
    --------
    2. Soyad
    --------
    3. Her ikisi
    """)
    update_command=int(input("Deyismek istediyiniz hissenin emr nomresini yazin:"))
    if update_command==1:
        name=input("Yeni adi daxil edin")
        for user in users:
            if user.Id==update_id:
                user.Ad=name
    elif update_command==2:
        surname=input("Yeni soyadi daxil edin:")
        for user in users:
            if user.Id==update_id:
                user.Soyad=surname
    elif update_command==3:
        name=input("Yeni adi daxil edin:")
        surname=input("Yeni soyadi daxil edin:")
        for user in users:
            if user.Id==update_id:
                user.Ad=name
                user.Soyad=surname


while True:
    choise=input('emr nomresini daxil edin :')
    print('________________')
    if choise=='1' :
         addNewUser()
    elif choise=='2':
        ShowAllUsers()
    elif choise=='3':
        deleteUser()    
    elif choise=='4':
        updateUser()
    elif choise=='5':
        start()    

