const bears = [
  {
    id: 'bear1',
    name: 'Alpha', 
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.JfM1eEXPpjrAT1c03q6z2gHaHb%26pid%3DApi&f=1",
    attempts: 1,
    successes: 0,
    history: [{event: "attempt", stamp: "02/29/20 1:54:14 PM"}]
  },
  {
    id: 'bear2',
    name: 'Beta', 
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.dailymail.co.uk%2Fi%2Fpix%2F2012%2F08%2F27%2Farticle-2194244-06039FDD0000044D-389_634x649.jpg&f=1&nofb=1",
    attempts: 0,
    successes: 1,
    history: [{event: "catch", stamp: "02/29/20 12:57:10 PM"}]
   },
   {
    id: 'bear3',
    name: 'Delta', 
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fferrebeekeeper.files.wordpress.com%2F2013%2F10%2Fbrown-bear-female-and-its-children-play-with-a-ball-in-kamchatka-peninsula-russia-801276.jpg&f=1&nofb=1",
    attempts: 2,
    successes: 2,
    history: [{event: "catch", stamp: "02/29/20 09:08:13 AM"},{event: "attempt", stamp: "02/29/20 1:54:14 PM"},{event: "attempt", stamp: "02/29/20 1:53:39 PM"},{event: "catch", stamp: "02/29/20 11:15:24 PM"}]
   },
];

export default { bears };