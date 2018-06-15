import pymongo
from collections import Counter
from pymongo import MongoClient

client = MongoClient('localhost', 27017)

statistics = {}
db = client.anymatch
col = db.layers5b200a733cd980e1be7de9a1

for post in col.find():
    if post['groups']:
        groups = post['groups']
        for cla in groups:
            for id in cla:
                doc = db.users.find_one({'_id': id})
                num_of_choice = '{}'.format(len(doc['positivePrefer']))
                if not num_of_choice in  statistics:
                    statistics[num_of_choice] = []
                statistics[num_of_choice].append(0)
                for pref in doc['positivePrefer']:
                    if pref in cla:
                        statistics[num_of_choice][-1] += 1

# print(statistics)
for s in statistics:
    statistics[s].sort()
    count = Counter(statistics[s])
    print('{}: {}'.format(s, count))

