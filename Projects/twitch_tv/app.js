// User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.
// User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
// User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.
// User Story: I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.
// Client-ID: oslderf93dxe8ku8pzit1b6u4ryngh

$(document).ready(function () {
    const streamNames = ['freecodecamp', 'chewiemelodies', 'angry_iceberg', 'capcomfighters', 'copenhagengamescs', 'summit1g', 'kinggothalion'];

    const twitch = 'https://api.twitch.tv/kraken';
    const url = 'https://wind-bow.gomix.me/twitch-api';
    const streams = '/streams/';
    const users = '/users/';


    streamNames.forEach(function (element) {

        const streamsSearch = twitch + streams;

        axios.get(streamsSearch + element, {
                params: {'client_id': 'oslderf93dxe8ku8pzit1b6u4ryngh'}
            })
            .then(function (response) {
                console.log('HELLO!', response, element);
                streamCheck(response, element);
                console.log('Name: ', response.data.stream.channel.display_name);
                console.log('Stream: ', response.data.stream);
            })
            .catch(function (err) {
                console.log('Error: ', err);
            });
    });

    function streamCheck(resp, element) {
        if (resp.data.stream === null) {
            console.log('Not currently streaming');
            offlineInfo(element)
            //renderOfflineHTML(resp)
        } else if (resp.data.stream) {
            console.log('Currently Streaming');
            renderOnlineHTML(resp);
        } else {
            console.log('Hmmmmm');
        }
    };

    function renderOnlineHTML(response) {
        $('.container-1').append(`<li><iframe 
            src="http://player.twitch.tv/?channel=${response.data.stream.channel.name}&autoplay=false&muted=true"
            height="275";
            width="275";               
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
            >
            </iframe>
            <h3>${response.data.stream.channel.display_name}</h3>
            <p>Playing: ${response.data.stream.game}</p>
            <p>${response.data.stream.channel.status}</p></li>`)
    }

    function offlineInfo(element) {
        const userSearch = twitch + users;

        axios.get(userSearch + element, {
                params: {'client_id': 'oslderf93dxe8ku8pzit1b6u4ryngh'}
            })
            .then(function (response) {
                console.log('Offline Success:', element, response);
                renderOfflineHTML(response)
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    function renderOfflineHTML(response) {
        $('.container-2').append(`<li>
        <a href="https://www.twitch.tv/${response.data.name}" target="_blank">
            <img src="${response.data.logo} alt="logo">
        </a>
        <h2>${response.data.display_name}</h2>
        <p>is currently offline</p>
        <p>${response.data.bio}</p>
        </li>`);
    }
});