export function App () {
  return (
    <div>
      <article>
        <header>
          <img 
            className="tw-followCard-avatar" 
            src="https://unavatar.io/midudev" 
            alt="El avatar de Midudev" 
          />
          <div className="tw-followCard-info">
            <strong>Miguel Angel Duran</strong>
            <span className="tw-followCard-infoUserName">@Midudev</span>
          </div>
        </header>
        <aside>
          <button className="tw-followCard-button">Seguir</button>
        </aside>
      </article>
    </div>
  )
}