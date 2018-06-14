import pymongo
from collections import Counter
from pymongo import MongoClient

client = MongoClient('localhost', 27017)

statistics = []
db = client.anymatch
col = db.layers5b200a733cd980e1be7de9a1
index = 0
for post in col.find():
    if post['groups']:
        groups = post['groups']
        for cla in groups:
            for id in cla:
                doc = db.users.find_one({'_id': id})
                statistics.append(0)
                for pref in doc['positivePrefer']:
                    if pref in cla:
                        statistics[index] += 1
                index +=1

statistics.sort()
count = Counter(statistics)
print(count)

