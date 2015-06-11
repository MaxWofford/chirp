var submitTweet = function() {
  var tweetInput = document.getElementById('tweet-input');

  // 1. Check if there is a tweet available
  if (tweetInput.value === '')
    return
  // 2. Add the tweet to the list of tweets
  var newTweet = document.createElement('p');
  var tweets = document.getElementById('tweets');
  newTweet.innerHTML = tweetInput.value;
  tweets.appendChild(newTweet);
   
  // 3. Clear the tweet input and reset
  tweetInput.value = '';
}

var submitButton = document.getElementById('submit');

submitButton.onclick = submitTweet;