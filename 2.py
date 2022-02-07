class person:
    def __init__(self, kg, m):
        self.kg = kg
        self.m = m

    def myfunc(self):
        bmi_self = self.kg / (self.m * self.m)
        
        if bmi_self < 18.5:
            print(round (bmi_self,2))
            print('痩せ型')
        elif bmi_self >= 18.5 and bmi_self < 25:
            print(round (bmi_self,2))
            print('普通体重')
        elif bmi_self >= 25 and bmi_self < 30:
            print(round (bmi_self,2))
            print('肥満（軽）')
        else:
            print(round (bmi_self,2))
            print('肥満（重）')


weight = float(input('Please key in you weight(kg):'))
height = float(input('Please key in you height:(m)'))

p1 = person(weight, height)
p1.myfunc()