import sys, os
import random
import time
import json
import pymongo
from pymongo import MongoClient


names = [
    'Jefferson Fleischman',
    'Valentin Marland',
    'Dane Hedley',
    'Branden Gowen',
    'Antwan Baril',
    'Darcey Sanderson',
    'Phyliss Bivins',
    'Celestina Ament',
    'Darcy Robards',
    'Nolan Passmore',
    'Quinn Criado',
    'Delia Mcardle',
    'Marilou Patz',
    'Velvet Gondek',
    'Meggan Liles',
    'Dori Cordoba',
    'Cecily Barnard',
    'Basilia Geisler',
    'Brenna Cearley',
    'Karon Nee',
    'Phyllis Keplinger',
    'Juliette Peavler',
    'Chiquita Seldon',
    'Micha Alderson',
    'Lauri Sigmund',
    'Lovetta Timmerman',
    'Myesha Lupton',
    'Bethann Nold',
    'Kiana Radel',
    'Tierra Izaguirre',
    'Amelia Rambert',
    'Alyse Junkins',
    'Felix Didion',
    'Jamal Seegmiller',
    'Shanna Ahumada',
    'Chau Fullmer',
    'Fairy Bickel',
    'Maryann Shrum',
    'Casandra Mcfaddin',
    'Ayanna Macey',
    'Tracy Cain',
    'Jackie Higgins',
    'Renee Mullins',
    'Theresa Ellis',
    'Alma Watkins',
    'Darla Carter',
    'Ebony Carr',
    'Kenny Myers',
    'Wendy Owen',
    'Julius Hicks',
    'Jeremy Fowler',
    'Jeannette Harmon',
    'Erma Garrett',
       'Rudy Carson',
       'Abel Estrada',
       'Katherine Lane',
       'Taylor Roy',
       'Willie Mcgee',
       'Bob Ramirez',
       'Christopher Walters',
       'Hope Love',
       'Harold Schultz',
       'Claire Herrera',
       'Darryl Bishop',
       'Muriel Morris',
       'Terrell Sutton',
       'Teresa Brown',
       'Sheldon Joseph',
       'Charles Garcia',
       'Spencer Ford',
       'Lucia Yates',
       'Beatrice Becker',
       'Lowell Singleton',
       'Annette Rios',
       'Allan Grant',
       'Gerard Price',
       'Paul Hudson',
       'Eileen Mcdaniel',
       'Molly Poole',
       'Jacqueline Stephens',
       'Bobby Park',
       'Ron Guerrero',
       'Erick Gardner',
       'Stuart Warner',
       'Dexter Dennis',
       'Alfonso Valdez',
       'Jimmie Burgess',
       'Julie Patton',
       'Krista Jennings',
       'Warren Pearson',
       'Lora Young',
       'Francis Gomez',
       'Jasmine Cannon',
       'Kristy Taylor',
       'Willie Malone',
       'Alberta Dawson',
       'Leticia Cruz',
       'Clyde Holloway',
       'Sidney Richards',
       'Willis Knight',
       'Byron Medina',
       'Eleanor Tate',
       'Inez Harper',
       'Gene Erickson',
       'Archie Moore',
       'Travis Goodwin',
       'Pam Gutierrez',
       'Anna Osborne',
       'Marilyn Anderson',
       'Rose Jacobs',
       'Jeff Thornton',
       'Viola Byrd',
       'Roosevelt Weaver',
       'Julio Green',
       'Tammy Munoz',
       'Josefina Payne',
       'Garrett Walsh',
       'Bill Gross',
       'Vicki Sparks',
       'Carroll Bowers',
       'Johnnie Adkins',
       'Roberta Burton',
       'Sally Powers',
       'Jackie Gilbert',
       'Kathy Franklin',
       'Margie Rodgers',
       'Tricia Floyd',
       'Billie Burns',
       'Rodolfo Ryan',
       'Gerald Paul',
       'Joey Johnston',
       'Martin Sanders',
       'Tina Owens',
       'Yvonne Reese',
       'Rosie Cross',
       'Lance Webster',
       'Stella Ortiz',
       'Arthur Moreno',
       'Carla Martinez',
       'Lorraine Wade',
]

size = 80

array = []
gender = ['female', 'male']
counter = 0
#init array
for number in range(80):
    ts = time.time()
    person = {
        'fname': names[counter].split(' ', 1)[0],
        'lname': names[counter].split(' ', 1)[1],
        'username': '{}'.format(random.randint(12345,90000)),
        'positivePrefer': [],
        'negativePrefer': [],
        'permission': 'student',
        'gender' : gender[random.randint(0,1)],
        'schoolId': '5b200a733cd980e1be7de9a1',
        'layerId': '5b200bc63cd980e1be7de9a2',
        '_id': '{}{}{}'.format(random.randint(100, 999), ts, random.randint(100, 999))
    }
    array.append(person)
    counter += 1


#init prefer
for person in array:
    choose = []
    for number in range(3):
        index = random.randint(0, size -1)
        # negative_inedx = random.randint(0, 59)
        random_choice = random.randint(0, 1)
        if (not index == number) and not index in choose:
            choose.append(index)
            person['positivePrefer'].append(array[index]['_id'])
            # if (not negative_inedx == number) and not negative_inedx in choose and random_choice == 1:
            #     person['negativePrefer'].append(array[negative_inedx]['_id'])
    
data_file = open('data.json', 'w+')
data_file.write(json.dumps(array))
client = MongoClient('localhost', 27017)
db = client.anymatch
users = db.users
users.remove({'layerId': '5b200bc63cd980e1be7de9a2'})
users.insert_many(array)
db.layers5b200a733cd980e1be7de9a1.update({}, {'$unset': {'groups':1}}, multi=True)
