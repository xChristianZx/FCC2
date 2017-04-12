// User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.

// User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.

// User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.

// User Story: I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.

$(document).ready(function () {

    let twitch = 'https://api.twitch.tv/kraken';
    let url = 'https://wind-bow.gomix.me/twitch-api';
    let free = '/streams/freecodecamp';
    let user = '/users/valkia';
    let user2 = '/users/ESL_SC2';

    let test = url + user2;

    axios.get(test)
        .then(function (response) {
            console.log(response);
            console.log('Stream: ', response.data.stream);
            console.log('Name: ', response.data.display_name);
            console.log('Link: ', response.data._links.self);
            streamCheck(response);
        })
        .catch(function (err) {
            console.log('Error: ', err);
        });

    function streamCheck(resp) {
        if (resp.data.stream === null) {
            console.log('Not currently streaming');
        } else if (!resp.data.stream) {
            console.log('Streaming');
        } else {
            console.log('Hmmmmm');
        }
    };

    function renderHTML(response) {
        $('.box-1').append()
    }

});