import requests
import json
from math import sin, cos, sqrt, atan2, radians
import ProcessYelpAPI as processAPI


def write_neighborhood_json():
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


#returns the user input results, including selected neighborhood name, radius, list of preferred cuisine types
def get_user_results_dict():
    with open('../../data/user-results.json') as f:
       data = json.load(f)

    return data['User Results'][0]

#returns coordinates based on a given neighborhood name in a form of a list [lon,lat]
def get_neighborhood_coordinates(name):
    with open('../../data/neighborhood-centers.json') as f:
       data = json.load(f)
    for row in data:
        if row['name'] == name:
            return [row['geo_point_2d']['lon'],row['geo_point_2d']['lat']  ]

reqTest = {
    "User Results": [
    {
      "neighborhood": "Downtown",
      "radius": 1,
      "restaurant types": ["chinese"]
    }]
}


def main(req):

    #get user requirements to use as parameters in API call
    user_data_dict = req["User Results"][0]

    neighborhood = user_data_dict['neighborhood']
    radius = user_data_dict['radius']
    restaurant_types = ','.join(user_data_dict['restaurant types'])

    coordinates = get_neighborhood_coordinates(neighborhood)
    lon = coordinates[0]
    lat = coordinates[1]

    # loads API key from file
    api_key = open('../config/YelpAccess.txt', 'r').readlines()[0]

    # set the API endpoint you want to retrieve data from
    endpoint = "https://api.yelp.com/v3/businesses/search"

    # set the search parameters
    params = {
        'latitude':lat,
        'longitude':lon,
        'radius':radius*1000,
        "categories": restaurant_types,
        "limit": 10
    }

    # add the API key to the request headers
    headers = {
        "Authorization": "Bearer %s" % api_key
    }

    # make the API request and store the response
    response = (requests.get(endpoint, params=params, headers=headers)).json()

    # write to file (in JSON format)
    with open('../../data/UnprocessedYelp.json', 'w') as f:
    # write the JSON data to the file
        json.dump(response, f)

    jsonData =  processAPI.readJsonFromFile('../../data/UnprocessedYelp.json')
    processedYelpData = {"Restaurant data": []}
    processAPI.processData(jsonData, processedYelpData)
    #processAPI.writeJsonToFile(processedYelpData, '../../data/ProcessedYelp.json')

    return processedYelpData
