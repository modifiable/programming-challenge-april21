import pandas as pd
from pymongo import MongoClient

'''
- connects with MongoDB Atlas
- adds the data to the database's 'movies' collection
'''

client = MongoClient("mongodb+srv://challenge:challenge@cluster0.wbkjq.mongodb.net/challenge_sidia?retryWrites=true&w=majority")
df_movies = pd.read_csv("movies_with_year_and_rating.csv")

db = client.get_database('challenge_sidia')
movies_collection = db.movies

movies = []
for index, row in df_movies.iterrows():

    movies_dict = { 'title': row['title'],
                    'year': row['year'],
                    'rating': row['rating'],
                    'genres': row['genres'].split('|')
                    }

    movies.append(movies_dict)

movies_collection.insert_many(movies)