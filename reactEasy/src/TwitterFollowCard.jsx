import { useState } from "react";

export function TwitterFollowCard({ children, userName }) {
  const imageSrc = `https://unavatar.io/${userName}`;
  const [isFollowing, setIsFollowing] = useState(false)

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-Header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="El avatar de Midudev"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button" onClick={handleClick}>{text}</button>
      </aside>
    </article>
  );
}
