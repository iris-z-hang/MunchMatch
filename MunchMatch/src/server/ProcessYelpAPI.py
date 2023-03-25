import json
import requests


def readJsonFromFile(FILENAME):
    with open(FILENAME, 'r') as f:
        # load the JSON data from the file into a dictionary
        data = json.load(f)
    return data

def writeJsonToFile(data, FILENAME):
    with open(FILENAME, 'w') as f:
        # write the JSON data to the file
        json.dump(data, f)

def processData (sourceData, targetData):
  # missing array based, categories, image_url
  
  for i in sourceData['businesses']:
      categoryArray = []
      photoURLArray = []

      for j in i['categories']:
          categoryArray.append(j['title'])
      
      photoURLArray = get_image_urls(i['id'])

      targetData["Restaurant data"].append({
          "name": i['name'],
          "category": categoryArray,
          "street-address": i['location']['address1'],
          "city": i['location']['city'],
          "province": i['location']['state'],
          "country": i['location']['country'],
          "rating": i['rating'],
          "review_count": i['review_count'],
          "id": i['id'],
          "image_url": photoURLArray,
          "yelp_url": i['url']
      })


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

if __name__ == '__main__':
    jsonData = readJsonFromFile('../../data/UnprocessedYelp.json')
    processedYelpData = {"Restaurant data": []}
    processData(jsonData, processedYelpData)
    writeJsonToFile(processedYelpData, '../../data/ProcessedYelp.json')
