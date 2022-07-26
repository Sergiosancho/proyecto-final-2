import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LinkPreview } from '@dhaiwat10/react-link-preview';

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Key': 'e4165c19e6msha253d08a59e6bb3p10f7aejsn111737bd5aa0',
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const first5Articles = articles?.slice(0, 5);

  return (
    <div className="news-feed">
      <h2>Noticias</h2>
      {first5Articles?.map((article, _index) => (
        <div key={_index}>
          <LinkPreview url="{article.url}" />
          <a href={article.url}>
            <p>{article.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
