import { createContext, useContext, useReducer } from 'react'
import { cartReducer, searchReducer } from './Reducers'
import Barrel4 from '../assets/pics/4_Barrel.jpg';
import Barrel9 from '../assets/pics/9_Barrel.jpg';
import DroneCounterMeasure2 from '../assets/pics/Drone Countermeasure 2.png';
import image from '../assets/pics/image.png'
import image1 from '../assets/pics/image (1).png'
import image2 from '../assets/pics/image (2).png'
import IUX0A from '../assets/pics/Block_0A.jpg';
import IUX0C from '../assets/pics/Block_0CmkII.jpg';
import drone4 from '../assets/pics/Drone countermeasure 4.png';
import CnC from '../assets/pics/Command_and_Control-2.jpg';
import ballisticServer from '../assets/pics/Ballistic_Solution_Server-1.jpg'

const Cart = createContext();

const Context = ({ children }) => {
  
    const products= [{
        id : 1,
        name: "IGLS-4",
        img: Barrel4,
        description: 'Integrated Ground Launch System, CAPACITY 4',
        moreInfo: ['Effective against evasive small, medium and large* drones','Multiple countermeasures create a persistent and impenetrable aerial "wall" to prevent swarms and re-attacks','Safe in dense urban environments with civilian operators',
    'Plug-and-play out of the box; setup in under 30 minutes', 'Single Operator; training in under 15 minutes','Operates standalone or as part of a layered defense system']
    },
    {
        id : 2,
        name: "IGLS-9",
        img: Barrel9,
        description: 'Integrated Ground Launch System, CAPACITY 9',
        moreInfo: ['Effective against evasive small, medium and large* drones','Multiple countermeasures create a persistent and impenetrable aerial "wall" to prevent swarms and re-attacks','Safe in dense urban environments with civilian operators',
        'Plug-and-play out of the box; setup in under 30 minutes', 'Single Operator; training in under 15 minutes','Operates standalone or as part of a layered defense system']
    },
    {
        id : 3,
        name: "IALS",
        img: image2,
        description: 'Ballistic, short range missile',
        moreInfo: ['Effective against evasive small, medium and large* drones','Multiple countermeasures create a persistent and impenetrable aerial "wall" to prevent swarms and re-attacks','Safe in dense urban environments with civilian operators',
        'Plug-and-play out of the box; setup in under 30 minutes', 'Single Operator; training in under 15 minutes','Operates standalone or as part of a layered defense system']
    },
    {
        id : 4,
        name: "IDLS",
        img: image1,
        description: 'Integrated Dismounted Soldier Launch System',
        moreInfo: ['Effective against evasive small, medium and large* drones','Multiple countermeasures create a persistent and impenetrable aerial "wall" to prevent swarms and re-attacks','Safe in dense urban environments with civilian operators',
        'Plug-and-play out of the box; setup in under 30 minutes', 'Single Operator; training in under 15 minutes','Operates standalone or as part of a layered defense system']
    },
    {
        id: 5,
        name: "IUX0A",
        img: IUX0A,
        description: "Guided, short range missile",
        moreInfo: ['Guided GPS', 'Two-way RF datalink','Lock-ater-launch capable','No line of sight required','Ideal for obstructed environments','Add-on booster for extended range (up to 3km)']
    },
    {
        id: 6,
        name: "IUX0B",
        img: IUX0A,
        description: "Guided, medium range missile",
        moreInfo: ['Guided GPS', 'Two-way RF datalink','Lock-ater-launch capable','No line of sight required','Ideal for obstructed environments','Add-on booster for extended range (up to 3km)']
    },
    {
        id: 7,
        name: "IUX0C",
        img: IUX0C,
        description: "Ballistic, short range missile",
        moreInfo: ['Ballistic','40mm compatible','Lowest cost','Largest payload area','Extended range motor option','Launched from any platform (air,land,sea)']
    },
    {
        id: 8,
        name: "IUX0D",
        img: IUX0C,
        description: "Ballistic, long range missile",
        moreInfo: ['Ballistic', '40mm compatible','Lowest cost','Largest payload area','Extended range motor option','Launched from any platform (air,land,sea)']
    },
    {
        id: 9,
        name: "CAS-01",
        img: drone4,
        description: "Casper 100 (Group 1 and Group 2)",
        moreInfo: ['Provides continuous, smooth track assurance','Sensor fusion across RF, optical, radar, acoustic and others', 'Generates ballistic and guidance solutions for multiple effectors',
        'Synchronizes all system equipment (NTP Server)','Single-button self destruct if location is compromised']
    },
    {
        id: 10,
        name: "CAS-02",
        img: drone4,
        description: "Casper 100 (Group 1 and Group 2)",
        moreInfo: ['Provides continuous, smooth track assurance','Sensor fusion across RF, optical, radar, acoustic and others', 'Generates ballistic and guidance solutions for multiple effectors',
        'Synchronizes all system equipment (NTP Server)','Single-button self destruct if location is compromised']
    },
    {
        id: 11,
        name: "CAS-03",
        img: drone4,
        description: "Casper 100 (Group 1 and Group 2)",
        moreInfo: ['Provides continuous, smooth track assurance','Sensor fusion across RF, optical, radar, acoustic and others', 'Generates ballistic and guidance solutions for multiple effectors',
        'Synchronizes all system equipment (NTP Server)','Single-button self destruct if location is compromised']
    },
    {
        id: 12,
        name: "AC2-iOS",
        img: CnC,
        description: "Command and Control Terminal",
        moreInfo: ['Centralized and distributed control authority','Comprehensive situational awareness','Compliant with Cursor-on-Target, MEDUSA (TCUT), Asterix','C6-ready system (Command, Control, Communications, Computing, Cyber-protection and Combat Systems',
        'Tactics, techniques and procedures planning and simulation (via Assure TTP Planner', 'Survivable operation under degraded and compromised battlefield network','Framework to include other system and component interfaces rapidly']
    },
    {
        id: 13,
        name: "BSS",
        img: ballisticServer,
        description: "ASSURE Ballistic Solution Server",
        moreInfo: ['Centralized and distributed control authority','Comprehensive situational awareness','Compliant with Cursor-on-Target, MEDUSA (TCUT), Asterix','C6-ready system (Command, Control, Communications, Computing, Cyber-protection and Combat Systems',
        'Tactics, techniques and procedures planning and simulation (via Assure TTP Planner', 'Survivable operation under degraded and compromised battlefield network','Framework to include other system and component interfaces rapidly']
    },
    {
        id: 14,
        name: "AC2-TS",
        img: ballisticServer,
        description: "ASSURE Target Server",
        moreInfo: ['Centralized and distributed control authority','Comprehensive situational awareness','Compliant with Cursor-on-Target, MEDUSA (TCUT), Asterix','C6-ready system (Command, Control, Communications, Computing, Cyber-protection and Combat Systems',
        'Tactics, techniques and procedures planning and simulation (via Assure TTP Planner', 'Survivable operation under degraded and compromised battlefield network','Framework to include other system and component interfaces rapidly']
    },
    {
        id: 15,
        name: "AC2-TTP",
        img: ballisticServer,
        description: "ASSURE Target Server",
        moreInfo: ['Centralized and distributed control authority','Comprehensive situational awareness','Compliant with Cursor-on-Target, MEDUSA (TCUT), Asterix','C6-ready system (Command, Control, Communications, Computing, Cyber-protection and Combat Systems',
        'Tactics, techniques and procedures planning and simulation (via Assure TTP Planner', 'Survivable operation under degraded and compromised battlefield network','Framework to include other system and component interfaces rapidly']
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