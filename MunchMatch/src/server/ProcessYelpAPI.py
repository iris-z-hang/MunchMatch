import json

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
      for j in i['categories']:
          categoryArray.append(j['title'])
      targetData["Restaurant data"].append({
          "name": i['name'],
          "category": categoryArray,
          "street-address": i['location']['address1'],
          "city": i['location']['city'],
          "province": i['location']['state'],
          "country": i['location']['country'],
          "rating": i['rating'],
          "review_count": i['review_count'],
          "yelp_url": i['url']
      })


if __name__ == '__main__':
    jsonData = readJsonFromFile('../../data/UnprocessedYelp.json')
    processedYelpData = {"Restaurant data": []}
    processData(jsonData, processedYelpData)
    writeJsonToFile(processedYelpData, '../../data/ProcessedYelp.json')
