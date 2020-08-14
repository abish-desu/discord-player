const ytpl = require('ytpl')
const scraper = require('soundcloud-scraper')
const Discord = require('discord.js')

const youtubeVideoRegex = (/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
const spotifySongRegex = (/https?:\/\/(?:embed\.|open\.)(?:spotify\.com\/)(?:track\/|\?uri=spotify:track:)((\w|-){22})/)

module.exports = class Util {
    constructor () {
        throw new Error(`The ${this.constructor.name} class may not be instantiated.`)
    }

    static isVoiceEmpty (channel) {
        return channel.members.filter((member) => !member.user.bot).size === 0
    }

    static isSoundcloudLink (query) {
        return scraper.validateURL(query)
    }

    static isSpotifyLink (query) {
        return spotifySongRegex.test(query)
    }

    static isYTPlaylistLink (query) {
        return ytpl.validateURL(query)
    }

    static isYTVideoLink (query) {
        return youtubeVideoRegex.test(query)
    }
}
