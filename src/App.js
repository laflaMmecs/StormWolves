import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import News from "./News/News";
import anons from "./img/anonspost.jpg"
function App() {
    const news = [
        { title: '⚡ И снова мы начинаем покорять дороги киберспорта, после долгой паузы организация снова начинает свою работу', description: 'За это время мы немного пересмотрели приоритеты организации и решили полностью посвятить себя развитию составов.' , image: "https://sun9-14.userapi.com/impg/QjsjsXhfNToNS6WFhhRhHlL_J8Tb2qQFEW82Ew/Sv3e5bhLkZ8.jpg?size=1920x1080&quality=96&sign=fc0d8d753ece11246302ce67a17cebe6&type=album",
            date: '20 April 2022'},
        { title: '⚡ Залетаем с анонсом нашего нового состава по CS:GO ⚡', description: '💥 Поприветствуйте наших ребят и давайте пожелаем им завоевать как можно больше титулов вместе 💥\n' +
                '\n' +
                ' Павел waterzy Барашков\n' +
                ' Эдвард Kaide Татаринов\n' +
                ' Руслан Magickst Гафиев\n' +
                ' Илья 1ll Воронов\n' +
                ' Ренат SUROVIY666 Абдрахманов' , image: "https://sun9-14.userapi.com/impg/QjsjsXhfNToNS6WFhhRhHlL_J8Tb2qQFEW82Ew/Sv3e5bhLkZ8.jpg?size=1920x1080&quality=96&sign=fc0d8d753ece11246302ce67a17cebe6&type=album",
            date: '20 April 2022'},
        // Добавьте другие новости в массив
    ];
  return (
    <div className="App">
        <body>
        <Header />
        <News news={news}/>

        </body>
    </div>
  );
}

export default App;
