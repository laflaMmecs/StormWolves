import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import News from "./News/News";
import anons from "./img/anonspost.jpg"
import Results from "./Results/Results";
import ResultsPage from "./Results/ResultsPage";
function App() {
    const news = [
        { title: '⚡ Сегодня наша команда принимает участие в ESEA EU 5v5 Spring Cash Cup #3 и уже выбила Insilio со счетом 16:10', description: '💥 Давайте поддержим наших ребят 💥' , image: "https://sun9-77.userapi.com/impg/SXKsaxQwwcABnNq_xkNwm1BJIyh1Iiqvz7OUtQ/Oj2BaYa4zyc.jpg?size=828x650&quality=96&sign=4f363e5e7282c8d5e7b07e8f9d7edf6c&type=album",
            date: '23 April 2022'},
        { title: '⚡ Залетаем с анонсом нашего нового состава по CS:GO ⚡', description: '💥 Поприветствуйте наших ребят и давайте пожелаем им завоевать как можно больше титулов вместе 💥\n' +
                '\n' +
                ' Павел waterzy Барашков\n' +
                ' Эдвард Kaide Татаринов\n' +
                ' Руслан Magickst Гафиев\n' +
                ' Илья 1ll Воронов\n' +
                ' Ренат SUROVIY666 Абдрахманов' , image: "https://sun9-14.userapi.com/impg/QjsjsXhfNToNS6WFhhRhHlL_J8Tb2qQFEW82Ew/Sv3e5bhLkZ8.jpg?size=1920x1080&quality=96&sign=fc0d8d753ece11246302ce67a17cebe6&type=album",
            date: '20 April 2022'},
        { title: '⚡ И снова мы начинаем покорять дороги киберспорта, после долгой паузы организация начинает свою работу.', description: 'За это время мы немного пересмотрели приоритеты организации и решили полностью посвятить себя развитию составов \n'+ '❤ Спасибо всем, кто ждал и оставался с нами ❤' , image: "https://sun9-36.userapi.com/impg/Tnz0BE8__v2K-XUsJa-LK5y4ZorUZuFj1i39vQ/ocueTsK8Guw.jpg?size=1920x1080&quality=96&sign=9ff09360cdc5eec14697d17dddd4fc51&type=album",
            date: '19 April 2022'},
    ];
    const matches = [
        {
            title: 'ESEA EU 5v5 Spring Cash Cup #3',
            teamOne: 'Storm Wolves',
            teamOneImg: 'https://psv4.userapi.com/c536132/u546807291/docs/d40/9e7ceb5fed93/wy.png?extra=jeODgQYqEScFv0LRAQtRAJ47PQrxcc85EC1PCYDiQfJWFl_wRB_4njA8HTcCQn1OThePOu9-MRwkDPHZnBFjwFXXuFvDsc-CCvhblUaAGcCdSUUEMlDgJ84YQxV5gWaZ2ToBVpL8UJ6cL8DitGIaHsQ',
            teamTwoImg: 'https://img-cdn.hltv.org/teamlogo/_xqicJ8DEOBw-M74mVqh2-.png?ixlib=java-2.1.0&w=100&s=c531ba58de24b3ebbfce3b145755f42d',
            teamTwo: 'Insilio',
            score: '16:10',
        }
    ];
  return (
    <div className="App">
        <body>
        <Header />
        <News news={news}/>
        <ResultsPage matches={matches} />

        </body>
    </div>
  );
}

export default App;
