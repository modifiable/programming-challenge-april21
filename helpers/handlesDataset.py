import pandas as pd

'''
- adds the average of movie ratings to a 'rating' column
- add the year of the movie in a 'year' column
'''

df_ratings = pd.read_csv("ratings.csv")
df_movies = pd.read_csv("movies.csv")

movies_id = list(set(df_ratings['movieId'].tolist()))
for iD in movies_id:

    data_id = df_ratings[df_ratings['movieId'].isin([iD])]
    media_rating = data_id['rating'].mean()
    df_movies.loc[df_movies.index[df_movies['movieId'] == iD], 'rating'] = media_rating

df_movies['year'] = df_movies['title'].str.split().str[-1]
df_movies['year'] = df_movies['year'].map(lambda x: x.lstrip('(').rstrip(')'))
df_movies.to_csv(r'movies_with_year_and_rating.csv', index = False)