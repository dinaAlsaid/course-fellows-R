import { Route, Switch } from 'react-router-dom';
import SocketClient from './components/party/socket-client';
import JoinRoom from './components/party/room/joinRoom.js';
import SocketClientProvider from './context/socketClientContext.js';
import Register from './components/Register';
import RegisterProvider from './context/auth';
import Auth from './context/outhprevent';
import Landing from './components/landingPage';
import MyCourses from './components/myCourses';
import Nav from './components/nav';
import PublicCourses from './components/publicCourses';
import Home from './components/Home';
import DetailCourse from './components/detailCourse';

import Detailvideo from './components/detailVideo.jsx';

function App() {
	return (
		<div className="App">
			<RegisterProvider>
				<SocketClientProvider>
					{/* <Auth /> */}
					<Nav />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/register" component={Register} />
						<Route path="/party" component={JoinRoom} />
						<Route path="/course/:id" component={DetailCourse} />
						<Route path="/public/:publicid" component={DetailCourse} />
						<Route path="/video/:courseId/:id" component={Detailvideo} />
						<Route path="/party/:roomId" component={SocketClient} />
						<Route path="/public" component={PublicCourses} />
					</Switch>
				</SocketClientProvider>
			</RegisterProvider>
		</div>
	);
}

export default App;
