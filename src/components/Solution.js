import React from 'react';
import '../styles/Solution.css'
import image from '../assets/pics/DroneDefeat_v2.jpg';


const Solution = () => {
  return (
    <div className = "solution">
      <h2>How it works</h2>
      <div className='videoContainer'>
        <iframe src="https://www.youtube.com/embed/GkgJea86Wlw?playlist=GkgJea86Wlw&autoplay=1&controls=0&loop=1&mute=1" width='40%' height='300' allowFullScreen></iframe></div>
          
        <p><b>Problem</b></p>
        <p>Combat personnel trained in conventional warfare are ill-equipped to fight wars which increasingly employ
            weapons that hunt and engage their targets autonomously.</p>
        <p>Components to make autonomous equipment—from warehouse vehicles to weapons—are now widely available on the 
            commercial market and readily accessible by adversaries. They are cheap to produce and hard to mitigate.</p>
        <p>Current counter-drone approaches don’t work against these new autonomous drones:</p>

        <ul>
          <li>Autonomous drones don’t use radio signals so signal jamming is ineffective</li>
          <li>Directed Energy only works on a clear day with direct line of sight; and even then,
              it requires a precise target fix for several seconds—impractical for small drones</li>
          <li>Explosives are expensive and create immense collateral damage at low altitudes</li>
          <li>Hit-to-kill and nets are too slow; both require expensive and impractically precise tracking systems</li>
        </ul>

        <p>Conventionally trained and equipped soldiers are no match in numbers or capability for this new threat.
            This new war requires a low-cost, low-collateral system which can be used by an untrained operator and deployed
            in seconds.</p>
        
        <p><b>AirShare’s OVERWATCH® Improves  Autonomous Warfare Combat Readiness</b></p>
        <p>AirShare has reached deployment-ready status (SRL 8) of its non-lethal, low-collateral 5th Generation OVERWATCH®
            Interceptor missile system—capable of disabling elusive drones employed by adversaries in conflict zones to 
            spy, drop bombs, and perform kamikaze-style attacks. AirShare’s OVERWATCH® counter-drone system exploits a key
            vulnerability that all hostile drones possess: they all need to generate lift in order to fly.</p>
        
        <p>AirShare’s OVERWATCH® Interceptors contain patent-pending lift-disrupting CASPER™ countermeasures to safely down small,
            medium, and large drones by entangling their propellers, blocking air intakes, jamming their control surfaces,
            and obscuring important flight sensors.</p>
          
        <p><b>Key Features:</b></p>
        <ul>
          <li><b>Cost: </b> At costs below US$5,000, the OVERWATCH® Interceptor removes the adversaries’ economic 
            advantage—enabling allies to maintain cost and capability overmatch.</li>
          <li><b>Defeats the evolving threat: </b>OVERWATCH® CASPER™ countermeasures work by disrupting lift in drones of
            all types with engine sizes as large as 180cc .</li>
          <li><b>Fast: </b> The OVERWATCH® Interceptor is agile—reaching speeds of Mach 0.7 and capable of intercepting 
            the most elusive high-speed drones at ranges of up to 3km.</li>
          <li><b>Non-lethal, low-collateral: </b>The missile does not explode, or directly hit its target, but rather deploys
            proprietary CASPER™ floating, non-hazardous elastic aerofoils.</li>
          <li><b>Simple and safe: </b>OVERWATCH® is designed to be deployed in seconds, and used by civilian or military
            operators with minimal training.</li>
        </ul>

        <img className='picture' src={image} width='600' height='300'/>
    </div>
  )
}

export default Solution