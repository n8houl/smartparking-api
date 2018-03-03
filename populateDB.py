import requests
import json

class Pos:
	def __init__(self, lat, lng):
		self.lat = lat
		self.lng = lng

garages = {'A': 1623, 'B': 1259, 'C': 1852, 'D': 1241, 'H': 1284, 'I': 1231, 'Libra': 1007}
geoInfo = {'A': Pos(28.599782, -81.205827), 'B': Pos(28.596813, -81.200324), 'C': Pos(28.602423, -81.195915), 'D': Pos(28.604942, -81.197189), 'H': Pos(28.604960, -81.201156), 'I': Pos(28.601125, -81.204892), 'Libra': Pos(28.595973, -81.196675), 'Test': Pos(28.595973, -81.196675)}

"""
for key in garages.keys():
    for i in range(garages[key]):
        spotId = '%04d' % i
        url = 'http://localhost:3000/spots/%s' % key
        data = {"name" : "sensor_%s_garage%s" % (spotId, key.lower())}
        data_json = json.dumps(data)
        headers = {'Content-type': 'application/json'}

        ret = requests.post(url, data=data_json, headers=headers)
        print(ret.status_code)
"""

ret = requests.get('http://localhost:3000/api/login/postable-user')
token_data = json.loads(ret.text)
token = token_data['token']

for key in geoInfo.keys():
	p = geoInfo[key]
	lat = p.lat
	lng = p.lng
	name = "Garage"+key
	data = {"garage": name, "latitude": lat, "longitude": lng}
	data_json = json.dumps(data)
	headers = {'Authorization': 'Bearer %s' % token, 'Content-type': 'application/json'}

	ret = requests.post('http://localhost:3000/locations/%s' % key, data=data_json, headers=headers)
