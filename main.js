var fb = new Firebase('https://chirp-example.firebaseio.com/');

var submitTweet = function() {
  var tweetMessage = document.getElementById('tweet-input').value;

  // 1. Check if there is a tweet available
  if (tweetMessage === '')
    return

  // 2. Push the tweet to Firebase
  var userImage = document.getElementById('user-icon');
  if (userImage.value === '')
    icon = '//placehold.it/100/100';
  else
    icon = userImage.value;
  fb.push({message: tweetMessage, icon: icon});

  // 3. Clear the tweet input and reset
  tweetMessage = '';
}

var updateTweetList = function(snapshot) {

  var newTweet = document.createElement('p');
  var tweets = document.getElementById('tweets');
  if (snapshot.icon != '') {
    var userIcon = document.createElement('img');
    userIcon.src = snapshot.icon;
    newTweet.appendChild(userIcon);
  }
  newTweet.innerHTML += snapshot.message;
  tweets.appendChild(newTweet);
}

var submitButton = document.getElementById('submit');

submitButton.onclick = submitTweet;

fb.on('child_added', function(snapshot) {
  updateTweetList(snapshot.val());
}, function (errorObject) {
  console.log('The read failed: ' + errorObject.code);
});
