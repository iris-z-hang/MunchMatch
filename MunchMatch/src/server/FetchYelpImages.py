import requests
import json
from math import sin, cos, sqrt, atan2, radians


#for a given Yelp restaurant ID, return 3 image urls of the restaurant
def get_image_urls(id):
    # loads API key from file
    api_key = open('../config/YelpAccess.txt', 'r').readlines()[0]

    # set the API endpoint you want to retrieve data from (based on given restaurant id)
    endpoint = "https://api.yelp.com/v3/businesses/" + id

    # add the API key to the request headers
    headers = {
    "Authorization": "Bearer %s" % api_key
    }

    # make the API request and store the response
    response = (requests.get(endpoint, headers=headers)).json()

    return response['photos']

def get_neighborhood_coordinate():
    # Load the JSON file
    with open('../../data/local-area-boundary.json') as f:
       data = json.load(f)
       

    # Extract the values associated with the name and geo_point_2d keys
    result = []
    for item in data:
       result.append({
           'name': item['name'],
           'geo_point_2d': item['geo_point_2d']
           })

    # Print the result
    print(result)

def calculate_distance_km(lat1,lon1,lat2,lon2):
    

    # Approximate radius of earth in km
    R = 6373.0

    lat1 = radians(lat1)
    lon1 = radians(lon1)
    lat2 = radians(lat2)
    lon2 = radians(lon2)

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c

    print("Result: ", distance)








     


