//ovaj fajl je napravljen da ne bi imala tamo u app.js dva puta HomePage u rutiranju jer je zbunjujujuce. Sada kada odes na app.js i pogledas rutu koja ima putanju ka HomePage a ne pise ti da je to tacno folder HomePage onda on ako ne zna sa dalje onda kada udje u homePage on trazi difoltno fajl index.js i on ti exportuje sada taj Home Page u folderu home Page  koji ti je trebao a da nemas tamo u app.js dvostruki Homepage u ruti

import HomePage from './HomePage';

export default HomePage;

//ovo moze biti napisano krace:

//export { default } from './HomePage'   i uvek se ovako pise