import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import News from "./News/News";
import React from "react";
import ResultsPage from "./Results/ResultsPage";
import Results from "./Results/Results";
import Main from "./Main";
import MagazineFeed from "./Magazine/MagazineFeed";
import PlayersFeed from "./Players/PlayersFeed";
import AboutUsFeed from "./AboutUs/AboutUsFeed";
import ContactUs from "./ContactUs/ContactUs";
function App() {
    // const news = [
    //     { title: '⚡ Сегодня наша команда принимает участие в ESEA EU 5v5 Spring Cash Cup #3 и уже выбила Insilio со счетом 16:10', description: '💥 Давайте поддержим наших ребят 💥' , image: "https://sun9-77.userapi.com/impg/SXKsaxQwwcABnNq_xkNwm1BJIyh1Iiqvz7OUtQ/Oj2BaYa4zyc.jpg?size=828x650&quality=96&sign=4f363e5e7282c8d5e7b07e8f9d7edf6c&type=album",
    //         date: '23 April 2022'},
    //     { title: '⚡ Залетаем с анонсом нашего нового состава по CS:GO ⚡', description: '💥 Поприветствуйте наших ребят и давайте пожелаем им завоевать как можно больше титулов вместе 💥\n' +
    //             '\n' +
    //             ' Павел waterzy Барашков\n' +
    //             ' Эдвард Kaide Татаринов\n' +
    //             ' Руслан Magickst Гафиев\n' +
    //             ' Илья 1ll Воронов\n' +
    //             ' Ренат SUROVIY666 Абдрахманов' , image: "https://sun9-14.userapi.com/impg/QjsjsXhfNToNS6WFhhRhHlL_J8Tb2qQFEW82Ew/Sv3e5bhLkZ8.jpg?size=1920x1080&quality=96&sign=fc0d8d753ece11246302ce67a17cebe6&type=album",
    //         date: '20 April 2022'},
    //     { title: '⚡ И снова мы начинаем покорять дороги киберспорта, после долгой паузы организация начинает свою работу.', description: 'За это время мы немного пересмотрели приоритеты организации и решили полностью посвятить себя развитию составов \n'+ '❤ Спасибо всем, кто ждал и оставался с нами ❤' , image: "https://sun9-36.userapi.com/impg/Tnz0BE8__v2K-XUsJa-LK5y4ZorUZuFj1i39vQ/ocueTsK8Guw.jpg?size=1920x1080&quality=96&sign=9ff09360cdc5eec14697d17dddd4fc51&type=album",
    //         date: '19 April 2022'},
    // ];

    const aboutUs = [
        { title: '2022 год',
            titleRoster:'Состав Storm Wolves 2022:',
            roster: ` Павел waterzy Барашков\n Эдвард Kaide Татаринов\n Руслан Magickst Гафиев\n Илья 1ll Воронов\n Ренат SUROVIY666 Абдрахманов`,
            description: '2022 год стартовал с анонса нового состава команды, ряды Storm Wolves пополнили: Павел waterzy Барашков,Эдвард Kaide Татаринов,Руслан Magickst Гафиев,Илья 1ll Воронов,Ренат SUROVIY666 Абдрахманов. На ESEA EU 5v5 Spring Cash Cup #3 - 23rd of April 2022 Storm Wolves прошли во второй раунд обыграв команду Insilio со счетом 16:10. Также команда приняла участие в ESEA Open Season, где команда заняла 5 место' ,
            imgUrl: '',
            imgDesc: '',
            image: '' },
        { title: '2021 год',
            titleRoster:'Состав Storm Wolves 2021(с сентября):',
            roster: ` Вадим V4D1M Панчук\n Роберт R0b3n Чигаускис\n Данила autostop Рубанов\n Егор killmatic Сторожок\n Влад Kvem Король`,
            description: '2022 год Считается самым успешным годом для Storm Wolves, команда вышла на  HLTV, заняла 3-4 место на ULTIMIGHT SERIES #1, заняла 2 место на CyberX 5x5 CG:GO Only Europe, 1 место на CyberPark Championship 2021, 1 место на 5X5 LAN Hyper Space, 2 место на CS:GO 5X5 Colizeum. Однако состав постоянно менялся, за команду успели сыграть: Евгений "fenvicious" Митсик,Андрей "BELCHONOKK" Ясинский,Павел "s1ren" Оглоблин,Вадим "V4D1M" Панчук,Роберт "R0b3n" Чигаускис,Данила "autostop" Рубанов,Егор "killmatic" Сторожок,Влад "Kvem" Король,Рубен "RubeN" Егикян,Артем "Wonder" Смирнов,Анатолий "r3x" Хомяков,Егор "nyx" Лебедев,Дмитрий "ek1ps" Токарев,Данила "Goose" Гуесв, Эдуард "Raider" Гальченко.' ,
            imgUrl: 'https://sun9-63.userapi.com/impg/0V16JviB7QYGksG7kSNIiN3h1WlDUDTr72ijig/PiiEqlchY1Y.jpg?size=2560x1920&quality=96&sign=a80c6e03f5cdbc3de2bbc001aa05eb07&type=album',
            imgDesc: 'Команда Storm Wolves на турнире от CyberX',
            image: '' },
    ];
  return (
    <div className="App">
        <body>
        <Header />

        <Routes>
            <Route path="/StormWolves" element={<Main/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/results" element={<ResultsPage  />} />
            <Route path="/magazine" element={<MagazineFeed  />} />
            <Route path="/history" element={<AboutUsFeed aboutUs={aboutUs} />} />
            <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        </body>
    </div>
  );
}

export default App;
