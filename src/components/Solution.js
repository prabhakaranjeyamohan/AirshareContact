import React from 'react';
import '../styles/Solution.css'
import image from '../assets/pics/DroneDefeat_v2.jpg';
import videoBg from '..//assets/vids/Airshare.mp4'



const Solution = () => {
  return (
  <div className="solution">
    <h2 className="my-4">How it works</h2>
    <div className="videoContainer">
    <video src={videoBg} autoPlay loop muted>      
    </video>
    </div>
    <div className="content-wrapper">
      <div className="problem">
        <div className="content">
          <h3>Problem</h3>
          <p>
            Combat personnel trained in conventional warfare are ill-equipped
            to fight wars which increasingly employ weapons that hunt and
            engage their targets autonomously.
          </p>
          <p>
            Components to make autonomous equipment—from warehouse vehicles to
            weapons—are now widely available on the commercial market and
            readily accessible by adversaries. They are cheap to produce and
            hard to mitigate.
          </p>
          <p>
            Current counter-drone approaches don’t work against these new
            autonomous drones:
          </p>

          <ul style={{ "font-style": "italic", fontFamily: "cursive" }}>
            <li>
              Autonomous drones don’t use radio signals so signal jamming is
              ineffective
            </li>
            <li>
              Directed Energy only works on a clear day with direct line of
              sight; and even then, it requires a precise target fix for
              several seconds—impractical for small drones
            </li>
            <li>
              Explosives are expensive and create immense collateral damage at
              low altitudes
            </li>
            <li>
              Hit-to-kill and nets are too slow; both require expensive and
              impractically precise tracking systems
            </li>
          </ul>

          <p>
            Conventionally trained and equipped soldiers are no match in
            numbers or capability for this new threat. This new war requires a
            low-cost, low-collateral system which can be used by an untrained
            operator and deployed in seconds.
          </p>
        </div>
      </div>
      <div className="overwatch">
        <div className="content">
          <h4>
            AirShare’s OVERWATCH® Improves Autonomous Warfare Combat Readiness
          </h4>
          <p>
            AirShare has reached deployment-ready status (SRL 8) of its
            non-lethal, low-collateral 5th Generation OVERWATCH® Interceptor
            missile system—capable of disabling elusive drones employed by
            adversaries in conflict zones to spy, drop bombs, and perform
            kamikaze-style attacks. AirShare’s OVERWATCH® counter-drone system
            exploits a key vulnerability that all hostile drones possess: they
            all need to generate lift in order to fly.
          </p>

          <p>
            AirShare’s OVERWATCH® Interceptors contain patent-pending
            lift-disrupting CASPER™ countermeasures to safely down small,
            medium, and large drones by entangling their propellers, blocking
            air intakes, jamming their control surfaces, and obscuring
            important flight sensors.
          </p>
        </div>
      </div>

      <div className="key-features">
        <div className="content">
          <h4>Key Features:</h4>
          <ul>
            <li>
              <b>Cost: </b> At costs below US$5,000, the OVERWATCH®
              Interceptor removes the adversaries’ economic advantage—enabling
              allies to maintain cost and capability overmatch.
            </li>
            <li>
              <b>Defeats the evolving threat: </b>OVERWATCH® CASPER™
              countermeasures work by disrupting lift in drones of all types
              with engine sizes as large as 180cc.
            </li>
            <li>
              <b>Fast: </b> The OVERWATCH® Interceptor is agile—reaching
              speeds of Mach 0.7 and capable of intercepting the most elusive
              high-speed drones at ranges of up to 3km.
            </li>
            <li>
              <b>Non-lethal, low-collateral: </b>The missile does not explode,
              or directly hit its target, but rather deploys proprietary
              CASPER™ floating, non-hazardous elastic aerofoils.
            </li>
            <li>
              <b>Simple and safe: </b>OVERWATCH® is designed to be deployed in
              seconds, and used by civilian or military operators with minimal
              training.
            </li>
          </ul>
        </div>
      </div>
      <div className="sol-image my-4">
        <img className="picture" src={image} alt="" />
      </div>
    </div>
</div>
    // <div className = "solution">
    //   <h2>How it works</h2>
    //   <video src={videoBg} autoPlay loop muted >      
    //   </video>
    //     <p className = "p1"><b>PROBLEM</b></p>
    //     <p>Combat personnel trained in conventional warfare are ill-equipped to fight wars which increasingly employ
    //         weapons that hunt and engage their targets autonomously.</p>
    //     <p>Components to make autonomous equipment—from warehouse vehicles to weapons—are now widely available on the 
    //         commercial market and readily accessible by adversaries. They are cheap to produce and hard to mitigate.</p>
    //     <p>Current counter-drone approaches don’t work against these new autonomous drones:</p>

    //     <ul>
    //       <li>Autonomous drones don’t use radio signals so signal jamming is ineffective</li>
    //       <li>Directed Energy only works on a clear day with direct line of sight; and even then,
    //           it requires a precise target fix for several seconds—impractical for small drones</li>
    //       <li>Explosives are expensive and create immense collateral damage at low altitudes</li>
    //       <li>Hit-to-kill and nets are too slow; both require expensive and impractically precise tracking systems</li>
    //     </ul>

    //     <p>Conventionally trained and equipped soldiers are no match in numbers or capability for this new threat.
    //         This new war requires a low-cost, low-collateral system which can be used by an untrained operator and deployed
    //         in seconds.</p>
        
    //     <div className= "p2">
    //     <p ><b>AIRSHARE'S OVERWATCH® IMPROVES AUTONOMOUS WARFARE COMBAT READINESS</b></p>
    //     <p >AirShare has reached deployment-ready status (SRL 8) of its non-lethal, low-collateral 5th Generation OVERWATCH®
    //         Interceptor missile system—capable of disabling elusive drones employed by adversaries in conflict zones to 
    //         spy, drop bombs, and perform kamikaze-style attacks. AirShare’s OVERWATCH® counter-drone system exploits a key
    //         vulnerability that all hostile drones possess: they all need to generate lift in order to fly.</p>
        
    //     <p>AirShare’s OVERWATCH® Interceptors contain patent-pending lift-disrupting CASPER™ countermeasures to safely down small,
    //         medium, and large drones by entangling their propellers, blocking air intakes, jamming their control surfaces,
    //         and obscuring important flight sensors.</p>
    //     </div>
          
    //     <p><b>KEY FEATURES:</b></p>
    //     <ul>
    //       <li><b>Cost: </b> At costs below US$5,000, the OVERWATCH® Interceptor removes the adversaries’ economic 
    //         advantage—enabling allies to maintain cost and capability overmatch.</li>
    //       <li><b>Defeats the evolving threat: </b>OVERWATCH® CASPER™ countermeasures work by disrupting lift in drones of
    //         all types with engine sizes as large as 180cc .</li>
    //       <li><b>Fast: </b> The OVERWATCH® Interceptor is agile—reaching speeds of Mach 0.7 and capable of intercepting 
    //         the most elusive high-speed drones at ranges of up to 3km.</li>
    //       <li><b>Non-lethal, low-collateral: </b>The missile does not explode, or directly hit its target, but rather deploys
    //         proprietary CASPER™ floating, non-hazardous elastic aerofoils.</li>
    //       <li><b>Simple and safe: </b>OVERWATCH® is designed to be deployed in seconds, and used by civilian or military
    //         operators with minimal training.</li>
    //     </ul>

    //     <img className='picture' src={image}/>
    // </div>
  )
}

export default Solution