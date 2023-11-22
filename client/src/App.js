import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';


import Dashboard from './components/Dashboard';

import WeeklyReport from './components/WeeklyReport';
import MonthlyReport from './components/MonthlyReport';

import Iframee from './components/Iframe';


//Headquarter Shop Done
import HqShopMyOrangeAppAndroid from './components/HqShop/HqShop-My-OrangeApp-Android';
import HqShopMyOrangeAppIphone from './components/HqShop/HqShop-My-OrangeApp-Iphone';
import HqShopOrangeMoneyAfricaAndroid from './components/HqShop/HqShop-OrangeMoneyAfrica-Android';
import HqShopOrangeMoneyAfricaIphone from './components/HqShop/HqShop-OrangeMoneyAfrica-Iphone';




// Kenema Shop done
import KenemaShopMyOrangeAppAndroid from './components/KenemaShop/KenemaShop-My-OrangeApp-Android';
import KenemaShopOrangeMoneyAfricaAndroid from './components/KenemaShop/KenemaShop-OrangeMoneyAfrica-Android';
import KenemaShopOrangeMoneyAfricaIphone from './components/KenemaShop/KenemaShop-OrangeMoneyAfrica-Iphone';
import KenemaShopMyOrangeAppIphone from './components/KenemaShop/KenemaShop-My-OrangeApp-Iphone';



// Shop C
import BoShopMyOrangeAppAndroid from './components/BoShop/BoShop-My-OrangeApp-Android';
import BoShopOrangeMoneyAfricaAndroid from './components/BoShop/BoShop-OrangeMoneyAfrica-Android';
import BoShopOrangeMoneyAfricaIphone from './components/BoShop/BoShop-OrangeMoneyAfrica-Iphone';
import BoShopMyOrangeAppIphone from './components/BoShop/BoShop-My-OrangeApp-Iphone';

// Kono Shop
import KonoShopMyOrangeAppAndroid from './components/KonoShop/KonoShop-My-OrangeApp-Android';
import KonoShopOrangeMoneyAfricaAndroid from './components/KonoShop/KonoShop-OrangeMoneyAfrica-Android';
import KonoShopOrangeMoneyAfricaIphone from './components/KonoShop/KonoShop-OrangeMoneyAfrica-Iphone';
import KonoShopMyOrangeAppIphone from './components/KonoShop/KonoShop-My-OrangeApp-Iphone';


// Makeni Shop
import MakeniShopMyOrangeAppAndroid from './components/MakeniShop/MakeniShop-My-OrangeApp-Android';
import MakeniShopOrangeMoneyAfricaAndroid from './components/MakeniShop/MakeniShop-OrangeMoneyAfrica-Android';
import MakeniShopOrangeMoneyAfricaIphone from './components/MakeniShop/MakeniShop-OrangeMoneyAfrica-Iphone';
import MakeniShopMyOrangeAppIphone from './components/MakeniShop/MakeniShop-My-OrangeApp-Iphone';


// Flagship Shop
import FlagshipShopMyOrangeAppAndroid from './components/FlagshipShop/FlagshipShop-My-OrangeApp-Android';
import FlagshipShopOrangeMoneyAfricaAndroid from './components/FlagshipShop/FlagshipShop-OrangeMoneyAfrica-Android';
import FlagshipShopMyOrangeAppIphone from './components/FlagshipShop/FlagshipShop-My-OrangeApp-Iphone';
import FlagshipShopOrangeMoneyAfricaIphone from './components/FlagshipShop/FlagshipShop-OrangeMoneyAfrica-Iphone';



// Wellington Shop
import WellingtonShopMyOrangeAppAndroid from './components/WellingtonShop/WellingtonShop-My-OrangeApp-Android';
import WellingtonShopOrangeMoneyAfricaAndroid from './components/WellingtonShop/WellingtonShop-OrangeMoneyAfrica-Android';
import WellingtonShopMyOrangeAppIphone from './components/WellingtonShop/WellingtonShop-My-OrangeApp-Iphone';
import WellingtonShopOrangeMoneyAfricaIphone from './components/WellingtonShop/WellingtonShop-OrangeMoneyAfrica-Iphone';


// Waterloo Shop
import WaterlooShopMyOrangeAppAndroid from './components/WaterlooShop/WaterlooShop-My-OrangeApp-Android';
import WaterlooShopOrangeMoneyAfricaAndroid from './components/WaterlooShop/WaterlooShop-OrangeMoneyAfrica-Android';
import WaterlooShopMyOrangeAppIphone from './components/WaterlooShop/WaterlooShop-My-OrangeApp-Iphone';
import WaterlooShopOrangeMoneyAfricaIphone from './components/WaterlooShop/WaterlooShop-OrangeMoneyAfrica-Iphone';


// Lungi Shop
import LungiShopMyOrangeAppAndroid from './components/LungiShop/LungiShop-My-OrangeApp-Android';
import LungiShopOrangeMoneyAfricaAndroid from './components/LungiShop/LungiShop-OrangeMoneyAfrica-Android';
import LungiShopMyOrangeAppIphone from './components/LungiShop/LungiShop-My-OrangeApp-Iphone';
import LungiShopOrangeMoneyAfricaIphone from './components/LungiShop/LungiShop-OrangeMoneyAfrica-Iphone';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* Shop A */}
          <Route path="/" element={<Dashboard />} />

          <Route path="weeklyReport" element={<WeeklyReport />} />
          <Route path="monthlyReport" element={<MonthlyReport />} />

          <Route path="iframe" element={<Iframee />} />


          <Route path="my-orangeApp-hqshop-Android" element={<HqShopMyOrangeAppAndroid />} />
          <Route path="orange-money-africa-hqshop-Android" element={<HqShopOrangeMoneyAfricaAndroid />} />
          <Route path="orange-money-africa-hqshop-iphone" element={<HqShopOrangeMoneyAfricaIphone />} />
          <Route path="my-orangeApp-hqshop-iphone" element={<HqShopMyOrangeAppIphone />} />


          {/* Kenema Shop */}
          <Route path="my-orangeApp-kenemashop-Android" element={<KenemaShopMyOrangeAppAndroid />} />
          <Route path="orange-money-africa-kenemashop-Android" element={<KenemaShopOrangeMoneyAfricaAndroid />} />
          <Route path="orange-money-africa-kenemashop-iphone" element={<KenemaShopOrangeMoneyAfricaIphone />} />
          <Route path="my-orangeApp-kenemashop-iphone" element={<KenemaShopMyOrangeAppIphone />} />


          {/* Bo Shop  */}
          <Route path="my-orangeApp-boshop-Android" element={<BoShopMyOrangeAppAndroid />} />
          <Route path="orange-money-africa-boshop-Android" element={<BoShopOrangeMoneyAfricaAndroid />} />
          <Route path="orange-money-africa-boshop-iphone" element={<BoShopOrangeMoneyAfricaIphone />} />
          <Route path="my-orangeApp-boshop-iphone" element={<BoShopMyOrangeAppIphone />} />

          {/* Kono Shop */}
          <Route path="my-orangeApp-konoshop-Android" element={<KonoShopMyOrangeAppAndroid />} />
          <Route path="orange-money-africa-konoshop-Android" element={<KonoShopOrangeMoneyAfricaAndroid />} />
          <Route path="orange-money-africa-konoshop-iphone" element={<KonoShopOrangeMoneyAfricaIphone />} />
          <Route path="my-orangeApp-konoshop-iphone" element={<KonoShopMyOrangeAppIphone />} />


          {/* {/* Makeni Shop */}
          <Route path="my-orangeApp-makenishop-Android" element={<MakeniShopMyOrangeAppAndroid />} />
          <Route path="orange-money-africa-makenishop-Android" element={<MakeniShopOrangeMoneyAfricaAndroid />} />
          <Route path="orange-money-africa-makenishop-iphone" element={<MakeniShopOrangeMoneyAfricaIphone />} />
          <Route path="my-orangeApp-makenishop-iphone" element={<MakeniShopMyOrangeAppIphone />} />


           {/* Flagship Shop */}
          <Route path="my-orangeApp-flagshipshop-Android" element={<FlagshipShopMyOrangeAppAndroid />} />
          <Route path="orange-money-africa-flagshipshop-Android" element={<FlagshipShopOrangeMoneyAfricaAndroid />} />
          <Route path="orange-money-africa-flagshipshop-iphone" element={<FlagshipShopOrangeMoneyAfricaIphone />} />
          <Route path="my-orangeApp-flagshipshop-iphone" element={<FlagshipShopMyOrangeAppIphone />} />

          {/* Waterloo Shop */}
          <Route path="my-orangeApp-waterlooshop-Android" element={<WaterlooShopMyOrangeAppAndroid />} />
          <Route path="orange-money-africa-waterlooshop-Android" element={<WaterlooShopOrangeMoneyAfricaAndroid />} />
          <Route path="orange-money-africa-waterlooshop-iphone" element={<WaterlooShopOrangeMoneyAfricaIphone />} />
          <Route path="my-orangeApp-waterlooshop-iphone" element={<WaterlooShopMyOrangeAppIphone />} />



           {/* Wellington Shop */}
          <Route path="my-orangeApp-wellingtonshop-Android" element={<WellingtonShopMyOrangeAppAndroid />} />
          <Route path="orange-money-africa-wellingtonshop-Android" element={<WellingtonShopOrangeMoneyAfricaAndroid />} />
          <Route path="orange-money-africa-wellingtonshop-iphone" element={<WellingtonShopOrangeMoneyAfricaIphone />} />
          <Route path="my-orangeApp-wellingtonshop-iphone" element={<WellingtonShopMyOrangeAppIphone />} />


          {/* Lungi Shop */}
          <Route path="my-orangeApp-lungishop-Android" element={<LungiShopMyOrangeAppAndroid />} />
          <Route path="orange-money-africa-lungishop-Android" element={<LungiShopOrangeMoneyAfricaAndroid />} />
          <Route path="orange-money-africa-lungishop-iphone" element={<LungiShopOrangeMoneyAfricaIphone />} />
          <Route path="my-orangeApp-lungishop-iphone" element={<LungiShopMyOrangeAppIphone />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
