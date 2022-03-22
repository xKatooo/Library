const { db } = require('./db');
const { MessageEmbed } = require('discord.js');
const search = async(title, message) => {
    if (!title) {
        message.channel.send('No se encontro el libro que buscas')
    }
    var c = await db.collection('library').get();
    let e = c.docs.map((m) => ({
        id: m.id,
        ...m.data()
    })).filter(t => {
        return t.Titulo.toUpperCase() === title.toUpperCase();
    })
    if (!e[0]) {
        return message.channel.send('No se encontro el libro que buscas =(');
    } else {
        for (n in e) {
            let embed = new MessageEmbed()
                .setColor('#2FCFB2')
                .setTitle(e[n]['Titulo'])
                .setImage(e[n]['img'])
                .addFields({ name: 'Autor', value: e[n]['Autor'] }, { name: 'Año', value: e[n]['Año'] }, { name: 'Idioma', value: e[n]['Idioma'] }, { name: 'Link', value: e[n]['url'] }, { name: "ID", value: e[n].id });
            return message.channel.send({ embeds: [embed] });

        }
    }
}
const searchbt = async(tag, message) => {
    if (!tag) {
        message.channel.send('No se encontraron libros con la categoria que buscas')
    }
    var c = await db.collection('library').get();
    let e = c.docs.map((m) => ({
        id: m.id,
        ...m.data()
    })).filter(t => {
        return t.tags.includes(tag.toUpperCase());
    })
    if (!e[0]) {
        return message.channel.send('No se encontraron libros con la categoria que buscas =(');
    } else {
        for (n in e) {
            let embed = new MessageEmbed()
                .setColor('#2FCFB2')
                .setTitle(e[n]['Titulo'])
                .setImage(e[n]['img'])
                .addFields({ name: 'Autor', value: e[n]['Autor'] }, { name: 'Año', value: e[n]['Año'] }, { name: 'Idioma', value: e[n]['Idioma'] }, { name: 'Link', value: e[n]['url'] }, { name: "ID", value: e[n].id });
            message.channel.send({ embeds: [embed] });
        }
    }
}
module.exports = { search, searchbt }