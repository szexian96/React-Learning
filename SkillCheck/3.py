def count(elements):
    if elements[-1] == '.':
        elements = elements[0:len(elements) - 1]
   
    if elements in dictionary:
        dictionary[elements] += 1
   
    else:
        dictionary.update({elements: 1})

Sentence = "In the near future, we will soon enter into the era of population decline and the super aging society called “The 100-Year Life”. At the same time, the era of “Society 5.0” will come due to the progress of technologies such as artificial intelligence (AI) and data science, which are called the fourth industrial revolution. Our university will construct our own educational system in the faculty of Informatics as well as the faculty of Nursing, assuming the structural changes in society due to “The 100-Year Life” and “Society 5.0”, and strive to develop the human resources required by society.The faculty of Nursing promotes the research on telenursing, which is necessary for the next generation of nursing, based on industry-academia collaboration. In terms of nursing education, this faculty provides students with practical learning at a variety of training institutes such as hospitals, community general support centers, special needs education schools and a visiting nursing station managed by NODAI support company limited. In addition, it provides opportunities for outbound exchange program in Canada for the purpose of learning nursing and healthcare from global perspectives. Students participating in this program will do a homestay and learn deeply not only practical English required in clinical practice but also local healthcare facilities by conducting field surveys.The faculty of Informatics promotes the improvement of the environment for Information and Communication Technology (ICT) education to provide advanced information literacy and to meet the students’ needs. In the summer of 2019, high-performance terminals and file servers were introduced into the computer training rooms to provide more practical education. In addition, as part of career support, extracurricular courses “Scola” have been held to acquire qualifications such as computer-related, English and accounting. Students can receive highly detailed and specialized instruction in a small group. These research and educational activities have been highly evaluated, and the employment rate of this faculty has remained so high. Our education through the two-faculty system, the faculty of Informatics and the faculty of Nursing, has also led to fulfill our mission to develop human resources who can contribute to society with ICT, keeping in mind the founding spirit of “Break through to the future” and the educational philosophy of “Modern Practical Sciences”. In the future, our university will create new knowledge through the synergistic effect of “Informatics” and “Nursing” and become a pioneer in society."

dictionary = {}

lst = Sentence.split()

for elements in lst:
    count(elements)
   
for allKeys in dictionary:
    if dictionary[allKeys] > 2:
        print ("Frequency of ", allKeys, end = " ")
        print (":", end = " ")
        print (dictionary[allKeys], end = " ")
        print() 