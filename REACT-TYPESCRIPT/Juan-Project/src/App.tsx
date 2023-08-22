import './App.css'

function App() {

  return(
    <div > 
      <SubsribedSideBar name={name} />
      <SubsribedHeader name={name} />
    </div>
  );
}

type OriginalProps = {
  name: string;
};

const SideBar = ({ name} :OriginalProps) => {
  // ... a lot code
  return <div> Helo, {name}</div>;
}

const Header = ({ name }: OriginalProps) => {
  // ... a lot code
  const favs = [1, 2, 3, 4, 5];
  return (
      <div>
        Your favorites, {name}
        {favs.map(fav => (
          <div>{fav}</div>
        ))}
      </div>
  );
};


type OriginalProps2 = {
  name: string;
  date: string;
};

const Nav = ({name} :OriginalProps2) =>{
  // ... a lot code.
  return <div> Hola, {name}</div>;
};

type ExtendedProps =  OriginalProps & {
  isSubscribed: boolean;
};

function withSubscribed(OriginalComponent : React.ComponentType<OriginalProps>) {

  const WithSubscribed = (props:ExtendedProps) => {
    
    const {isSubscribed} = props;

    if(!isSubscribed) return <div>Subscribe please</div>

    return <OriginalComponent {...props}/>
  }

  return WithSubscribed;
}

const SubsribedSideBar = withSubscribed(SideBar);
const SubsribedHeader = withSubscribed(Header);


export default App;
