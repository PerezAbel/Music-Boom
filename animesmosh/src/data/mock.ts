export type Title = {id:string;name:string;type:'Anime'|'Manga';genre:string;score:number;year:number;emoji:string;summary:string};
export const titles:Title[]=[
{id:'jjk',name:'Jujutsu Kaisen',type:'Anime',genre:'Action • Supernatural',score:9.1,year:2020,emoji:'⚔️',summary:'Curses, sorcerers and high-stakes battles in a world hiding dark secrets.'},
{id:'aot',name:'Attack on Titan',type:'Anime',genre:'Dark fantasy • Mystery',score:9.4,year:2013,emoji:'🛡️',summary:'Humanity confronts towering enemies and difficult truths.'},
{id:'bl',name:'Blue Lock',type:'Anime',genre:'Sports • Drama',score:8.6,year:2022,emoji:'⚽',summary:'Ambitious strikers compete in an intense football training program.'},
{id:'op',name:'One Piece',type:'Anime',genre:'Adventure • Fantasy',score:9.2,year:1999,emoji:'🏴‍☠️',summary:'A pirate crew pursues freedom, friendship and an ultimate treasure.'},
{id:'csm',name:'Chainsaw Man',type:'Manga',genre:'Action • Horror',score:9.0,year:2018,emoji:'🪚',summary:'A chaotic supernatural action story with surprising emotional depth.'},
{id:'vin',name:'Vinland Saga',type:'Manga',genre:'Historical • Drama',score:9.3,year:2005,emoji:'🗡️',summary:'A journey through revenge, war and the search for peace.'},
];
export const fandoms=[{id:'jjk',name:'JJK Society',members:'128K',topic:'Theory battles & manga talk',emoji:'⚔️'},{id:'aot',name:'Walls & Wings',members:'92K',topic:'Attack on Titan deep dives',emoji:'🛡️'},{id:'bl',name:'Blue Lock FC',members:'64K',topic:'Match analysis & fan art',emoji:'⚽'},{id:'op',name:'Grand Line Crew',members:'210K',topic:'One Piece adventures',emoji:'🏴‍☠️'}];
export const upcoming=[{id:'r1',title:'Upcoming anime premiere',label:'Release announcement',date:'TBA',emoji:'🎬'},{id:'r2',title:'New manga chapter',label:'Follow official publisher',date:'TBA',emoji:'📖'},{id:'r3',title:'Creator livestream',label:'Community event',date:'TBA',emoji:'🎙️'}];
