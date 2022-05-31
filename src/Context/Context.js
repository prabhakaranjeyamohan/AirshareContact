import { createContext, useContext, useReducer } from 'react'
import { cartReducer, searchReducer } from './Reducers'
import IGLS4 from '../assets/pics/IGLS-4.jpg'
import IGLS9 from '../assets/pics/IGLS-9.jpg';
import IDLS from '../assets/pics/IDLS.jpg';
import IALS from '../assets/pics/IALS.jpg';
import IUX0AB from '../assets/pics/IUX0A&0B.jpg'
import IUX0CD from '../assets/pics/IUX0C&D Dart.jpg';
import CAS from '../assets/pics/CAS.jpg';
import AC2 from '../assets/pics/AC2-IOS.jpg';
import BSS from '../assets/pics/BSS.jpg';
import TTP from '../assets/pics/AC2-TTP.jpg';
import ATAK from '../assets/pics/AC2-ATAK.jpg';



const Cart = createContext();

const Context = ({ children }) => {
  
    const products= [{
        id : 1,
        name: "IGLS-4",
        img: IGLS4,
        breakoutImg: IGLS4,
        description: 'Integrated Ground Launch System, CAPACITY 4',
        moreInfo: ['Universal Ground-based Turret and 4-barrel launcher','Plug-and-play out of the box; setup in under 30 minutes','Simple calibration can be done by single user',
        'Compatible with: Interceptor-UX missiles Block 0A, 0B, 0CmkI with rail adapter, Intercerptor-UX missiles Block 0C mkII “DART” and Block 0D “SPEAR”, 40mm standard munitions (with firing pin / fuze adapter)'],
        type: "Launcher"
    },
    {
        id : 2,
        name: "IGLS-9",
        img: IGLS9,
        breakoutImg: IGLS9,
        description: 'Integrated Ground Launch System, CAPACITY 9',
        moreInfo: ['Universal Ground-based Turret and 9-barrel launcher','Plug-and-play out of the box; setup in under 30 minutes','Simple calibration can be done by single user',
        'Compatible with: Interceptor-UX missiles Block 0A, 0B, 0CmkI with rail adapter, Intercerptor-UX missiles Block 0C mkII “DART” and Block 0D “SPEAR”, 40mm standard munitions (with firing pin / fuze adapter)'],
        type: "Launcher"
    },
    {
        id : 3,
        name: "IALS",
        img: IALS,
        breakoutImg: IALS,
        description: 'Integrated Aerial Launch System',
        moreInfo: ['Effective against evasive small, medium and large* drones','Multiple countermeasures create a persistent and impenetrable aerial "wall" to prevent swarms and re-attacks','Safe in dense urban environments with civilian operators',
        'Plug-and-play out of the box; setup in under 30 minutes', 'Single Operator; training in under 15 minutes','Operates standalone or as part of a layered defense system'],
        type: "Launcher"
    },
    {
        id : 4,
        name: "IDLS",
        img: IDLS,
        breakoutImg: IDLS,
        description: 'Integrated Dismounted Soldier Launch System',
        moreInfo: ['Effective against evasive small, medium and large* drones','Multiple countermeasures create a persistent and impenetrable aerial "wall" to prevent swarms and re-attacks','Safe in dense urban environments with civilian operators',
        'Plug-and-play out of the box; setup in under 30 minutes', 'Single Operator; training in under 15 minutes','Operates standalone or as part of a layered defense system'],
        type: "Launcher"
    },
    {
        id: 5,
        name: "IUX0A:Interceptor-UX Block 0A",
        img: IUX0AB,
        breakoutImg: IUX0AB,
        description: "Guided, short range missile",
        moreInfo: ['Guided GPS', 'Two-way RF datalink','Lock-ater-launch capable','No line of sight required','Ideal for obstructed environments','Add-on booster for extended range (up to 3km)'],
        type: "Missile"
    },
    {
        id: 6,
        name: "IUX0B: Interceptor-UX Block 0B",
        img: IUX0AB,
        breakoutImg: IUX0AB,
        description: "Guided, medium range missile",
        moreInfo: ['Guided GPS', 'Two-way RF datalink','Lock-ater-launch capable','No line of sight required','Ideal for obstructed environments','Add-on booster for extended range (up to 3km)'],
        type: "Missile"
    },
    {
        id: 7,
        name: 'IUX0C:Interceptor-UX Block 0C mkII “DART”',
        img: IUX0CD,
        breakoutImg: IUX0CD,
        description: "Ballistic, short range missile",
        moreInfo: ['Ballistic','40mm compatible','Lowest cost','Largest payload area','Extended range motor option','Launched from any platform (air,land,sea)'],
        type: "Missile"
    },
    {
        id: 8,
        name: 'IUX0D: Interceptor-UX Block 0C mkIII “SPEAR”',
        img: IUX0CD,
        breakoutImg: IUX0CD,
        description: "Ballistic, long range missile",
        moreInfo: ['Ballistic', '40mm compatible','Lowest cost','Largest payload area','Extended range motor option','Launched from any platform (air,land,sea)'],
        type: "Missile"
    },
    {
        id: 9,
        name: "CAS-01",
        img: CAS,
        breakoutImg: CAS,
        description: "CASPER™ 100 (Group 1 and Group 2)",
        moreInfo: ['Provides continuous, smooth track assurance','Sensor fusion across RF, optical, radar, acoustic and others', 'Generates ballistic and guidance solutions for multiple effectors',
        'Synchronizes all system equipment (NTP Server)','Single-button self destruct if location is compromised'],
        type: "CM"
    },
    {
        id: 10,
        name: "CAS-02",
        img: CAS,
        breakoutImg: CAS,
        description: "CASPER™ 200 (2x capacity; Group 1 only)",
        moreInfo: ['Provides continuous, smooth track assurance','Sensor fusion across RF, optical, radar, acoustic and others', 'Generates ballistic and guidance solutions for multiple effectors',
        'Synchronizes all system equipment (NTP Server)','Single-button self destruct if location is compromised'],
        type: "CM"
    },
    {
        id: 11,
        name: "CAS-03",
        img: CAS,
        breakoutImg: CAS,
        description: "CASPER™ 300 (Group 3*; max engine size 180cc)",
        moreInfo: ['Provides continuous, smooth track assurance','Sensor fusion across RF, optical, radar, acoustic and others', 'Generates ballistic and guidance solutions for multiple effectors',
        'Synchronizes all system equipment (NTP Server)','Single-button self destruct if location is compromised'],
        type: "CM"
    },
    {
        id: 12,
        name: "AC2-iOS",
        img: AC2,
        breakoutImg: AC2,
        description: "ASSURE™ Command and Control Terminal",
        moreInfo: ['Centralized and distributed control authority','Comprehensive situational awareness','Compliant with Cursor-on-Target, MEDUSA (TCUT), Asterix','C6-ready system (Command, Control, Communications, Computing, Cyber-protection and Combat Systems',
        'Tactics, techniques and procedures planning and simulation (via Assure TTP Planner', 'Survivable operation under degraded and compromised battlefield network','Framework to include other system and component interfaces rapidly'],
        type: "CC"
    },
    {
        id: 13,
        name: "AC2-ATAK",
        img: ATAK,
        breakoutImg: ATAK,
        description: "ASSURE™ ATAK C2 Terminal",
        moreInfo: ['Centralized and distributed control authority','Comprehensive situational awareness','Compliant with Cursor-on-Target, MEDUSA (TCUT), Asterix','C6-ready system (Command, Control, Communications, Computing, Cyber-protection and Combat Systems',
        'Tactics, techniques and procedures planning and simulation (via Assure TTP Planner', 'Survivable operation under degraded and compromised battlefield network','Framework to include other system and component interfaces rapidly'],
        type: "CC"
    },
    {
        id: 14,
        name: "BSS",
        img: BSS,
        breakoutImg: BSS,
        description: "ASSURE™ Ballistic Solution Server",
        moreInfo: ['Centralized and distributed control authority','Comprehensive situational awareness','Compliant with Cursor-on-Target, MEDUSA (TCUT), Asterix','C6-ready system (Command, Control, Communications, Computing, Cyber-protection and Combat Systems',
        'Tactics, techniques and procedures planning and simulation (via Assure TTP Planner', 'Survivable operation under degraded and compromised battlefield network','Framework to include other system and component interfaces rapidly'],
        type: "CC"
    },
    {
        id: 15,
        name: "AC2-TS",
        img: BSS,
        breakoutImg: BSS,
        description: "ASSURE™ Target Server",
        moreInfo: ['Centralized and distributed control authority','Comprehensive situational awareness','Compliant with Cursor-on-Target, MEDUSA (TCUT), Asterix','C6-ready system (Command, Control, Communications, Computing, Cyber-protection and Combat Systems',
        'Tactics, techniques and procedures planning and simulation (via Assure TTP Planner', 'Survivable operation under degraded and compromised battlefield network','Framework to include other system and component interfaces rapidly'],
        type: "CC"
    },
    {
        id: 16,
        name: "AC2-TTP",
        img: TTP,
        breakoutImg: TTP,
        description: "ASSURE™ Tactics, Techniques, and Procedures Simulator",
        moreInfo: ['Centralized and distributed control authority','Comprehensive situational awareness','Compliant with Cursor-on-Target, MEDUSA (TCUT), Asterix','C6-ready system (Command, Control, Communications, Computing, Cyber-protection and Combat Systems',
        'Tactics, techniques and procedures planning and simulation (via Assure TTP Planner', 'Survivable operation under degraded and compromised battlefield network','Framework to include other system and component interfaces rapidly'],
        type: "CC"
    }]

    //Gives access to product variables and cart state to reducer to allow for manipulations
    //cartReducer imported from Reducers.js
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    const[searchState, searchDispatch] = useReducer(searchReducer, {
        searchQuery: ''
    })
    return (
    //Cart.Provider passes children, which is the json of products 
    //Cart.Provider contains state and dispatch; state contains the state and dispatch allows for manipulation of state
    <Cart.Provider value={{ state, dispatch, searchReducer, searchDispatch }}>{ children }</Cart.Provider>
  );
}

export default Context;

//Using useContext() we export context so it can be accessed 
export const CartState =() =>{
    return useContext(Cart);
}