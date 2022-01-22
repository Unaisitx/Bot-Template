module.exports = (client) => {
    console.log('Logged into: ' + client.user.tag)
    client.user.setActivity('playing', {type: 'PLAYING'});
}