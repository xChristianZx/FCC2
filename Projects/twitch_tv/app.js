// User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.

// User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.

// User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.

// User Story: I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.

// Client-ID: oslderf93dxe8ku8pzit1b6u4ryngh

$(document).ready(function () {
    const streamNames = ['freecodecamp', 'chewiemelodies', 'angry_iceberg']
    
    let twitch = 'https://api.twitch.tv/kraken';
    let url = 'https://wind-bow.gomix.me/twitch-api';
    let users = '/users/';
    let callback = '?callback=?'

streamNames.forEach(function(element){
    
    let test = twitch + users;
    
    axios.get(test + element, {
        params: {
            'client_id': 'oslderf93dxe8ku8pzit1b6u4ryngh'
        }
    })
        .then(function (response) {
            console.log(response);
            streamCheck(response);
            console.log('Name: ', response.data.name);
            console.log('Stream: ', response.data.stream);
            //renderOnlineHTML(response);     
        })
        .catch(function (err) {
            console.log('Error: ', err);
        });
});

    function streamCheck(resp) {
        if (resp.data.stream === null) {
            console.log('Not currently streaming');
            renderOfflineHTML(resp)
        } else if (!resp.data.stream) {
            console.log('Currently Streaming');
            renderOnlineHTML(resp);
        } else {
            console.log('Hmmmmm');
        }
    };

    function renderOnlineHTML(response) {
        $('.container-1').append(`<li><iframe 
            src="http://player.twitch.tv/?channel=${response.data.name}"
            height="275";
            width="275";               
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
            >
            </iframe>
            <h3>${response.data.display_name}</h3>
            <p>${response.data.bio}</p></li>`)
    }

    function renderOfflineHTML(response) { 
        $('.container-2').append(`<li><h3>Currently offline</h3></li>`);
     }
});