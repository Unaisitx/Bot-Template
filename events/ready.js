module.exports = (client) => {
    console.log('Im alive as ' + client.user.tag)
    client.user.setActivity('cuttie minipigs', {type: 'WATCHING'});
}