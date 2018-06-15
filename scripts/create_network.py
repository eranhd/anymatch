import networkx as nx
import json
import random


arr = [
    10, 5, 7, 12, 4, 4, 8, 15, 5
]
lists = []

for num in arr:
    G = nx.gnm_random_graph(num, num * 3, random.uniform(0,1), True)
    lists.append(nx.to_dict_of_lists(G))
with open('lists.json', 'w') as f:
    f.write(json.dumps(lists))
