import {Header, Posts, Users} from "./components";

function App() {

    return (
        <div>
            <div>
                <Header/>
            </div>
            <hr/>
            <div>
                {/*<Users/>*/}
                <Posts/>
            </div>
        </div>
    );
}

export default App;
