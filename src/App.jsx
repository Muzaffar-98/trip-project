import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";
import { Destination } from "./pages/Destination";
import { Country } from "./pages/Country";
import { Blog } from "./pages/Blog";
import SignIn from "./pages/SignIn/SignInPage";


function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/password" element={<SignIn />} />
                    <Route path="/createAcc" element={<SignIn />} />
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="faq" element={<FAQ />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="contact" element={<Contact />} />

                        <Route path="destination">
                            <Route index element={<Destination />} />
                            <Route path="italy" element={<Country />} />
                        </Route>
                    </Route>
                    <Route path="404" element={<h1>404Page</h1>} />
                    <Route path="*" element={<Navigate to="404" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
