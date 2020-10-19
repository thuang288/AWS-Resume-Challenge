from pprint import pprint
import json
import boto3


def handler(event,context):
    dynamodb = boto3.resource('dynamodb', region_name = 'us-east-2')
    tableName = dynamodb.Table('turingresumecounter')
    response = tableName.get_item( 
    
    Key={
        'Site': '0',
    }
    )
    
    item = response['Item']
    tableName.update_item(
        Key = {
            "Site":0,
        },
        UpdateExpression='SET Visits = :val1',
        ExpressionAttributeValues={
            ':val1': item['Visits'] + 1
    }
)
    return {
        "statusCode": 200,
        "body": json.dumps({"Visit_Count": str(item['Visits'] + 1)})
    }
