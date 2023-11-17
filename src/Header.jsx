import React from "react"




const Header = () => {
  return (
    <div>
    <header>
      <div className="top">
        <img src="/images/OIP.jpg" alt="" />
      <img src="/images/images/OIP.jpg" alt="" />
        <h1>LUCIFER</h1>
        </div>
        <div className="nav">
          <p><a href="#autofarm">AutoFarm</a></p>
          <p><a href="#autogeiger">AutoCook</a></p>
          <p><a href="#autocook">AutoGeiger</a></p>
          <p><a href="#multibot">MultiBot</a></p>
          <p><a href="#spammer">Spammer</a></p>
          </div>
    </header>
    <div className="android-header">
    <img src="/images/images/nav.png" alt="" />
      <div className="android-top">
      <img src="/images/images/OIP.jpg" alt="" />
        <h1>LUCIFER</h1>
      </div>
      <img src="/images/nav.png" alt="" className="nav-android" />
    </div>
    </div>
  )
}

export default Header