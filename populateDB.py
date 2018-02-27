import requests
import json

garages = {'A': 1623, 'B': 1259, 'C': 1852, 'D': 1241, 'H': 1284, 'I': 1231, 'Libra': 1007}

for key in garages.keys():
    for i in range(garages[key]):
        spotId = '%04d' % i
        url = 'http://localhost:3000/spots/%s' % key
        data = {"name" : "sensor_%s_garage%s" % (spotId, key.lower())}
        data_json = json.dumps(data)
        headers = {'Content-type': 'application/json'}

        ret = requests.post(url, data=data_json, headers=headers)
        print(ret.status_code)
