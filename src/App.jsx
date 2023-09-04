import Logo from './Logo.svg';
import Astyle from './App.module.css';
import Bg from "./Bg/bg.gif.mp4"
import LinkData from "./LinkData.json"

function App() {
  return (
    <div className={Astyle.App}>
      <header className={Astyle.App_header}>
        <img src={Logo} alt=''/>
      </header>
      <div className={Astyle.container}>
     <video autoPlay muted="muted" loop src={Bg} className={Astyle.AppBG}/>
        <h2>Киберспортивный центр
          рту мирэа</h2>
          <div className={Astyle.container_bottom}>
            <p>На этой странице вы можете найти все наши социальные сети</p>
            <div className={Astyle.container_links}>
            {LinkData.map((link) => (
              <a className={Astyle.item} key={link.id} href={link.to} target='_black'>
                <img src={link.logo} alt="" />
                <p><b>{link.title}</b><br />{link.text}</p>
              </a>
            ))}
            </div>
          </div>
      </div>
      <p className={Astyle.footer}>Скоро тут будет много всего, следите за новостями.</p>
    </div>
  );
}

export default App;