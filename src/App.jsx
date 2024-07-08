import React, { useState } from "react";
import { TweetList } from "./components/TweetList";
import { TweetForm } from "./components/TweetForm";
import Tweet from "./Tweet";

const DEFAULT_TWEET = [
  {
    id: 0,
    name: "Michel",
    content: "Je vais bien",
    like: 1000,
  },
  {
    id: 1,
    name: "Michel",
    content: "La forme",
    like: 12,
  },
  {
    id: 2,
    name: "Monique",
    content: "J'ai faim'",
    like: 20,
  },
  {
    id: 3,
    name: "Marc",
    content: "Je suis fatigué",
    like: 420,
  },
];

function App() {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);
  const addTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  };

  const handleSubmit = (tweet) => {
    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1,
      name: tweet.name,
      content: tweet.content,
      like: 0,
    };
    addTweet(newTweet);
  };

  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };

  const onLike = (tweetId) => {
    setTweets((curr) =>
      curr.map((tweet) =>
        tweet.id === tweetId ? { ...tweet, like: tweet.like + 1 } : tweet
      )
    );
  };

  return (
    <div>
      <TweetForm onSubmit={handleSubmit} />
      <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike} />
    </div>
  );
}

export default App;
