
const importProfiles = [
    { 
        name: 'black_and_white',
        conf: [1],
        last: ['3']
    },{ 
        name: 'main',
        conf: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        last: ['','','','','','2','','','','','','','','','','','','','',''],
        titles: ['RedLips','Denim','BeachDay','Mauve','DewDay','HighlightNight','MorningSun','OrangeLove','PinkWorld','BasicBlack','PowerGirl','Nirvana','LazySunday',
        'FreckleLove','BlackBoots','PinkLove','JustChillin','BossBoy','BlackShow','DarkBeach'] 
    },{ 
        name: 'brandcampaign',
        conf: [1],
        last: [''] 
    },{ 
        name: 'shirtflirt',
        conf: [1],
        last: ['']
    }
];

const exportProfiles = {};

const displayProfiles = ['shirtflirtdemo','portfoliodemo','portraits','category'];
const displayValues = [{
    name: ['shirtflirt','shirtflirt','shirtflirt'], 
    keys: [1,1,1],
    no: [1,2,3]
},{
    name: ['main','main','main','main','main','main','main','main','main'],
    keys: [1,2,3,4,5,6,7,8,9], 
    no: [1,1,1,1,1,1,1,1,1]
},{
    name: ['black_and_white','black_and_white','black_and_white','black_and_white','black_and_white','black_and_white','black_and_white','black_and_white','black_and_white'], 
    keys: [1,1,1,1,1,1,1,1,1],
    no: [10,2,13,4,5,6,7,8,9]
},{
    name: ['main','black_and_white','shirtflirt'],
    keys: [1,1,1],
    no: [3,28,2]
}];

for (let profile of importProfiles) {

    exportProfiles[profile.name] = {
        keys: [],
        thumbnails: [],
        src: [],
        last: profile.last
    };

    if ('titles' in profile) {
        exportProfiles[profile.name]['titles'] = profile.titles;
    }

    for (let folder of profile.conf) {

        for (let j=1;j<999;j++){
            let pro = profile.name;
            if (profile.name==='main') {
                pro = 'portfolio';
            }
            try {
                exportProfiles[profile.name].thumbnails.push(require(`./assets/thumbnails/${pro}/${folder}/${j}.jpg`));
                exportProfiles[profile.name].src.push(`public2/${pro}/${folder}/${j}.jpg`);
                exportProfiles[profile.name].keys.push(folder);
            } catch(error) {
                break;
            }
        }
    }

}

for (let i in displayProfiles) {
    let obj = {
        thumbnails: []
    };
    
    let value = displayValues[i];

    for (let i in value.no) {
        let pro = value.name[i];
        if (pro==='main') {
            pro = 'portfolio';
        }
        obj.thumbnails.push(require(`./assets/thumbnails/${pro}/${value.keys[i]}/${value.no[i]}.jpg`));
    }

    exportProfiles[displayProfiles[i]] = {...obj};
}

export default exportProfiles;

// Texts

let texts = {
    Home: {
        titles: ['Welcome to my Gallery','#ShirtFlirtByDishaKhanted','Themed Gallery','Monochrome Gallery'],
        descs: `Hi, I'm Disha and I've been taking Photos of Models in Bangalore for 2 years now and I've worked with almost 50 Models.\n\n It all started when me and my family went to Ooty a few years back and I was stuck there without Electricity or Television for three days. With nothing to keep me occupied, I grabbed the camera lying around in my home and ventured out to shoot anything and everything that could be captured through a camera lens.`
    },
    Portfolio: {
        titles: ['Themed Gallery','Monochrome Gallery','#ShirtFlirtByDishaKhanted'],
        descs:[
            '',
            '',
            ''
        ]
    },
    About: {
        title: 'Disha Khanted',
        descs: [
            `Hi, I'm Disha and I've spent the last couple of years photographing landscapes and people, when I found that my passion lies in portrait and fashion photography. It all started when me and my family went to Ooty a few years back and I was stuck there without Electricity or Television for three days. With nothing to keep me occupied, I grabbed the camera lying around in my home and ventured out to shoot anything and everything that could be captured through a camera lens.`,
            `I started off with a small count of followers and now that number has risen exponentially. Not only do I take up the role of a photographer, but I also fill out the roles of an editor and a stylist. I've also taught myself in the techniques of lighting, angles and settings.`,
            'I now have a network containing an extensive web of contacts with models, make-up artists and stylists (A long way from when I first started) and I now mostly do freelance photo-shoots of models and also work with designers in Bangalore.'
        ]
    }
}

export {texts};