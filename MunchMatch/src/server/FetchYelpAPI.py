import requests
import json

# loads API key from file
api_key = open('../config/YelpAccess.txt', 'r').readlines()[0]

# set the API endpoint you want to retrieve data from
endpoint = "https://api.yelp.com/v3/businesses/search"

# set the search parameters
params = {
    "location": "Vancouver, BC",
    "categories": "restaurants",
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